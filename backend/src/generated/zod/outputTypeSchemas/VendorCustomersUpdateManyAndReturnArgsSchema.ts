import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { VendorCustomersUpdateManyMutationInputSchema } from '../inputTypeSchemas/VendorCustomersUpdateManyMutationInputSchema'
import { VendorCustomersUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/VendorCustomersUncheckedUpdateManyInputSchema'
import { VendorCustomersWhereInputSchema } from '../inputTypeSchemas/VendorCustomersWhereInputSchema'

export const VendorCustomersUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.VendorCustomersUpdateManyAndReturnArgs> = z.object({
  data: z.union([ VendorCustomersUpdateManyMutationInputSchema, VendorCustomersUncheckedUpdateManyInputSchema ]),
  where: VendorCustomersWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default VendorCustomersUpdateManyAndReturnArgsSchema;
