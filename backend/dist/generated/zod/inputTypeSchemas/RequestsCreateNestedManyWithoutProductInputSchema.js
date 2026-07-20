import { z } from 'zod';
import { RequestsCreateWithoutProductInputSchema } from './RequestsCreateWithoutProductInputSchema';
import { RequestsUncheckedCreateWithoutProductInputSchema } from './RequestsUncheckedCreateWithoutProductInputSchema';
import { RequestsCreateOrConnectWithoutProductInputSchema } from './RequestsCreateOrConnectWithoutProductInputSchema';
import { RequestsCreateManyProductInputEnvelopeSchema } from './RequestsCreateManyProductInputEnvelopeSchema';
import { RequestsWhereUniqueInputSchema } from './RequestsWhereUniqueInputSchema';
export const RequestsCreateNestedManyWithoutProductInputSchema = z.strictObject({
    create: z.union([z.lazy(() => RequestsCreateWithoutProductInputSchema), z.lazy(() => RequestsCreateWithoutProductInputSchema).array(), z.lazy(() => RequestsUncheckedCreateWithoutProductInputSchema), z.lazy(() => RequestsUncheckedCreateWithoutProductInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => RequestsCreateOrConnectWithoutProductInputSchema), z.lazy(() => RequestsCreateOrConnectWithoutProductInputSchema).array()]).optional(),
    createMany: z.lazy(() => RequestsCreateManyProductInputEnvelopeSchema).optional(),
    connect: z.union([z.lazy(() => RequestsWhereUniqueInputSchema), z.lazy(() => RequestsWhereUniqueInputSchema).array()]).optional(),
});
export default RequestsCreateNestedManyWithoutProductInputSchema;
