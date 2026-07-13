import { Request, Response } from "express"
import { VendorCustomersSchema } from "../generated/zod/index.js"
import { db } from "../libs/db.js";



// add customers 
export const addCustomers = async (req: Request, res: Response) => {
  try {
    const customer = VendorCustomersSchema.omit({
      id: true,
      createdAt: true,
      updatedAt: true,
      vendorId: true,
    })
    
    const validateBody = customer.safeParse(req.body);
    if (!validateBody.success) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        fieldErrors: validateBody.error.flatten().fieldErrors,
      });
    }

    const {customerPhone} = validateBody.data
    const user = await db.user.findUnique({where: {phone: customerPhone}})

    // allow vendor to add only customers 
    if(!user || user.role == "VENDOR"){
      return res.status(404).json({
        message: "Customer doesn't exist!",
        success: false,
      })
    }

    const vendorId = req.vendor.id

    // add customer
    const newCustomer = await db.vendorCustomers.create({
      data:{
        vendorId,
        customerPhone 
      }
    })

    if(!newCustomer){
      return res.status(500).json({
        message: "Something went wrong while adding customer",
        success: false
      })
    }
    return res.status(200).json({
      message: "Customer added successfully!",
      success: true,
      customer: newCustomer
    })
  } catch (error: any) {
    console.log("Error inside of vendor customers controller: ",error.message)
    return res.status(500).json({
      message: "Internal Server Error",
      success: false
    })
  }
}



