import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RequestsCreateManyProductInputSchema } from './RequestsCreateManyProductInputSchema';

export const RequestsCreateManyProductInputEnvelopeSchema: z.ZodType<Prisma.RequestsCreateManyProductInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => RequestsCreateManyProductInputSchema), z.lazy(() => RequestsCreateManyProductInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default RequestsCreateManyProductInputEnvelopeSchema;
