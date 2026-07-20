import * as z from 'zod';
import { CustomerSubscriptionIncludeObjectSchema as CustomerSubscriptionIncludeObjectSchema } from './objects/CustomerSubscriptionInclude.schema';
import { CustomerSubscriptionOrderByWithRelationInputObjectSchema as CustomerSubscriptionOrderByWithRelationInputObjectSchema } from './objects/CustomerSubscriptionOrderByWithRelationInput.schema';
import { CustomerSubscriptionWhereInputObjectSchema as CustomerSubscriptionWhereInputObjectSchema } from './objects/CustomerSubscriptionWhereInput.schema';
import { CustomerSubscriptionWhereUniqueInputObjectSchema as CustomerSubscriptionWhereUniqueInputObjectSchema } from './objects/CustomerSubscriptionWhereUniqueInput.schema';
import { CustomerSubscriptionScalarFieldEnumSchema } from './enums/CustomerSubscriptionScalarFieldEnum.schema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const CustomerSubscriptionFindFirstOrThrowSelectSchema = z.object({
    id: z.boolean().optional(),
    vendorCustomerId: z.boolean().optional(),
    productId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    vendorCustomers: z.boolean().optional(),
    product: z.boolean().optional()
}).strict();
export const CustomerSubscriptionFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    vendorCustomerId: z.boolean().optional(),
    productId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    vendorCustomers: z.boolean().optional(),
    product: z.boolean().optional()
}).strict();
export const CustomerSubscriptionFindFirstOrThrowSchema = z.object({ select: CustomerSubscriptionFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => CustomerSubscriptionIncludeObjectSchema.optional()), orderBy: z.union([CustomerSubscriptionOrderByWithRelationInputObjectSchema, CustomerSubscriptionOrderByWithRelationInputObjectSchema.array()]).optional(), where: CustomerSubscriptionWhereInputObjectSchema.optional(), cursor: CustomerSubscriptionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CustomerSubscriptionScalarFieldEnumSchema, CustomerSubscriptionScalarFieldEnumSchema.array()]).optional() }).strict();
export const CustomerSubscriptionFindFirstOrThrowZodSchema = z.object({ select: CustomerSubscriptionFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => CustomerSubscriptionIncludeObjectSchema.optional()), orderBy: z.union([CustomerSubscriptionOrderByWithRelationInputObjectSchema, CustomerSubscriptionOrderByWithRelationInputObjectSchema.array()]).optional(), where: CustomerSubscriptionWhereInputObjectSchema.optional(), cursor: CustomerSubscriptionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CustomerSubscriptionScalarFieldEnumSchema, CustomerSubscriptionScalarFieldEnumSchema.array()]).optional() }).strict();
