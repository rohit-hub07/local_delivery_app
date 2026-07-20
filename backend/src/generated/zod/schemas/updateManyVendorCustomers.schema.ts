import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VendorCustomersUpdateManyMutationInputObjectSchema as VendorCustomersUpdateManyMutationInputObjectSchema } from './objects/VendorCustomersUpdateManyMutationInput.schema';
import { VendorCustomersWhereInputObjectSchema as VendorCustomersWhereInputObjectSchema } from './objects/VendorCustomersWhereInput.schema';

export const VendorCustomersUpdateManySchema: z.ZodType<Prisma.VendorCustomersUpdateManyArgs> = z.object({ data: VendorCustomersUpdateManyMutationInputObjectSchema, where: VendorCustomersWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.VendorCustomersUpdateManyArgs>;

export const VendorCustomersUpdateManyZodSchema = z.object({ data: VendorCustomersUpdateManyMutationInputObjectSchema, where: VendorCustomersWhereInputObjectSchema.optional() }).strict();