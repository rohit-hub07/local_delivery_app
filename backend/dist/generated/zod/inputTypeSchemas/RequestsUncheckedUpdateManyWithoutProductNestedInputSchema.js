import { z } from 'zod';
import { RequestsCreateWithoutProductInputSchema } from './RequestsCreateWithoutProductInputSchema';
import { RequestsUncheckedCreateWithoutProductInputSchema } from './RequestsUncheckedCreateWithoutProductInputSchema';
import { RequestsCreateOrConnectWithoutProductInputSchema } from './RequestsCreateOrConnectWithoutProductInputSchema';
import { RequestsUpsertWithWhereUniqueWithoutProductInputSchema } from './RequestsUpsertWithWhereUniqueWithoutProductInputSchema';
import { RequestsCreateManyProductInputEnvelopeSchema } from './RequestsCreateManyProductInputEnvelopeSchema';
import { RequestsWhereUniqueInputSchema } from './RequestsWhereUniqueInputSchema';
import { RequestsUpdateWithWhereUniqueWithoutProductInputSchema } from './RequestsUpdateWithWhereUniqueWithoutProductInputSchema';
import { RequestsUpdateManyWithWhereWithoutProductInputSchema } from './RequestsUpdateManyWithWhereWithoutProductInputSchema';
import { RequestsScalarWhereInputSchema } from './RequestsScalarWhereInputSchema';
export const RequestsUncheckedUpdateManyWithoutProductNestedInputSchema = z.strictObject({
    create: z.union([z.lazy(() => RequestsCreateWithoutProductInputSchema), z.lazy(() => RequestsCreateWithoutProductInputSchema).array(), z.lazy(() => RequestsUncheckedCreateWithoutProductInputSchema), z.lazy(() => RequestsUncheckedCreateWithoutProductInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => RequestsCreateOrConnectWithoutProductInputSchema), z.lazy(() => RequestsCreateOrConnectWithoutProductInputSchema).array()]).optional(),
    upsert: z.union([z.lazy(() => RequestsUpsertWithWhereUniqueWithoutProductInputSchema), z.lazy(() => RequestsUpsertWithWhereUniqueWithoutProductInputSchema).array()]).optional(),
    createMany: z.lazy(() => RequestsCreateManyProductInputEnvelopeSchema).optional(),
    set: z.union([z.lazy(() => RequestsWhereUniqueInputSchema), z.lazy(() => RequestsWhereUniqueInputSchema).array()]).optional(),
    disconnect: z.union([z.lazy(() => RequestsWhereUniqueInputSchema), z.lazy(() => RequestsWhereUniqueInputSchema).array()]).optional(),
    delete: z.union([z.lazy(() => RequestsWhereUniqueInputSchema), z.lazy(() => RequestsWhereUniqueInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => RequestsWhereUniqueInputSchema), z.lazy(() => RequestsWhereUniqueInputSchema).array()]).optional(),
    update: z.union([z.lazy(() => RequestsUpdateWithWhereUniqueWithoutProductInputSchema), z.lazy(() => RequestsUpdateWithWhereUniqueWithoutProductInputSchema).array()]).optional(),
    updateMany: z.union([z.lazy(() => RequestsUpdateManyWithWhereWithoutProductInputSchema), z.lazy(() => RequestsUpdateManyWithWhereWithoutProductInputSchema).array()]).optional(),
    deleteMany: z.union([z.lazy(() => RequestsScalarWhereInputSchema), z.lazy(() => RequestsScalarWhereInputSchema).array()]).optional(),
});
export default RequestsUncheckedUpdateManyWithoutProductNestedInputSchema;
