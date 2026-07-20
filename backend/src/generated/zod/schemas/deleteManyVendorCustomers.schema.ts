import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VendorCustomersWhereInputObjectSchema as VendorCustomersWhereInputObjectSchema } from './objects/VendorCustomersWhereInput.schema';

export const VendorCustomersDeleteManySchema: z.ZodType<Prisma.VendorCustomersDeleteManyArgs> = z.object({ where: VendorCustomersWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.VendorCustomersDeleteManyArgs>;

export const VendorCustomersDeleteManyZodSchema = z.object({ where: VendorCustomersWhereInputObjectSchema.optional() }).strict();