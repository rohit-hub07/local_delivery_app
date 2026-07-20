import { z } from 'zod';
import { RequestsWhereUniqueInputSchema } from './RequestsWhereUniqueInputSchema';
import { RequestsCreateWithoutProductInputSchema } from './RequestsCreateWithoutProductInputSchema';
import { RequestsUncheckedCreateWithoutProductInputSchema } from './RequestsUncheckedCreateWithoutProductInputSchema';
export const RequestsCreateOrConnectWithoutProductInputSchema = z.strictObject({
    where: z.lazy(() => RequestsWhereUniqueInputSchema),
    create: z.union([z.lazy(() => RequestsCreateWithoutProductInputSchema), z.lazy(() => RequestsUncheckedCreateWithoutProductInputSchema)]),
});
export default RequestsCreateOrConnectWithoutProductInputSchema;
