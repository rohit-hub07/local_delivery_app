import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { VendorWhereInputSchema } from '../inputTypeSchemas/VendorWhereInputSchema'

export const VendorDeleteManyArgsSchema: z.ZodType<Prisma.VendorDeleteManyArgs> = z.object({
  where: VendorWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default VendorDeleteManyArgsSchema;
