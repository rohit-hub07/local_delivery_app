import { z } from 'zod';
import { RequestsWhereUniqueInputSchema } from './RequestsWhereUniqueInputSchema';
import { RequestsUpdateWithoutProductInputSchema } from './RequestsUpdateWithoutProductInputSchema';
import { RequestsUncheckedUpdateWithoutProductInputSchema } from './RequestsUncheckedUpdateWithoutProductInputSchema';
import { RequestsCreateWithoutProductInputSchema } from './RequestsCreateWithoutProductInputSchema';
import { RequestsUncheckedCreateWithoutProductInputSchema } from './RequestsUncheckedCreateWithoutProductInputSchema';
export const RequestsUpsertWithWhereUniqueWithoutProductInputSchema = z.strictObject({
    where: z.lazy(() => RequestsWhereUniqueInputSchema),
    update: z.union([z.lazy(() => RequestsUpdateWithoutProductInputSchema), z.lazy(() => RequestsUncheckedUpdateWithoutProductInputSchema)]),
    create: z.union([z.lazy(() => RequestsCreateWithoutProductInputSchema), z.lazy(() => RequestsUncheckedCreateWithoutProductInputSchema)]),
});
export default RequestsUpsertWithWhereUniqueWithoutProductInputSchema;
