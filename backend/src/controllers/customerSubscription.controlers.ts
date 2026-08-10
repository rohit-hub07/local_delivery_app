import { Request, Response } from "express"
import { z } from "zod"
import { db } from "../libs/db.js"
import { SubscriptionService, type CalendarDay, type SubscriptionStats } from "../services/subscription.service.js"
import { sendNotification } from "../services/notification.service.js"

const SubscriptionSchema = z.object({
  productId: z.string(),
  dailyQuantity: z.coerce.number().positive("Daily quantity must be a positive number"),
  startDate: z.coerce.date(),
})

export const subscribeProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id as string
    if (!productId) {
      return res.status(400).json({ message: "Product ID is required", success: false })
    }

    const product = await db.product.findUnique({ where: { id: productId } })
    if (!product) {
      return res.status(404).json({ message: "Product not found", success: false })
    }

    const user = req.user
    if (!user) {
      return res.status(401).json({ message: "Unauthorized. Valid user session required.", success: false })
    }

    const vendorCustomer = await db.vendorCustomers.findUnique({
      where: {
        vendorId_customerId: {
          vendorId: product.vendorId,
          customerId: user.id,
        },
      },
    })

    if (!vendorCustomer) {
      return res.status(404).json({
        message: "Vendor customer relationship not found",
        success: false,
      })
    }

    const validateBody = SubscriptionSchema.safeParse({
      productId: req.body.productId || productId,
      dailyQuantity: req.body.dailyQuantity,
      startDate: req.body.startDate,
    })

    if (!validateBody.success) {
      return res.status(400).json({
        message: "Validation failed",
        success: false,
        fieldErrors: validateBody.error.flatten().fieldErrors,
      })
    }

    const { dailyQuantity, startDate } = validateBody.data

    const existingSubscription = await db.customerSubscription.findUnique({
      where: {
        vendorCustomerId_productId: {
          vendorCustomerId: vendorCustomer.id,
          productId: productId,
        },
      },
      select: {
        id: true,
        status: true,
      },
    })

    if (existingSubscription) {
      if (existingSubscription.status === "STOPPED") {
        const resubscribed = await db.customerSubscription.update({
          where: {
            vendorCustomerId_productId: {
              vendorCustomerId: vendorCustomer.id,
              productId,
            },
          },
          data: {
            dailyQuantity: dailyQuantity.toString(),
            startDate,
            status: "ACTIVE",
          },
          include: {
            product: {
              select: {
                id: true,
                productName: true,
                description: true,
                unit: true,
              },
            },
            vendorCustomers: {
              include: {
                user: true
              }
            }
          },
        })

        req.io.to(product.vendorId).emit("customer_subscribed_product", resubscribed)

        return res.status(200).json({
          message: "Subscribed to the product successfully!",
          success: true,
          subscription: resubscribed,
        })
      }

      return res.status(400).json({
        message: "You are already subscribed to this product.",
        success: false,
      })
    }

    const newSubscription = await db.customerSubscription.create({
      data: {
        vendorCustomerId: vendorCustomer.id,
        productId,
        dailyQuantity: dailyQuantity.toString(),
        startDate,
      },
      include: {
        product: {
          select: {
            id: true,
            productName: true,
            description: true,
            unit: true,
          },
        },
        vendorCustomers: {
          include: {
            user: true
          }
        }
      },
    })

    const vendorData = await db.vendor.findUnique({
      where: {
        id: product.vendorId
      }
    })

    if (!vendorData) {
      return res.status(404).json({
        message: "Can't fetch the vendor data to send notification!",
        success: false
      })
    }

    // send notiifcation to the vendor that a customer has subscribed to his product
    await sendNotification(
      vendorData.userId,
      `🎉 New Subscriber!`,
      `${user.name} just subscribed to your product, ${product.productName}.`
    );


    req.io.to(product.vendorId).emit("customer_subscribed_product", newSubscription)

    return res.status(201).json({
      message: "Subscribed to the product successfully!",
      success: true,
      subscription: newSubscription,
    })
  } catch (error: any) {
    console.log("Error while subscribing to the product: ", error.message)
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    })
  }
}

