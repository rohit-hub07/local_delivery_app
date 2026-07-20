import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VendorCustomersIncludeObjectSchema as VendorCustomersIncludeObjectSchema } from './objects/VendorCustomersInclude.schema';
import { VendorCustomersOrderByWithRelationInputObjectSchema as VendorCustomersOrderByWithRelationInputObjectSchema } from './objects/VendorCustomersOrderByWithRelationInput.schema';
import { VendorCustomersWhereInputObjectSchema as VendorCustomersWhereInputObjectSchema } from './objects/VendorCustomersWhereInput.schema';
import { VendorCustomersWhereUniqueInputObjectSchema as VendorCustomersWhereUniqueInputObjectSchema } from './objects/VendorCustomersWhereUniqueInput.schema';
import { VendorCustomersScalarFieldEnumSchema } from './enums/VendorCustomersScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const VendorCustomersFindFirstOrThrowSelectSchema: z.ZodType<Prisma.VendorCustomersSelect> = z.object({
    id: z.boolean().optional(),
    vendorId: z.boolean().optional(),
    customerId: z.boolean().optional(),
    customerPhone: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    vendor: z.boolean().optional(),
    user: z.boolean().optional(),
    subscription: z.boolean().optional(),
    request: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.VendorCustomersSelect>;

export const VendorCustomersFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    vendorId: z.boolean().optional(),
    customerId: z.boolean().optional(),
    customerPhone: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    vendor: z.boolean().optional(),
    user: z.boolean().optional(),
    subscription: z.boolean().optional(),
    request: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const VendorCustomersFindFirstOrThrowSchema: z.ZodType<Prisma.VendorCustomersFindFirstOrThrowArgs> = z.object({ select: VendorCustomersFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => VendorCustomersIncludeObjectSchema.optional()), orderBy: z.union([VendorCustomersOrderByWithRelationInputObjectSchema, VendorCustomersOrderByWithRelationInputObjectSchema.array()]).optional(), where: VendorCustomersWhereInputObjectSchema.optional(), cursor: VendorCustomersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([VendorCustomersScalarFieldEnumSchema, VendorCustomersScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.VendorCustomersFindFirstOrThrowArgs>;

export const VendorCustomersFindFirstOrThrowZodSchema = z.object({ select: VendorCustomersFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => VendorCustomersIncludeObjectSchema.optional()), orderBy: z.union([VendorCustomersOrderByWithRelationInputObjectSchema, VendorCustomersOrderByWithRelationInputObjectSchema.array()]).optional(), where: VendorCustomersWhereInputObjectSchema.optional(), cursor: VendorCustomersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([VendorCustomersScalarFieldEnumSchema, VendorCustomersScalarFieldEnumSchema.array()]).optional() }).strict();