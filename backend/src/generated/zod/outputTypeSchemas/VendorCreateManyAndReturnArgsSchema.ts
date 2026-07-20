import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { VendorCreateManyInputSchema } from '../inputTypeSchemas/VendorCreateManyInputSchema'

export const VendorCreateManyAndReturnArgsSchema: z.ZodType<Prisma.VendorCreateManyAndReturnArgs> = z.object({
  data: z.union([ VendorCreateManyInputSchema, VendorCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default VendorCreateManyAndReturnArgsSchema;
