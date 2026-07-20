import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VendorCustomersSelectObjectSchema as VendorCustomersSelectObjectSchema } from './objects/VendorCustomersSelect.schema';
import { VendorCustomersIncludeObjectSchema as VendorCustomersIncludeObjectSchema } from './objects/VendorCustomersInclude.schema';
import { VendorCustomersWhereUniqueInputObjectSchema as VendorCustomersWhereUniqueInputObjectSchema } from './objects/VendorCustomersWhereUniqueInput.schema';

export const VendorCustomersFindUniqueSchema: z.ZodType<Prisma.VendorCustomersFindUniqueArgs> = z.object({ select: VendorCustomersSelectObjectSchema.optional(), include: VendorCustomersIncludeObjectSchema.optional(), where: VendorCustomersWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.VendorCustomersFindUniqueArgs>;

export const VendorCustomersFindUniqueZodSchema = z.object({ select: VendorCustomersSelectObjectSchema.optional(), include: VendorCustomersIncludeObjectSchema.optional(), where: VendorCustomersWhereUniqueInputObjectSchema }).strict();