import { z } from 'zod';
import { VendorCustomersCreateWithoutVendorInputSchema } from './VendorCustomersCreateWithoutVendorInputSchema';
import { VendorCustomersUncheckedCreateWithoutVendorInputSchema } from './VendorCustomersUncheckedCreateWithoutVendorInputSchema';
import { VendorCustomersCreateOrConnectWithoutVendorInputSchema } from './VendorCustomersCreateOrConnectWithoutVendorInputSchema';
import { VendorCustomersUpsertWithWhereUniqueWithoutVendorInputSchema } from './VendorCustomersUpsertWithWhereUniqueWithoutVendorInputSchema';
import { VendorCustomersCreateManyVendorInputEnvelopeSchema } from './VendorCustomersCreateManyVendorInputEnvelopeSchema';
import { VendorCustomersWhereUniqueInputSchema } from './VendorCustomersWhereUniqueInputSchema';
import { VendorCustomersUpdateWithWhereUniqueWithoutVendorInputSchema } from './VendorCustomersUpdateWithWhereUniqueWithoutVendorInputSchema';
import { VendorCustomersUpdateManyWithWhereWithoutVendorInputSchema } from './VendorCustomersUpdateManyWithWhereWithoutVendorInputSchema';
import { VendorCustomersScalarWhereInputSchema } from './VendorCustomersScalarWhereInputSchema';
export const VendorCustomersUpdateManyWithoutVendorNestedInputSchema = z.strictObject({
    create: z.union([z.lazy(() => VendorCustomersCreateWithoutVendorInputSchema), z.lazy(() => VendorCustomersCreateWithoutVendorInputSchema).array(), z.lazy(() => VendorCustomersUncheckedCreateWithoutVendorInputSchema), z.lazy(() => VendorCustomersUncheckedCreateWithoutVendorInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => VendorCustomersCreateOrConnectWithoutVendorInputSchema), z.lazy(() => VendorCustomersCreateOrConnectWithoutVendorInputSchema).array()]).optional(),
    upsert: z.union([z.lazy(() => VendorCustomersUpsertWithWhereUniqueWithoutVendorInputSchema), z.lazy(() => VendorCustomersUpsertWithWhereUniqueWithoutVendorInputSchema).array()]).optional(),
    createMany: z.lazy(() => VendorCustomersCreateManyVendorInputEnvelopeSchema).optional(),
    set: z.union([z.lazy(() => VendorCustomersWhereUniqueInputSchema), z.lazy(() => VendorCustomersWhereUniqueInputSchema).array()]).optional(),
    disconnect: z.union([z.lazy(() => VendorCustomersWhereUniqueInputSchema), z.lazy(() => VendorCustomersWhereUniqueInputSchema).array()]).optional(),
    delete: z.union([z.lazy(() => VendorCustomersWhereUniqueInputSchema), z.lazy(() => VendorCustomersWhereUniqueInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => VendorCustomersWhereUniqueInputSchema), z.lazy(() => VendorCustomersWhereUniqueInputSchema).array()]).optional(),
    update: z.union([z.lazy(() => VendorCustomersUpdateWithWhereUniqueWithoutVendorInputSchema), z.lazy(() => VendorCustomersUpdateWithWhereUniqueWithoutVendorInputSchema).array()]).optional(),
    updateMany: z.union([z.lazy(() => VendorCustomersUpdateManyWithWhereWithoutVendorInputSchema), z.lazy(() => VendorCustomersUpdateManyWithWhereWithoutVendorInputSchema).array()]).optional(),
    deleteMany: z.union([z.lazy(() => VendorCustomersScalarWhereInputSchema), z.lazy(() => VendorCustomersScalarWhereInputSchema).array()]).optional(),
});
export default VendorCustomersUpdateManyWithoutVendorNestedInputSchema;
