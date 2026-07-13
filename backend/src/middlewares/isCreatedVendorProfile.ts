import { Request, Response, NextFunction } from "express"
import { db } from "../libs/db.js";

export const isCreatedVendorProfile = async(req: Request, res: Response, next : NextFunction) =>{
  const user = req.user;
  if(user.role == "CUSTOMER"){
    return res.status(401).json({
      message: "You are not allowed to perform this action!",
      success: false
    })
  }
  const vendor = await db.vendor.findUnique({where: {userId: user.id}});
  if(!vendor){
    return res.status(404).json({
      message: "Please create your vendor profile",
      success: false,
    })
  }
  next()
}