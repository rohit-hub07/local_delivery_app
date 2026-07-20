import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { VendorUpdateManyMutationInputSchema } from '../inputTypeSchemas/VendorUpdateManyMutationInputSchema'
import { VendorUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/VendorUncheckedUpdateManyInputSchema'
import { VendorWhereInputSchema } from '../inputTypeSchemas/VendorWhereInputSchema'

export const VendorUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.VendorUpdateManyAndReturnArgs> = z.object({
  data: z.union([ VendorUpdateManyMutationInputSchema, VendorUncheckedUpdateManyInputSchema ]),
  where: VendorWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default VendorUpdateManyAndReturnArgsSchema;
