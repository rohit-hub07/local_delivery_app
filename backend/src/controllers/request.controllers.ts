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