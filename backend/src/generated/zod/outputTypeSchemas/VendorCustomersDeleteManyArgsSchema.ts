import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { VendorCustomersWhereInputSchema } from '../inputTypeSchemas/VendorCustomersWhereInputSchema'

export const VendorCustomersDeleteManyArgsSchema: z.ZodType<Prisma.VendorCustomersDeleteManyArgs> = z.object({
  where: VendorCustomersWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default VendorCustomersDeleteManyArgsSchema;
