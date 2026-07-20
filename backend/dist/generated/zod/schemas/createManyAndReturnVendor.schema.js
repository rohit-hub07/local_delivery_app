import * as z from 'zod';
import { VendorSelectObjectSchema as VendorSelectObjectSchema } from './objects/VendorSelect.schema';
import { VendorCreateManyInputObjectSchema as VendorCreateManyInputObjectSchema } from './objects/VendorCreateManyInput.schema';
export const VendorCreateManyAndReturnSchema = z.object({ select: VendorSelectObjectSchema.optional(), data: z.union([VendorCreateManyInputObjectSchema, z.array(VendorCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const VendorCreateManyAndReturnZodSchema = z.object({ select: VendorSelectObjectSchema.optional(), data: z.union([VendorCreateManyInputObjectSchema, z.array(VendorCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
