import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { VendorCustomersWhereInputSchema } from '../inputTypeSchemas/VendorCustomersWhereInputSchema'
import { VendorCustomersOrderByWithAggregationInputSchema } from '../inputTypeSchemas/VendorCustomersOrderByWithAggregationInputSchema'
import { VendorCustomersScalarFieldEnumSchema } from '../inputTypeSchemas/VendorCustomersScalarFieldEnumSchema'
import { VendorCustomersScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/VendorCustomersScalarWhereWithAggregatesInputSchema'

export const VendorCustomersGroupByArgsSchema: z.ZodType<Prisma.VendorCustomersGroupByArgs> = z.object({
  where: VendorCustomersWhereInputSchema.optional(), 
  orderBy: z.union([ VendorCustomersOrderByWithAggregationInputSchema.array(), VendorCustomersOrderByWithAggregationInputSchema ]).optional(),
  by: VendorCustomersScalarFieldEnumSchema.array(), 
  having: VendorCustomersScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default VendorCustomersGroupByArgsSchema;
