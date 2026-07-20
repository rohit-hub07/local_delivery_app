import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { VendorCustomersCreateManyInputSchema } from '../inputTypeSchemas/VendorCustomersCreateManyInputSchema'

export const VendorCustomersCreateManyAndReturnArgsSchema: z.ZodType<Prisma.VendorCustomersCreateManyAndReturnArgs> = z.object({
  data: z.union([ VendorCustomersCreateManyInputSchema, VendorCustomersCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default VendorCustomersCreateManyAndReturnArgsSchema;
