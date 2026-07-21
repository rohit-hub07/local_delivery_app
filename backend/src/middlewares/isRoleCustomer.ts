import { NextFunction, Request, Response } from "express";

export const isRoleCustomer = async(req: Request, res: Response, next: NextFunction) =>{
  const user = req.user
  if(user?.role !== "CUSTOMER"){
    return res.status(403).json({
      message: "You are not allowed to perform this action!",
      success: false
    })
  }
  next()
}