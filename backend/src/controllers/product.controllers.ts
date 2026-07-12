import { Request, Response } from "express"
import { ProductSchema } from "../generated/zod/index.js"
import { db } from "../libs/db.js";
import { success } from "zod";

export const addProduct = async (req: Request, res: Response) => {
  try {
    const productDetails = ProductSchema.omit({
      createdAt: true,
      updatedAt: true,
      id: true,
      vendorId: true,
    })

    const validateBody = productDetails.safeParse(req.body);
    if (!validateBody.success) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        fieldErrors: validateBody.error.flatten().fieldErrors,
      });
    }
    const { description, productName } = validateBody.data
    // const newProduct = 
    const vendorId = req.vendor;
    console.log("req.vendor: ", req.vendor)
    console.log("vendoorId: ", vendorId)
    const newProduct = await db.product.create({
      data: {
        vendorId: vendorId.id, description, productName
      }
    })

    if (!newProduct) {
      return res.status(500).json({
        message: "Something went wrong!",
        success: false,
      })
    }
    return res.status(201).json({
      message: "Product created successfully!",
      success: true,
      product: newProduct
    })

  } catch (error: any) {
    console.log("Error while adding product: ", error.message)
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    })
  }
}

export const removeProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    if (!id) {
      return res.status(404).json({
        message: "Product id is required!",
        success: false,
      })
    }
    const product = await db.product.findUnique({ where: { id } })
    if (!product) {
      return res.status(404).json({
        message: "Product doesn't exist!",
        success: false,
      })
    }

    await db.product.delete({ where: { id } });
    return res.status(200).json({
      message: "Product deleted successfully!",
      success: true
    })
  } catch (error: any) {
    console.log("Error while deleting product: ", error.message)
    return res.status(500).json({
      message: "Internal Server Errror",
      success: false
    })
  }
}

// all products of specific vendor
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const allProducts = await db.product.findMany({where: {vendorId: id}});
    if(!allProducts){
      return res.status(404).json({
        message: "No products found!",
        success: false
      })
    }
    return res.status(200).json({
      message: "All products fetched successfully!",
      success: true,
      allProducts: allProducts
    })
  } catch (error: any) {
    console.log("Error fetching all products: ", error.message)
    return res.status(500).json({
      message: "Internal Server Errror",
      success: false
    })
  }
}

export const getProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string
    const product = await db.product.findUnique({where: {id}})
    if(!product){
      return res.status(404).json({
        message: "Product doesn't exist or removed!",
        success: false
      })
    }
    return res.status(200).json({
      message: "Product fetched successfully!",
      success: true,
      product: product
    })
  } catch (error: any) {
    console.log("Error inside of get product by id: ", error.message)
    return res.status(500).json({
      message: "Internal Server Error",
      success: false
    })
  }
}