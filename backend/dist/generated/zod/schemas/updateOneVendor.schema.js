import * as z from 'zod';
import { VendorSelectObjectSchema as VendorSelectObjectSchema } from './objects/VendorSelect.schema';
import { VendorIncludeObjectSchema as VendorIncludeObjectSchema } from './objects/VendorInclude.schema';
import { VendorUpdateInputObjectSchema as VendorUpdateInputObjectSchema } from './objects/VendorUpdateInput.schema';
import { VendorUncheckedUpdateInputObjectSchema as VendorUncheckedUpdateInputObjectSchema } from './objects/VendorUncheckedUpdateInput.schema';
import { VendorWhereUniqueInputObjectSchema as VendorWhereUniqueInputObjectSchema } from './objects/VendorWhereUniqueInput.schema';
export const VendorUpdateOneSchema = z.object({ select: VendorSelectObjectSchema.optional(), include: VendorIncludeObjectSchema.optional(), data: z.union([VendorUpdateInputObjectSchema, VendorUncheckedUpdateInputObjectSchema]), where: VendorWhereUniqueInputObjectSchema }).strict();
export const VendorUpdateOneZodSchema = z.object({ select: VendorSelectObjectSchema.optional(), include: VendorIncludeObjectSchema.optional(), data: z.union([VendorUpdateInputObjectSchema, VendorUncheckedUpdateInputObjectSchema]), where: VendorWhereUniqueInputObjectSchema }).strict();
