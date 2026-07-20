import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VendorCustomersSelectObjectSchema as VendorCustomersSelectObjectSchema } from './objects/VendorCustomersSelect.schema';
import { VendorCustomersIncludeObjectSchema as VendorCustomersIncludeObjectSchema } from './objects/VendorCustomersInclude.schema';
import { VendorCustomersWhereUniqueInputObjectSchema as VendorCustomersWhereUniqueInputObjectSchema } from './objects/VendorCustomersWhereUniqueInput.schema';

export const VendorCustomersDeleteOneSchema: z.ZodType<Prisma.VendorCustomersDeleteArgs> = z.object({ select: VendorCustomersSelectObjectSchema.optional(), include: VendorCustomersIncludeObjectSchema.optional(), where: VendorCustomersWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.VendorCustomersDeleteArgs>;

export const VendorCustomersDeleteOneZodSchema = z.object({ select: VendorCustomersSelectObjectSchema.optional(), include: VendorCustomersIncludeObjectSchema.optional(), where: VendorCustomersWhereUniqueInputObjectSchema }).strict();