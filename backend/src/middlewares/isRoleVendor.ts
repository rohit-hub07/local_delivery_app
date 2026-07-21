import { Request, Response, NextFunction } from "express"

export const isRoleVendor = async(req: Request, res: Response, next : NextFunction) =>{
  const user = req.user;
  if(!user){
      return res.status(401).json({
        message: "Unauthorize",
        success: false
      })
    }
  if(user?.role == "CUSTOMER"){
    return res.status(401).json({
      message: "You are not allowed to perform this action!",
      success: false
    })
  }
  next()
}