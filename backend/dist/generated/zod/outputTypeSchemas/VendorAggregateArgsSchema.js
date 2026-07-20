import { z } from 'zod';
import { VendorWhereInputSchema } from '../inputTypeSchemas/VendorWhereInputSchema';
import { VendorOrderByWithRelationInputSchema } from '../inputTypeSchemas/VendorOrderByWithRelationInputSchema';
import { VendorWhereUniqueInputSchema } from '../inputTypeSchemas/VendorWhereUniqueInputSchema';
export const VendorAggregateArgsSchema = z.object({
    where: VendorWhereInputSchema.optional(),
    orderBy: z.union([VendorOrderByWithRelationInputSchema.array(), VendorOrderByWithRelationInputSchema]).optional(),
    cursor: VendorWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export default VendorAggregateArgsSchema;
