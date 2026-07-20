import { z } from 'zod';
export const ProductCountOutputTypeSelectSchema = z.object({
    subscription: z.boolean().optional(),
    request: z.boolean().optional(),
}).strict();
export default ProductCountOutputTypeSelectSchema;
