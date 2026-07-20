import * as z from 'zod';
import { VendorWhereInputObjectSchema as VendorWhereInputObjectSchema } from './objects/VendorWhereInput.schema';
export const VendorDeleteManySchema = z.object({ where: VendorWhereInputObjectSchema.optional() }).strict();
export const VendorDeleteManyZodSchema = z.object({ where: VendorWhereInputObjectSchema.optional() }).strict();
