import * as z from 'zod';
import { VendorCustomersSelectObjectSchema as VendorCustomersSelectObjectSchema } from './objects/VendorCustomersSelect.schema';
import { VendorCustomersIncludeObjectSchema as VendorCustomersIncludeObjectSchema } from './objects/VendorCustomersInclude.schema';
import { VendorCustomersUpdateInputObjectSchema as VendorCustomersUpdateInputObjectSchema } from './objects/VendorCustomersUpdateInput.schema';
import { VendorCustomersUncheckedUpdateInputObjectSchema as VendorCustomersUncheckedUpdateInputObjectSchema } from './objects/VendorCustomersUncheckedUpdateInput.schema';
import { VendorCustomersWhereUniqueInputObjectSchema as VendorCustomersWhereUniqueInputObjectSchema } from './objects/VendorCustomersWhereUniqueInput.schema';
export const VendorCustomersUpdateOneSchema = z.object({ select: VendorCustomersSelectObjectSchema.optional(), include: VendorCustomersIncludeObjectSchema.optional(), data: z.union([VendorCustomersUpdateInputObjectSchema, VendorCustomersUncheckedUpdateInputObjectSchema]), where: VendorCustomersWhereUniqueInputObjectSchema }).strict();
export const VendorCustomersUpdateOneZodSchema = z.object({ select: VendorCustomersSelectObjectSchema.optional(), include: VendorCustomersIncludeObjectSchema.optional(), data: z.union([VendorCustomersUpdateInputObjectSchema, VendorCustomersUncheckedUpdateInputObjectSchema]), where: VendorCustomersWhereUniqueInputObjectSchema }).strict();
