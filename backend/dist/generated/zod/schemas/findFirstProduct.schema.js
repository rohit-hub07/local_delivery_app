import * as z from 'zod';
import { ProductIncludeObjectSchema as ProductIncludeObjectSchema } from './objects/ProductInclude.schema';
import { ProductOrderByWithRelationInputObjectSchema as ProductOrderByWithRelationInputObjectSchema } from './objects/ProductOrderByWithRelationInput.schema';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './objects/ProductWhereInput.schema';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './objects/ProductWhereUniqueInput.schema';
import { ProductScalarFieldEnumSchema } from './enums/ProductScalarFieldEnum.schema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const ProductFindFirstSelectSchema = z.object({
    id: z.boolean().optional(),
    vendorId: z.boolean().optional(),
    productName: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    vendor: z.boolean().optional(),
    subscription: z.boolean().optional(),
    request: z.boolean().optional(),
    _count: z.boolean().optional()
}).strict();
export const ProductFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    vendorId: z.boolean().optional(),
    productName: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    vendor: z.boolean().optional(),
    subscription: z.boolean().optional(),
    request: z.boolean().optional(),
    _count: z.boolean().optional()
}).strict();
export const ProductFindFirstSchema = z.object({ select: ProductFindFirstSelectSchema.optional(), include: z.lazy(() => ProductIncludeObjectSchema.optional()), orderBy: z.union([ProductOrderByWithRelationInputObjectSchema, ProductOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductWhereInputObjectSchema.optional(), cursor: ProductWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProductScalarFieldEnumSchema, ProductScalarFieldEnumSchema.array()]).optional() }).strict();
export const ProductFindFirstZodSchema = z.object({ select: ProductFindFirstSelectSchema.optional(), include: z.lazy(() => ProductIncludeObjectSchema.optional()), orderBy: z.union([ProductOrderByWithRelationInputObjectSchema, ProductOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductWhereInputObjectSchema.optional(), cursor: ProductWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProductScalarFieldEnumSchema, ProductScalarFieldEnumSchema.array()]).optional() }).strict();
