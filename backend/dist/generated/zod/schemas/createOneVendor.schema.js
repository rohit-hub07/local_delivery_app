import * as z from 'zod';
import { VendorSelectObjectSchema as VendorSelectObjectSchema } from './objects/VendorSelect.schema';
import { VendorIncludeObjectSchema as VendorIncludeObjectSchema } from './objects/VendorInclude.schema';
import { VendorCreateInputObjectSchema as VendorCreateInputObjectSchema } from './objects/VendorCreateInput.schema';
import { VendorUncheckedCreateInputObjectSchema as VendorUncheckedCreateInputObjectSchema } from './objects/VendorUncheckedCreateInput.schema';
export const VendorCreateOneSchema = z.object({ select: VendorSelectObjectSchema.optional(), include: VendorIncludeObjectSchema.optional(), data: z.union([VendorCreateInputObjectSchema, VendorUncheckedCreateInputObjectSchema]) }).strict();
export const VendorCreateOneZodSchema = z.object({ select: VendorSelectObjectSchema.optional(), include: VendorIncludeObjectSchema.optional(), data: z.union([VendorCreateInputObjectSchema, VendorUncheckedCreateInputObjectSchema]) }).strict();
