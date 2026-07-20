import { z } from 'zod';
import { ProductUpdateManyMutationInputSchema } from '../inputTypeSchemas/ProductUpdateManyMutationInputSchema';
import { ProductUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ProductUncheckedUpdateManyInputSchema';
import { ProductWhereInputSchema } from '../inputTypeSchemas/ProductWhereInputSchema';
export const ProductUpdateManyAndReturnArgsSchema = z.object({
    data: z.union([ProductUpdateManyMutationInputSchema, ProductUncheckedUpdateManyInputSchema]),
    where: ProductWhereInputSchema.optional(),
    limit: z.number().optional(),
}).strict();
export default ProductUpdateManyAndReturnArgsSchema;
