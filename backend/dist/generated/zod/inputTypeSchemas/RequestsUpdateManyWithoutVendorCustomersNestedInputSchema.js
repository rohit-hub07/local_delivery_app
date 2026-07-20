import { z } from 'zod';
import { RequestsCreateWithoutVendorCustomersInputSchema } from './RequestsCreateWithoutVendorCustomersInputSchema';
import { RequestsUncheckedCreateWithoutVendorCustomersInputSchema } from './RequestsUncheckedCreateWithoutVendorCustomersInputSchema';
import { RequestsCreateOrConnectWithoutVendorCustomersInputSchema } from './RequestsCreateOrConnectWithoutVendorCustomersInputSchema';
import { RequestsUpsertWithWhereUniqueWithoutVendorCustomersInputSchema } from './RequestsUpsertWithWhereUniqueWithoutVendorCustomersInputSchema';
import { RequestsCreateManyVendorCustomersInputEnvelopeSchema } from './RequestsCreateManyVendorCustomersInputEnvelopeSchema';
import { RequestsWhereUniqueInputSchema } from './RequestsWhereUniqueInputSchema';
import { RequestsUpdateWithWhereUniqueWithoutVendorCustomersInputSchema } from './RequestsUpdateWithWhereUniqueWithoutVendorCustomersInputSchema';
import { RequestsUpdateManyWithWhereWithoutVendorCustomersInputSchema } from './RequestsUpdateManyWithWhereWithoutVendorCustomersInputSchema';
import { RequestsScalarWhereInputSchema } from './RequestsScalarWhereInputSchema';
export const RequestsUpdateManyWithoutVendorCustomersNestedInputSchema = z.strictObject({
    create: z.union([z.lazy(() => RequestsCreateWithoutVendorCustomersInputSchema), z.lazy(() => RequestsCreateWithoutVendorCustomersInputSchema).array(), z.lazy(() => RequestsUncheckedCreateWithoutVendorCustomersInputSchema), z.lazy(() => RequestsUncheckedCreateWithoutVendorCustomersInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => RequestsCreateOrConnectWithoutVendorCustomersInputSchema), z.lazy(() => RequestsCreateOrConnectWithoutVendorCustomersInputSchema).array()]).optional(),
    upsert: z.union([z.lazy(() => RequestsUpsertWithWhereUniqueWithoutVendorCustomersInputSchema), z.lazy(() => RequestsUpsertWithWhereUniqueWithoutVendorCustomersInputSchema).array()]).optional(),
    createMany: z.lazy(() => RequestsCreateManyVendorCustomersInputEnvelopeSchema).optional(),
    set: z.union([z.lazy(() => RequestsWhereUniqueInputSchema), z.lazy(() => RequestsWhereUniqueInputSchema).array()]).optional(),
    disconnect: z.union([z.lazy(() => RequestsWhereUniqueInputSchema), z.lazy(() => RequestsWhereUniqueInputSchema).array()]).optional(),
    delete: z.union([z.lazy(() => RequestsWhereUniqueInputSchema), z.lazy(() => RequestsWhereUniqueInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => RequestsWhereUniqueInputSchema), z.lazy(() => RequestsWhereUniqueInputSchema).array()]).optional(),
    update: z.union([z.lazy(() => RequestsUpdateWithWhereUniqueWithoutVendorCustomersInputSchema), z.lazy(() => RequestsUpdateWithWhereUniqueWithoutVendorCustomersInputSchema).array()]).optional(),
    updateMany: z.union([z.lazy(() => RequestsUpdateManyWithWhereWithoutVendorCustomersInputSchema), z.lazy(() => RequestsUpdateManyWithWhereWithoutVendorCustomersInputSchema).array()]).optional(),
    deleteMany: z.union([z.lazy(() => RequestsScalarWhereInputSchema), z.lazy(() => RequestsScalarWhereInputSchema).array()]).optional(),
});
export default RequestsUpdateManyWithoutVendorCustomersNestedInputSchema;
