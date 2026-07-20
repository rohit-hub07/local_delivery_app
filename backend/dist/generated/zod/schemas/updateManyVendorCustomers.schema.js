import * as z from 'zod';
import { VendorCustomersUpdateManyMutationInputObjectSchema as VendorCustomersUpdateManyMutationInputObjectSchema } from './objects/VendorCustomersUpdateManyMutationInput.schema';
import { VendorCustomersWhereInputObjectSchema as VendorCustomersWhereInputObjectSchema } from './objects/VendorCustomersWhereInput.schema';
export const VendorCustomersUpdateManySchema = z.object({ data: VendorCustomersUpdateManyMutationInputObjectSchema, where: VendorCustomersWhereInputObjectSchema.optional() }).strict();
export const VendorCustomersUpdateManyZodSchema = z.object({ data: VendorCustomersUpdateManyMutationInputObjectSchema, where: VendorCustomersWhereInputObjectSchema.optional() }).strict();
