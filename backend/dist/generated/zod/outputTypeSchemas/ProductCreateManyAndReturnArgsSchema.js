import { z } from 'zod';
import { ProductCreateManyInputSchema } from '../inputTypeSchemas/ProductCreateManyInputSchema';
export const ProductCreateManyAndReturnArgsSchema = z.object({
    data: z.union([ProductCreateManyInputSchema, ProductCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default ProductCreateManyAndReturnArgsSchema;
