import * as z from 'zod';
import { VendorUpdateManyMutationInputObjectSchema as VendorUpdateManyMutationInputObjectSchema } from './objects/VendorUpdateManyMutationInput.schema';
import { VendorWhereInputObjectSchema as VendorWhereInputObjectSchema } from './objects/VendorWhereInput.schema';
export const VendorUpdateManySchema = z.object({ data: VendorUpdateManyMutationInputObjectSchema, where: VendorWhereInputObjectSchema.optional() }).strict();
export const VendorUpdateManyZodSchema = z.object({ data: VendorUpdateManyMutationInputObjectSchema, where: VendorWhereInputObjectSchema.optional() }).strict();
