import { z } from 'zod';
import type { Prisma } from '../../prisma/client';

export const ProductCountOutputTypeSelectSchema: z.ZodType<Prisma.ProductCountOutputTypeSelect> = z.object({
  subscription: z.boolean().optional(),
  request: z.boolean().optional(),
}).strict();

export default ProductCountOutputTypeSelectSchema;
