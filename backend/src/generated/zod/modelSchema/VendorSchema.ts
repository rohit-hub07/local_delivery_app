import { z } from 'zod';

/////////////////////////////////////////
// VENDOR SCHEMA
/////////////////////////////////////////

export const VendorSchema = z.object({
  id: z.uuid(),
  userId: z.string(),
  businessName: z.string().min(2,{message: "Business name must be at least 2 characters long"}),
  businessPhone: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format" }),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Vendor = z.infer<typeof VendorSchema>

export default VendorSchema;
