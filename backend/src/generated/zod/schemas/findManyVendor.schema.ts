import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VendorIncludeObjectSchema as VendorIncludeObjectSchema } from './objects/VendorInclude.schema';
import { VendorOrderByWithRelationInputObjectSchema as VendorOrderByWithRelationInputObjectSchema } from './objects/VendorOrderByWithRelationInput.schema';
import { VendorWhereInputObjectSchema as VendorWhereInputObjectSchema } from './objects/VendorWhereInput.schema';
import { VendorWhereUniqueInputObjectSchema as VendorWhereUniqueInputObjectSchema } from './objects/VendorWhereUniqueInput.schema';
import { VendorScalarFieldEnumSchema } from './enums/VendorScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const VendorFindManySelectSchema: z.ZodType<Prisma.VendorSelect> = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    businessName: z.boolean().optional(),
    businessPhone: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    user: z.boolean().optional(),
    product: z.boolean().optional(),
    vendorcustomers: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.VendorSelect>;

export const VendorFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    businessName: z.boolean().optional(),
    businessPhone: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    user: z.boolean().optional(),
    product: z.boolean().optional(),
    vendorcustomers: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const VendorFindManySchema: z.ZodType<Prisma.VendorFindManyArgs> = z.object({ select: VendorFindManySelectSchema.optional(), include: z.lazy(() => VendorIncludeObjectSchema.optional()), orderBy: z.union([VendorOrderByWithRelationInputObjectSchema, VendorOrderByWithRelationInputObjectSchema.array()]).optional(), where: VendorWhereInputObjectSchema.optional(), cursor: VendorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([VendorScalarFieldEnumSchema, VendorScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.VendorFindManyArgs>;

export const VendorFindManyZodSchema = z.object({ select: VendorFindManySelectSchema.optional(), include: z.lazy(() => VendorIncludeObjectSchema.optional()), orderBy: z.union([VendorOrderByWithRelationInputObjectSchema, VendorOrderByWithRelationInputObjectSchema.array()]).optional(), where: VendorWhereInputObjectSchema.optional(), cursor: VendorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([VendorScalarFieldEnumSchema, VendorScalarFieldEnumSchema.array()]).optional() }).strict();