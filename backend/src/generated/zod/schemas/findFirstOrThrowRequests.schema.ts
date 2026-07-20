import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RequestsIncludeObjectSchema as RequestsIncludeObjectSchema } from './objects/RequestsInclude.schema';
import { RequestsOrderByWithRelationInputObjectSchema as RequestsOrderByWithRelationInputObjectSchema } from './objects/RequestsOrderByWithRelationInput.schema';
import { RequestsWhereInputObjectSchema as RequestsWhereInputObjectSchema } from './objects/RequestsWhereInput.schema';
import { RequestsWhereUniqueInputObjectSchema as RequestsWhereUniqueInputObjectSchema } from './objects/RequestsWhereUniqueInput.schema';
import { RequestsScalarFieldEnumSchema } from './enums/RequestsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RequestsFindFirstOrThrowSelectSchema: z.ZodType<Prisma.RequestsSelect> = z.object({
    id: z.boolean().optional(),
    vendorCustomerId: z.boolean().optional(),
    productId: z.boolean().optional(),
    type: z.boolean().optional(),
    message: z.boolean().optional(),
    start_date: z.boolean().optional(),
    end_date: z.boolean().optional(),
    status: z.boolean().optional(),
    respondedAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    vendorCustomers: z.boolean().optional(),
    product: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.RequestsSelect>;

export const RequestsFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    vendorCustomerId: z.boolean().optional(),
    productId: z.boolean().optional(),
    type: z.boolean().optional(),
    message: z.boolean().optional(),
    start_date: z.boolean().optional(),
    end_date: z.boolean().optional(),
    status: z.boolean().optional(),
    respondedAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    vendorCustomers: z.boolean().optional(),
    product: z.boolean().optional()
  }).strict();

export const RequestsFindFirstOrThrowSchema: z.ZodType<Prisma.RequestsFindFirstOrThrowArgs> = z.object({ select: RequestsFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => RequestsIncludeObjectSchema.optional()), orderBy: z.union([RequestsOrderByWithRelationInputObjectSchema, RequestsOrderByWithRelationInputObjectSchema.array()]).optional(), where: RequestsWhereInputObjectSchema.optional(), cursor: RequestsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RequestsScalarFieldEnumSchema, RequestsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.RequestsFindFirstOrThrowArgs>;

export const RequestsFindFirstOrThrowZodSchema = z.object({ select: RequestsFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => RequestsIncludeObjectSchema.optional()), orderBy: z.union([RequestsOrderByWithRelationInputObjectSchema, RequestsOrderByWithRelationInputObjectSchema.array()]).optional(), where: RequestsWhereInputObjectSchema.optional(), cursor: RequestsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RequestsScalarFieldEnumSchema, RequestsScalarFieldEnumSchema.array()]).optional() }).strict();