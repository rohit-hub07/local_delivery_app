import { Request, Response } from "express"
import { db } from "../libs/db.js"
import { success } from "zod"

export const subscribeProduct = async (req: Request, res: Response) => {
  try {
    // get the product id from params
    const id = req.params.id as string
    if (!id) {
      return res.status(400).json({ message: "Product ID is required", success: false });
    }
    const product = await db.product.findUnique({ where: { id } })
    if (!product) {
      return res.status(404).json({ message: "Product not found", success: false });
    }
    // get the vendor id from product
    const vendorId = product?.vendorId;

    if (!vendorId) {
      return res.status(404).json({
        message: "Vendor id doesn't exist!",
        success: false
      })
    }
    const user = req.user
    if (!user || !user.phone) {
      return res.status(401).json({ message: "Unauthorized. Valid user session required.", success: false });
    }

    // find the vendor_customerid using vendor is and loggedin User phone number

    const vendor_customer = await db.vendorCustomers.findUnique({
      where: {
        vendorId_customerPhone: {
          vendorId: vendorId,
          customerPhone: user.phone
        }
      }
    })

    if (!vendor_customer) {
      return res.status(404).json({
        message: "Vendor customer doesn't exist!",
        success: false
      })
    }
    const vendor_customerId = vendor_customer.id;

    // check for existing subscription
    const existingSubscription = await db.customerSubscription.findUnique({
      where: {
        vendorCustomerId_productId: {
          vendorCustomerId: vendor_customerId,
          productId: id
        }
      }
    });

    if (existingSubscription) {
      return res.status(400).json({
        message: "You are already subscribed to this product.",
        success: false
      });
    }

    const newSubscription = await db.customerSubscription.create({
      data: {
        vendorCustomerId: vendor_customerId,
        productId: id
      }
    })
    return res.status(201).json({
      message: "Subscribed to the product successfully!",
      success: true,
      newSubscription: newSubscription
    })
  } catch (error: any) {
    console.log("Error while subscribing to the product: ", error.message)
    return res.status(500).json({
      message: "Internal Server Error",
      success: false
    })
  }
}

export const unsubscribeProduct = async (req: Request, res: Response) => {
  try {
    // get product id from params
    const productId = req.params.id as string
    if (!productId) {
      return res.status(404).json({
        message: "Product id is empty!",
        success: false,
      })
    }
    // find the product using the id 
    const product = await db.product.findUnique({
      where: { id: productId }
    })
    if (!product) {
      return res.status(404).json({
        message: "Product doesn't exist!",
        success: false,
      })
    }

    // get vendor id from product
    const vendorId = product.vendorId

    if (!vendorId) {
      return res.status(404).json({
        message: "VendorId doesn't exist!",
        success: false,
      })
    }

    const user = req.user
    if (!user || !user.phone) {
      return res.status(401).json({ message: "Unauthorized. Valid user session required.", success: false });
    }
    //check if the vendor customer exists
    const vendor_customer = await db.vendorCustomers.findUnique({
      where: {
        vendorId_customerPhone: {
          vendorId: vendorId,
          customerPhone: user.phone
        }
      }
    })
    if (!vendor_customer) {
      return res.status(404).json({
        message: "Vendor Customer doesn't exist",
        success: false
      })
    }

    const subscribedCustomerProduct = await db.customerSubscription.findUnique({
      where: {
        vendorCustomerId_productId: {
          vendorCustomerId: vendor_customer.id,
          productId: productId
        }
      }
    })

    if (!subscribedCustomerProduct) {
      return res.status(404).json({
        message: "No subscribed products available!",
        success: false
      })
    }
    // delete the customer subscription of that product
    await db.customerSubscription.delete({
      where: {
        vendorCustomerId_productId: {
          vendorCustomerId: vendor_customer.id,
          productId: productId
        }
      }
    })
    return res.status(200).json({
      message: "product removed from subscription!",
      success: true,
    })

  } catch (error: any) {
    console.log("Error while removing subscribed product: ", error.message)
    return res.status(500).json({
      message: "Internal Server Error",
      success: false
    })
  }
}