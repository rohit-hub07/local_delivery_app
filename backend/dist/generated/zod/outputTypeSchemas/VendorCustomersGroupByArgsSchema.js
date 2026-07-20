import { z } from 'zod';
import { VendorCustomersWhereInputSchema } from '../inputTypeSchemas/VendorCustomersWhereInputSchema';
import { VendorCustomersOrderByWithAggregationInputSchema } from '../inputTypeSchemas/VendorCustomersOrderByWithAggregationInputSchema';
import { VendorCustomersScalarFieldEnumSchema } from '../inputTypeSchemas/VendorCustomersScalarFieldEnumSchema';
import { VendorCustomersScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/VendorCustomersScalarWhereWithAggregatesInputSchema';
export const VendorCustomersGroupByArgsSchema = z.object({
    where: VendorCustomersWhereInputSchema.optional(),
    orderBy: z.union([VendorCustomersOrderByWithAggregationInputSchema.array(), VendorCustomersOrderByWithAggregationInputSchema]).optional(),
    by: VendorCustomersScalarFieldEnumSchema.array(),
    having: VendorCustomersScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export default VendorCustomersGroupByArgsSchema;
