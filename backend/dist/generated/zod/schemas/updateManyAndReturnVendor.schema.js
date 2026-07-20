import * as z from 'zod';
import { VendorSelectObjectSchema as VendorSelectObjectSchema } from './objects/VendorSelect.schema';
import { VendorUpdateManyMutationInputObjectSchema as VendorUpdateManyMutationInputObjectSchema } from './objects/VendorUpdateManyMutationInput.schema';
import { VendorWhereInputObjectSchema as VendorWhereInputObjectSchema } from './objects/VendorWhereInput.schema';
export const VendorUpdateManyAndReturnSchema = z.object({ select: VendorSelectObjectSchema.optional(), data: VendorUpdateManyMutationInputObjectSchema, where: VendorWhereInputObjectSchema.optional() }).strict();
export const VendorUpdateManyAndReturnZodSchema = z.object({ select: VendorSelectObjectSchema.optional(), data: VendorUpdateManyMutationInputObjectSchema, where: VendorWhereInputObjectSchema.optional() }).strict();
