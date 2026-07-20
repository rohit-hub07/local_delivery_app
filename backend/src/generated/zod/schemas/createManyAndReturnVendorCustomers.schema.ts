import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VendorCustomersSelectObjectSchema as VendorCustomersSelectObjectSchema } from './objects/VendorCustomersSelect.schema';
import { VendorCustomersCreateManyInputObjectSchema as VendorCustomersCreateManyInputObjectSchema } from './objects/VendorCustomersCreateManyInput.schema';

export const VendorCustomersCreateManyAndReturnSchema: z.ZodType<Prisma.VendorCustomersCreateManyAndReturnArgs> = z.object({ select: VendorCustomersSelectObjectSchema.optional(), data: z.union([ VendorCustomersCreateManyInputObjectSchema, z.array(VendorCustomersCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.VendorCustomersCreateManyAndReturnArgs>;

export const VendorCustomersCreateManyAndReturnZodSchema = z.object({ select: VendorCustomersSelectObjectSchema.optional(), data: z.union([ VendorCustomersCreateManyInputObjectSchema, z.array(VendorCustomersCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();