import { Request, Response } from "express"
import { RequestsSchema } from "../generated/zod/index.js"
import { db } from "../libs/db.js";

export const customerRequest = async (req: Request, res: Response) => {
  try {
    // const productId = req.params.id as string;
    const requestDetails = RequestsSchema.omit({
      id: true,
      createdAt: true,
      updatedAt: true,
      vendorCustomerId: true,
      status: true,
      // productId: true,
      respondedAt: true,
    })

    const validateBody = requestDetails.safeParse(req.body);
    if (!validateBody.success) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        fieldErrors: validateBody.error.flatten().fieldErrors,
      });
    }
    const { start_date, end_date, message, type, productId } = validateBody.data

    const product = await db.product.findUnique({ where: { id: productId } })

    if (!product) {
      return res.status(404).json({ message: "Product doesn't exist!", success: false })
    }
    const user = req.user
    if(!user){
      return res.status(401).json({
        message: "Unauthorize",
        success: false
      })
    }
    // find vendor customer id
    const vendorCustomer = await db.vendorCustomers.findUnique({
      where: {
        vendorId_customerPhone: {
          vendorId: product.vendorId,
          customerPhone: user.phone
        }
      }
    })

    if (!vendorCustomer) {
      return res.status(404).json({
        message: "Vendor customer doesn't exist!",
        success: false
      })
    }

    const newRequest = await db.requests.create({
      data: {
        vendorCustomerId: vendorCustomer.id,
        productId: product.id,
        message: message,
        start_date: start_date,
        end_date: end_date,
        type: type
      }
    })
    if (!newRequest) {
      return res.status(500).json({
        message: "Something went wrong while creating request!",
        success: false
      })
    }
    return res.status(201).json({
      message: 'Request added successfully!',
      success: true,
      requestDetails: newRequest
    })
  } catch (error: any) {
    console.log("Error while creating request: ", error.message)
    return res.status(500).json({
      message: "Internal Server Error",
      success: false
    })
  }
}

export const getCustomerRequests = async (req: Request, res: Response) => {
  try {
    const vendorId = req.vendor.id;
    if(!vendorId){
      return res.status(401).json({
        message: "Vendor doesn't exist!",
        success: false
      })
    }
    const requests = await db.requests.findMany({
      where: {
        vendorCustomers: {
          vendorId: vendorId,
        }
      },
      include:{
        vendorCustomers:{
          select:{
            user: true
          }
        }
      }
    })
    if (!requests) {
      return res.status(404).json({
        message: "No requests available!",
        success: false,
      })
    }

    return res.status(200).json({
      message: "Requests fetched successfully!",
      success: true,
      requests: requests
    })

  } catch (error: any) {
    console.log("Error getting the customer requests: ", error.message)
    return res.status(500).json({
      message: "Internal Server Error",
      success: false
    })
  }
}

export const vendorResponse = async (req: Request, res: Response) => {
  try {
    const requestId = req.params.id as string
    if (!requestId) {
      return res.status(404).json({
        message: "Can't get the request id!",
        success: false,
      })
    }

    const request = await db.requests.findUnique({ where: { id: requestId } })

    if (!request) {
      return res.status(404).json({
        message: "No request available!",
        success: false,
      })
    }
    const requestData = RequestsSchema.omit({
      id: true,
      createdAt: true,
      updatedAt: true,
      vendorCustomerId: true,
      productId: true,
      respondedAt: true,
      message: true,
      start_date: true,
      type: true,
      end_date: true,

    })
    const validateBody = requestData.safeParse(req.body)
    if (!validateBody.success) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        fieldErrors: validateBody.error.flatten().fieldErrors,
      });
    }

    const { status } = validateBody.data

    // update the request
    const updatedRequest = await db.requests.update({
      where: { id: requestId },
      data: {
        status,
        respondedAt: new Date()
      }
    })
    if (!updatedRequest) {
      return res.status(500).json({
        message: "Something went wrong while updated the request!",
        success: false
      })
    }
    return res.status(200).json({
      message: "Updated request successfully!",
      success: true,
      updatedRequest: updatedRequest
    })
  } catch (error: any) {
    console.log("Error updating the customer request: ", error.message)
    return res.status(500).json({
      message: "Internal Server Error",
      success: false
    })
  }
}

export const customerRequestStatus = async (req: Request, res: Response) => {
  try {
    const user = req.user
    if(!user){
      return res.status(401).json({
        message: "Unauthorize",
        success: false
      })
    }
    const requestStatus = await db.requests.findMany({
      where: {
        vendorCustomers: {
          customerPhone: user.phone
        }
      }
    })
    if (!requestStatus) {
      return res.status(404).json({
        message: "No requests available!",
        success: false,
      })
    }
    return res.status(200).json({
      message: "Requests fetched successfully!",
      success: true,
      requestStatus: requestStatus
    })
  } catch (error: any) {
    console.log("Error fetching the customer request status: ", error.message)
    return res.status(500).json({
      message: "Internal Server Error",
      success: false
    })
  }
}