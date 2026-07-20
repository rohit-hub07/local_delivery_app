import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VendorCustomersSelectObjectSchema as VendorCustomersSelectObjectSchema } from './objects/VendorCustomersSelect.schema';
import { VendorCustomersIncludeObjectSchema as VendorCustomersIncludeObjectSchema } from './objects/VendorCustomersInclude.schema';
import { VendorCustomersUpdateInputObjectSchema as VendorCustomersUpdateInputObjectSchema } from './objects/VendorCustomersUpdateInput.schema';
import { VendorCustomersUncheckedUpdateInputObjectSchema as VendorCustomersUncheckedUpdateInputObjectSchema } from './objects/VendorCustomersUncheckedUpdateInput.schema';
import { VendorCustomersWhereUniqueInputObjectSchema as VendorCustomersWhereUniqueInputObjectSchema } from './objects/VendorCustomersWhereUniqueInput.schema';

export const VendorCustomersUpdateOneSchema: z.ZodType<Prisma.VendorCustomersUpdateArgs> = z.object({ select: VendorCustomersSelectObjectSchema.optional(), include: VendorCustomersIncludeObjectSchema.optional(), data: z.union([VendorCustomersUpdateInputObjectSchema, VendorCustomersUncheckedUpdateInputObjectSchema]), where: VendorCustomersWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.VendorCustomersUpdateArgs>;

export const VendorCustomersUpdateOneZodSchema = z.object({ select: VendorCustomersSelectObjectSchema.optional(), include: VendorCustomersIncludeObjectSchema.optional(), data: z.union([VendorCustomersUpdateInputObjectSchema, VendorCustomersUncheckedUpdateInputObjectSchema]), where: VendorCustomersWhereUniqueInputObjectSchema }).strict();