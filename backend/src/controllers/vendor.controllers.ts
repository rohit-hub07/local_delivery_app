import { Request, Response } from "express"
import { VendorSchema } from "../generated/zod/index.js"
import { db } from "../libs/db.js";



export const createVendorProfile = async(req: Request, res: Response) =>{
  try {
    const vendor = VendorSchema.omit({
      id: true,
      userId: true,
      createdAt: true,
      updatedAt: true,

    })

    const validateBody = vendor.safeParse(req.body);
    if(!validateBody.success){
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        fieldErrors: validateBody.error.flatten().fieldErrors,
      });
    }
    const user = req.user;
    console.log("user inside of createvendor: ",user)
    const { businessName, businessPhone} = validateBody.data;

    if(!user){
      return res.status(400).json({
        message: "Please login!",
        success: false 
      })
    }

    const newVendorProfile = await db.vendor.create({
      data:{
        businessName,
        businessPhone,
        userId: user.id 
      }
    })

    if(!newVendorProfile){
      return res.status(500).json({
        message: "Somethine went wrong!",
        success: false
      })
    }

    // req.vendor = newVendorProfile;

    return res.status(201).json({
      message: "Vendor profile created",
      success: true,
      profile: newVendorProfile,
    })
  } catch (error: any) {
    console.log("Error wwhile creating vendor profile: ", error.message)
    return res.status(500).json({
      message: "Internal Server Error",
      success: false
    })
  }
}