export const unsubscribeProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id as string
    if (!productId) {
      return res.status(404).json({
        message: "Product id is empty!",
        success: false,
      })
    }

    const product = await db.product.findUnique({ where: { id: productId } })
    if (!product) {
      return res.status(404).json({
        message: "Product doesn't exist!",
        success: false,
      })
    }

    const user = req.user
    if (!user) {
      return res.status(401).json({ message: "Unauthorized. Valid user session required.", success: false })
    }

    const vendorCustomer = await db.vendorCustomers.findUnique({
      where: {
        vendorId_customerId: {
          vendorId: product.vendorId,
          customerId: user.id,
        },
      },
    })

    if (!vendorCustomer) {
      return res.status(404).json({
        message: "Vendor Customer doesn't exist",
        success: false,
      })
    }

    const subscription = await db.customerSubscription.findUnique({
      where: {
        vendorCustomerId_productId: {
          vendorCustomerId: vendorCustomer.id,
          productId,
        },
      },
    })

    if (!subscription) {
      return res.status(404).json({
        message: "No subscription found for this product!",
        success: false,
      })
    }

    await db.customerSubscription.update({
      where: {
        vendorCustomerId_productId: {
          vendorCustomerId: vendorCustomer.id,
          productId,
        },
      },
      data: {
        status: "STOPPED",
      },
      include: {
        product: {
          select: {
            id: true,
            productName: true,
            description: true,
            unit: true,
          },
        },
        vendorCustomers: {
          include: {
            user: true
          }
        }
      },
    })

    req.io.to(product.vendorId).emit("customer_unsubcribed_product", {
      ...subscription,
      status: "STOPPED",
    })

    const vendor = await db.vendor.findUnique({
      where: {
        id: product.vendorId
      }
    })

    // fetch the vendor details to get the vendor profile data
    // so that we can send notification to the vendor
    if (!vendor) {
      return res.status(404).json({
        message: "Can't fetch the vendor data to send notification!",
        success: false
      })
    }

    //send notificatio to the vendor
    await sendNotification(
      vendor.userId,
      `Subscription Deactivated: ${product.productName}`,
      `${user.name} has deactivated their subscription to your product, ${product.productName}.`
    );


    return res.status(200).json({
      message: "Product removed from subscription!",
      success: true,
    })
  } catch (error: any) {
    console.log("Error while removing subscribed product: ", error.message)
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    })
  }
}

export const getMySubscriptions = async (req: Request, res: Response) => {
  try {
    const user = req.user
    if (!user) {
      return res.status(401).json({ message: "Unauthorized. Valid user session required.", success: false })
    }

    const subscriptions = await SubscriptionService.getCustomerSubscriptions(user.id)
    const stats: SubscriptionStats[] = []
    const now = new Date()
    const currentYear = now.getFullYear()
    const currentMonth = now.getMonth() + 1

    for (const subscription of subscriptions) {
      const subscriptionStats = await SubscriptionService.getSubscriptionStatsForMonth(subscription.id, currentYear, currentMonth)
      if (subscriptionStats) {
        stats.push(subscriptionStats)
      }
    }

    return res.status(200).json({
      message: "Subscriptions fetched successfully!",
      success: true,
      subscriptions: stats,
    })
  } catch (error: any) {
    console.log("Error while fetching subscriptions: ", error.message)
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    })
  }
}

export const getSubscriptionCalendar = async (req: Request, res: Response) => {
  try {
    const user = req.user
    if (!user) {
      return res.status(401).json({ message: "Unauthorized. Valid user session required.", success: false })
    }

    const subscriptionId = req.params.id as string
    if (!subscriptionId) {
      return res.status(400).json({ message: "Subscription ID is required", success: false })
    }

    const month = req.query.month ? parseInt(req.query.month as string) : new Date().getMonth() + 1
    const year = req.query.year ? parseInt(req.query.year as string) : new Date().getFullYear()

    if (month < 1 || month > 12) {
      return res.status(400).json({ message: "Invalid month. Must be between 1 and 12", success: false })
    }

    const subscription = await db.customerSubscription.findUnique({
      where: { id: subscriptionId },
      include: {
        product: {
          select: {
            productName: true,
          },
        },
        vendorCustomers: {
          select: {
            customerId: true,
            vendorId: true,
          },
        },
      },
    })

    if (!subscription) {
      return res.status(404).json({ message: "Subscription not found", success: false })
    }

    if (subscription.vendorCustomers.customerId !== user.id) {
      return res.status(403).json({ message: "You are not authorized to view this subscription", success: false })
    }

    const vendor = await db.vendor.findUnique({
      where: { id: subscription.vendorCustomers.vendorId },
      select: { businessName: true },
    })

    const calendar: CalendarDay[] = await SubscriptionService.getMonthlyCalendar(subscriptionId, year, month)

    return res.status(200).json({
      message: "Calendar fetched successfully!",
      success: true,
      calendar,
      month,
      year,
      productName: subscription.product.productName,
      vendorBusinessName: vendor?.businessName || '',
    })
  } catch (error: any) {
    console.log("Error while fetching calendar: ", error.message)
    if (error.message === "Subscription not found") {
      return res.status(404).json({ message: "Subscription not found", success: false })
    }
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    })
  }
}

