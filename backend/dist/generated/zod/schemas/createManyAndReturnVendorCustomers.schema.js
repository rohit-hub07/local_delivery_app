import * as z from 'zod';
import { VendorCustomersSelectObjectSchema as VendorCustomersSelectObjectSchema } from './objects/VendorCustomersSelect.schema';
import { VendorCustomersCreateManyInputObjectSchema as VendorCustomersCreateManyInputObjectSchema } from './objects/VendorCustomersCreateManyInput.schema';
export const VendorCustomersCreateManyAndReturnSchema = z.object({ select: VendorCustomersSelectObjectSchema.optional(), data: z.union([VendorCustomersCreateManyInputObjectSchema, z.array(VendorCustomersCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const VendorCustomersCreateManyAndReturnZodSchema = z.object({ select: VendorCustomersSelectObjectSchema.optional(), data: z.union([VendorCustomersCreateManyInputObjectSchema, z.array(VendorCustomersCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
