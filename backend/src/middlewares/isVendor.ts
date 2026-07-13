import { Request, Response, NextFunction } from "express"
import { db } from "../libs/db.js"

export const isVendor = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.user;

  if (!user) {
    return res.status(401).json({
      message: "Please login first!",
      success: false,
    })
  }

  const vendor = await db.vendor.findUnique({
    where: {
      userId: user.id,
    },
  })

  console.log("Vendor data inside of isVendor middleware", vendor)

  if (!vendor) {
    return res.status(404).json({
      message: "Please login with your vendor profile!",
      success: false,
    })
  }

  req.vendor = vendor;
  next();
}