export const customerSubscribedProduct = async (req: Request, res: Response) => {
  try {
    const userId = req?.user?.id
    if (!userId) {
      return res.status(404).json({
        message: "Please login first!",
        success: false,
      })
    }

    const subscribedProducts = await db.product.findMany({
      where: {
        subscription: {
          some: {
            status: "ACTIVE",
            vendorCustomers: {
              user: {
                id: userId,
              },
            },
          },
        },
      },
      include: {
        vendor: true,
      },
    })

    return res.status(200).json({
      message: "Products fetched successfully!",
      success: true,
      subscribeProduct: subscribedProducts,
    })
  } catch (error: any) {
    console.log("Error while fetching subscribed products: ", error.message)
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    })
  }
}

export const vendorSubscibedProducts = async (req: Request, res: Response) => {
  try {
    const vendor = req.vendor
    if (!vendor) {
      return res.status(401).json({
        message: "Vendor doesn't exist!",
        success: false,
      })
    }

    const subscribedProducts = await db.customerSubscription.findMany({
      where: {
        vendorCustomers: {
          vendorId: vendor.id,
        },
      },
      include: {
        product: true,
        vendorCustomers: {
          include: {
            user: true,
          },
        },
      },
    })

    return res.status(200).json({
      message: "Customer subcribed products fetched successfully!",
      success: true,
      subscribedProducts,
    })
  } catch (error: any) {
    console.log("Error while fetching customer subscribed products: ", error.message)
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    })
  }
}

export const getVendorCustomerSubscriptions = async (req: Request, res: Response) => {
  try {
    const vendor = req.vendor
    if (!vendor) {
      return res.status(401).json({
        message: "Vendor doesn't exist!",
        success: false,
      })
    }

    const customerId = req.params.customerId as string
    if (!customerId) {
      return res.status(400).json({
        message: "Customer ID is required",
        success: false,
      })
    }

    const subscribedProducts = await db.customerSubscription.findMany({
      where: {
        vendorCustomers: {
          vendorId: vendor.id,
          customerId,
        },
      },
      include: {
        product: true,
        vendorCustomers: {
          include: {
            user: true,
          },
        },
      },
    })

    return res.status(200).json({
      message: "Customer subscriptions fetched successfully!",
      success: true,
      subscribedProducts,
    })
  } catch (error: any) {
    console.log("Error while fetching customer subscriptions: ", error.message)
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    })
  }
}

export const getVendorSubscriptionCalendar = async (req: Request, res: Response) => {
  try {
    const vendor = req.vendor
    if (!vendor) {
      return res.status(401).json({ message: "Vendor doesn't exist!", success: false })
    }

    const subscriptionId = req.params.id as string
    if (!subscriptionId) {
      return res.status(400).json({ message: "Subscription ID is required", success: false })
    }

    const month = req.query.month ? parseInt(req.query.month as string) : new Date().getMonth() + 1
    const year = req.query.year ? parseInt(req.query.year as string) : new Date().getFullYear()

    if (month < 1 || month > 12) {
      return res.status(400).json({ message: "Invalid month. Must be between 1 and 12", success: false })
    }

    const subscription = await db.customerSubscription.findUnique({
      where: { id: subscriptionId },
      include: {
        vendorCustomers: {
          select: {
            vendorId: true,
          },
        },
      },
    })

    if (!subscription) {
      return res.status(404).json({ message: "Subscription not found", success: false })
    }

    if (subscription.vendorCustomers.vendorId !== vendor.id) {
      return res.status(403).json({ message: "You are not authorized to view this subscription", success: false })
    }

    const calendar: CalendarDay[] = await SubscriptionService.getMonthlyCalendar(subscriptionId, year, month)

    return res.status(200).json({
      message: "Calendar fetched successfully!",
      success: true,
      calendar,
      month,
      year,
    })
  } catch (error: any) {
    console.log("Error while fetching vendor calendar: ", error.message)
    if (error.message === "Subscription not found") {
      return res.status(404).json({ message: "Subscription not found", success: false })
    }
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    })
  }
}

