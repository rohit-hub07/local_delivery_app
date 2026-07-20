import * as z from 'zod';
import { VendorCustomersWhereInputObjectSchema as VendorCustomersWhereInputObjectSchema } from './objects/VendorCustomersWhereInput.schema';
export const VendorCustomersDeleteManySchema = z.object({ where: VendorCustomersWhereInputObjectSchema.optional() }).strict();
export const VendorCustomersDeleteManyZodSchema = z.object({ where: VendorCustomersWhereInputObjectSchema.optional() }).strict();
