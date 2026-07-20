import { z } from 'zod';
import { RequestsWhereUniqueInputSchema } from './RequestsWhereUniqueInputSchema';
import { RequestsUpdateWithoutProductInputSchema } from './RequestsUpdateWithoutProductInputSchema';
import { RequestsUncheckedUpdateWithoutProductInputSchema } from './RequestsUncheckedUpdateWithoutProductInputSchema';
export const RequestsUpdateWithWhereUniqueWithoutProductInputSchema = z.strictObject({
    where: z.lazy(() => RequestsWhereUniqueInputSchema),
    data: z.union([z.lazy(() => RequestsUpdateWithoutProductInputSchema), z.lazy(() => RequestsUncheckedUpdateWithoutProductInputSchema)]),
});
export default RequestsUpdateWithWhereUniqueWithoutProductInputSchema;
