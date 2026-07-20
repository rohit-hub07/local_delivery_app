import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VendorCustomersSelectObjectSchema as VendorCustomersSelectObjectSchema } from './objects/VendorCustomersSelect.schema';
import { VendorCustomersIncludeObjectSchema as VendorCustomersIncludeObjectSchema } from './objects/VendorCustomersInclude.schema';
import { VendorCustomersCreateInputObjectSchema as VendorCustomersCreateInputObjectSchema } from './objects/VendorCustomersCreateInput.schema';
import { VendorCustomersUncheckedCreateInputObjectSchema as VendorCustomersUncheckedCreateInputObjectSchema } from './objects/VendorCustomersUncheckedCreateInput.schema';

export const VendorCustomersCreateOneSchema: z.ZodType<Prisma.VendorCustomersCreateArgs> = z.object({ select: VendorCustomersSelectObjectSchema.optional(), include: VendorCustomersIncludeObjectSchema.optional(), data: z.union([VendorCustomersCreateInputObjectSchema, VendorCustomersUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.VendorCustomersCreateArgs>;

export const VendorCustomersCreateOneZodSchema = z.object({ select: VendorCustomersSelectObjectSchema.optional(), include: VendorCustomersIncludeObjectSchema.optional(), data: z.union([VendorCustomersCreateInputObjectSchema, VendorCustomersUncheckedCreateInputObjectSchema]) }).strict();