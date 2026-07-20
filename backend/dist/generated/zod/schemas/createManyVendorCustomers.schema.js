import * as z from 'zod';
import { VendorCustomersCreateManyInputObjectSchema as VendorCustomersCreateManyInputObjectSchema } from './objects/VendorCustomersCreateManyInput.schema';
export const VendorCustomersCreateManySchema = z.object({ data: z.union([VendorCustomersCreateManyInputObjectSchema, z.array(VendorCustomersCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const VendorCustomersCreateManyZodSchema = z.object({ data: z.union([VendorCustomersCreateManyInputObjectSchema, z.array(VendorCustomersCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
