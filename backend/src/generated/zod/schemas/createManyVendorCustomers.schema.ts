import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VendorCustomersCreateManyInputObjectSchema as VendorCustomersCreateManyInputObjectSchema } from './objects/VendorCustomersCreateManyInput.schema';

export const VendorCustomersCreateManySchema: z.ZodType<Prisma.VendorCustomersCreateManyArgs> = z.object({ data: z.union([ VendorCustomersCreateManyInputObjectSchema, z.array(VendorCustomersCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.VendorCustomersCreateManyArgs>;

export const VendorCustomersCreateManyZodSchema = z.object({ data: z.union([ VendorCustomersCreateManyInputObjectSchema, z.array(VendorCustomersCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();