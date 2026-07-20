import { z } from 'zod';
import { ProductWhereInputSchema } from '../inputTypeSchemas/ProductWhereInputSchema';
export const ProductDeleteManyArgsSchema = z.object({
    where: ProductWhereInputSchema.optional(),
    limit: z.number().optional(),
}).strict();
export default ProductDeleteManyArgsSchema;
