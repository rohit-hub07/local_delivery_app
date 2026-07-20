import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RequestsScalarWhereInputSchema } from './RequestsScalarWhereInputSchema';
import { RequestsUpdateManyMutationInputSchema } from './RequestsUpdateManyMutationInputSchema';
import { RequestsUncheckedUpdateManyWithoutProductInputSchema } from './RequestsUncheckedUpdateManyWithoutProductInputSchema';

export const RequestsUpdateManyWithWhereWithoutProductInputSchema: z.ZodType<Prisma.RequestsUpdateManyWithWhereWithoutProductInput> = z.strictObject({
  where: z.lazy(() => RequestsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RequestsUpdateManyMutationInputSchema), z.lazy(() => RequestsUncheckedUpdateManyWithoutProductInputSchema) ]),
});

export default RequestsUpdateManyWithWhereWithoutProductInputSchema;
