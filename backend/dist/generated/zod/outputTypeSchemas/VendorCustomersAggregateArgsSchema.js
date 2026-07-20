import { z } from 'zod';
import { VendorCustomersWhereInputSchema } from '../inputTypeSchemas/VendorCustomersWhereInputSchema';
import { VendorCustomersOrderByWithRelationInputSchema } from '../inputTypeSchemas/VendorCustomersOrderByWithRelationInputSchema';
import { VendorCustomersWhereUniqueInputSchema } from '../inputTypeSchemas/VendorCustomersWhereUniqueInputSchema';
export const VendorCustomersAggregateArgsSchema = z.object({
    where: VendorCustomersWhereInputSchema.optional(),
    orderBy: z.union([VendorCustomersOrderByWithRelationInputSchema.array(), VendorCustomersOrderByWithRelationInputSchema]).optional(),
    cursor: VendorCustomersWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export default VendorCustomersAggregateArgsSchema;
