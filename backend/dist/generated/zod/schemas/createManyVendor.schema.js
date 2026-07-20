import * as z from 'zod';
import { VendorCreateManyInputObjectSchema as VendorCreateManyInputObjectSchema } from './objects/VendorCreateManyInput.schema';
export const VendorCreateManySchema = z.object({ data: z.union([VendorCreateManyInputObjectSchema, z.array(VendorCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const VendorCreateManyZodSchema = z.object({ data: z.union([VendorCreateManyInputObjectSchema, z.array(VendorCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
