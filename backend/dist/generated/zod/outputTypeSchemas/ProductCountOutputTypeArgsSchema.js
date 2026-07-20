import { z } from 'zod';
import { ProductCountOutputTypeSelectSchema } from './ProductCountOutputTypeSelectSchema';
export const ProductCountOutputTypeArgsSchema = z.object({
    select: z.lazy(() => ProductCountOutputTypeSelectSchema).nullish(),
}).strict();
export default ProductCountOutputTypeSelectSchema;
