import { Request, Response } from "express"
import { VendorSchema } from "../generated/zod/index.js"
import { db } from "../libs/db.js";
import { includes } from "zod";



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
    if(!user){
      return res.status(401).json({
        message: "Unauthorize",
        success: false
      })
    }
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
    console.log("Error while creating vendor profile: ", error.message)
    return res.status(500).json({
      message: "Internal Server Error",
      success: false
    })
  }
}

export const vendorProfile = async(req: Request, res: Response) =>{
  try {
    // check if vendor profile exists or not
    console.log("Request is hitting vendorProfile")
    const user = req.user
    if(user.role == "CUSTOMER"){
      return res.status(403).json({
        message: "You are not allowed to perform this action!",
        success: false
      })
    }
    // const id = req.params.id as string
    const vendorProfile = await db.vendor.findUnique({where: {
      userId: user.id,
    },
    include: {
      user: true
    }
    });
    if(!vendorProfile){
      return res.status(404).json({
        message: "Vendor profile doesn't exists!",
        success: false,
      })
    }
    // render the profile
    return res.status(200).json({
      message: "Vendor profile fetched successfully!",
      success: true,
      vendorProfile: vendorProfile
    })
  } catch (error: any) {
    console.log("Error fetching vendor profile: ", error.message)
    return res.status(500).json({
      message: "Internal Server Error",
      success: false
    })
  }
}