import { z } from 'zod';
import { ProductCreateManyInputSchema } from '../inputTypeSchemas/ProductCreateManyInputSchema';
export const ProductCreateManyArgsSchema = z.object({
    data: z.union([ProductCreateManyInputSchema, ProductCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default ProductCreateManyArgsSchema;
