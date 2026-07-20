import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { VendorWhereInputSchema } from '../inputTypeSchemas/VendorWhereInputSchema'
import { VendorOrderByWithAggregationInputSchema } from '../inputTypeSchemas/VendorOrderByWithAggregationInputSchema'
import { VendorScalarFieldEnumSchema } from '../inputTypeSchemas/VendorScalarFieldEnumSchema'
import { VendorScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/VendorScalarWhereWithAggregatesInputSchema'

export const VendorGroupByArgsSchema: z.ZodType<Prisma.VendorGroupByArgs> = z.object({
  where: VendorWhereInputSchema.optional(), 
  orderBy: z.union([ VendorOrderByWithAggregationInputSchema.array(), VendorOrderByWithAggregationInputSchema ]).optional(),
  by: VendorScalarFieldEnumSchema.array(), 
  having: VendorScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default VendorGroupByArgsSchema;