export const getVendorSubscriptionStats = async (req: Request, res: Response) => {
  try {
    const vendor = req.vendor
    if (!vendor) {
      return res.status(401).json({ message: "Vendor doesn't exist!", success: false })
    }

    const subscriptionId = req.params.id as string
    if (!subscriptionId) {
      return res.status(400).json({ message: "Subscription ID is required", success: false })
    }

    const subscription = await db.customerSubscription.findUnique({
      where: { id: subscriptionId },
      include: {
        vendorCustomers: {
          select: {
            vendorId: true,
          },
        },
        product: {
          select: {
            productName: true,
            unit: true,
          },
        },
      },
    })

    if (!subscription) {
      return res.status(404).json({ message: "Subscription not found", success: false })
    }

    if (subscription.vendorCustomers.vendorId !== vendor.id) {
      return res.status(403).json({ message: "You are not authorized to view this subscription", success: false })
    }

    const month = req.query.month ? parseInt(req.query.month as string) : new Date().getMonth() + 1
    const year = req.query.year ? parseInt(req.query.year as string) : new Date().getFullYear()

    if (month < 1 || month > 12) {
      return res.status(400).json({ message: "Invalid month. Must be between 1 and 12", success: false })
    }

    const stats = await SubscriptionService.getSubscriptionStatsForMonth(subscriptionId, year, month)

    return res.status(200).json({
      message: "Subscription stats fetched successfully!",
      success: true,
      stats,
    })
  } catch (error: any) {
    console.log("Error while fetching vendor subscription stats: ", error.message)
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    })
  }
}

export const getVendorDailyDeliveryReport = async (req: Request, res: Response) => {
  try {
    const vendor = req.vendor
    if (!vendor) {
      return res.status(401).json({ message: "Vendor doesn't exist!", success: false })
    }

    const dateParam = req.query.date ? String(req.query.date) : new Date().toISOString().split("T")[0]
    const reportDate = new Date(dateParam)

    if (Number.isNaN(reportDate.getTime())) {
      return res.status(400).json({ message: "Invalid date", success: false })
    }

    const report = await SubscriptionService.getVendorDailyDeliveryReport(vendor.id, reportDate)

    return res.status(200).json({
      message: "Delivery report fetched successfully!",
      success: true,
      report,
    })
  } catch (error: any) {
    console.log("Error while fetching vendor daily delivery report: ", error.message)
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    })
  }
}

// not important for now
export const isValidRequest = async (req: Request, res: Response) => {
  try {
    // check the subscription id with the request subscription id 

    // if the request subscription id is not found then no need to take that request as accepted request because customer has already removed that product

  } catch (error) {

  }
}

export const deleteStoppedSubscription = async (req: Request, res: Response) => {
  try {
    const subscriptionId = req.params.id as string
    if (!subscriptionId) {
      return res.status(400).json({
        message: "Subscription ID is required",
        success: false,
      })
    }

    const vendor = req.vendor
    if (!vendor) {
      return res.status(401).json({
        message: "Vendor doesn't exist!",
        success: false,
      })
    }

    const subscription = await db.customerSubscription.findUnique({
      where: { id: subscriptionId },
      include: {
        product: {
          select: {
            productName: true,
          },
        },
        vendorCustomers: {
          select: {
            vendorId: true,
            customerId: true,
          },
        },
      },
    })

    if (!subscription) {
      return res.status(404).json({
        message: "Subscription not found!",
        success: false,
      })
    }

    if (subscription.vendorCustomers.vendorId !== vendor.id) {
      return res.status(403).json({
        message: "You are not authorized to perform this action!",
        success: false,
      })
    }

    if (subscription.status !== "STOPPED") {
      return res.status(400).json({
        message: "Only stopped subscriptions can be deleted!",
        success: false,
      })
    }

    await db.customerSubscription.delete({
      where: { id: subscriptionId },
    })

    req.io.to(subscription.vendorCustomers.customerId).emit("customer_stopped_subscription_deleted", subscriptionId)

    return res.status(200).json({
      message: "Stopped subscription deleted successfully!",
      success: true,
    })
  } catch (error: any) {
    console.log("Error while deleting stopped subscription: ", error.message)
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    })
  }
}