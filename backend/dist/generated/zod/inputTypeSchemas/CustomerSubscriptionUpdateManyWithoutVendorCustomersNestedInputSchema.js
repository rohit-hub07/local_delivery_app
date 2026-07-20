import { z } from 'zod';
import { CustomerSubscriptionCreateWithoutVendorCustomersInputSchema } from './CustomerSubscriptionCreateWithoutVendorCustomersInputSchema';
import { CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInputSchema } from './CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInputSchema';
import { CustomerSubscriptionCreateOrConnectWithoutVendorCustomersInputSchema } from './CustomerSubscriptionCreateOrConnectWithoutVendorCustomersInputSchema';
import { CustomerSubscriptionUpsertWithWhereUniqueWithoutVendorCustomersInputSchema } from './CustomerSubscriptionUpsertWithWhereUniqueWithoutVendorCustomersInputSchema';
import { CustomerSubscriptionCreateManyVendorCustomersInputEnvelopeSchema } from './CustomerSubscriptionCreateManyVendorCustomersInputEnvelopeSchema';
import { CustomerSubscriptionWhereUniqueInputSchema } from './CustomerSubscriptionWhereUniqueInputSchema';
import { CustomerSubscriptionUpdateWithWhereUniqueWithoutVendorCustomersInputSchema } from './CustomerSubscriptionUpdateWithWhereUniqueWithoutVendorCustomersInputSchema';
import { CustomerSubscriptionUpdateManyWithWhereWithoutVendorCustomersInputSchema } from './CustomerSubscriptionUpdateManyWithWhereWithoutVendorCustomersInputSchema';
import { CustomerSubscriptionScalarWhereInputSchema } from './CustomerSubscriptionScalarWhereInputSchema';
export const CustomerSubscriptionUpdateManyWithoutVendorCustomersNestedInputSchema = z.strictObject({
    create: z.union([z.lazy(() => CustomerSubscriptionCreateWithoutVendorCustomersInputSchema), z.lazy(() => CustomerSubscriptionCreateWithoutVendorCustomersInputSchema).array(), z.lazy(() => CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInputSchema), z.lazy(() => CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => CustomerSubscriptionCreateOrConnectWithoutVendorCustomersInputSchema), z.lazy(() => CustomerSubscriptionCreateOrConnectWithoutVendorCustomersInputSchema).array()]).optional(),
    upsert: z.union([z.lazy(() => CustomerSubscriptionUpsertWithWhereUniqueWithoutVendorCustomersInputSchema), z.lazy(() => CustomerSubscriptionUpsertWithWhereUniqueWithoutVendorCustomersInputSchema).array()]).optional(),
    createMany: z.lazy(() => CustomerSubscriptionCreateManyVendorCustomersInputEnvelopeSchema).optional(),
    set: z.union([z.lazy(() => CustomerSubscriptionWhereUniqueInputSchema), z.lazy(() => CustomerSubscriptionWhereUniqueInputSchema).array()]).optional(),
    disconnect: z.union([z.lazy(() => CustomerSubscriptionWhereUniqueInputSchema), z.lazy(() => CustomerSubscriptionWhereUniqueInputSchema).array()]).optional(),
    delete: z.union([z.lazy(() => CustomerSubscriptionWhereUniqueInputSchema), z.lazy(() => CustomerSubscriptionWhereUniqueInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => CustomerSubscriptionWhereUniqueInputSchema), z.lazy(() => CustomerSubscriptionWhereUniqueInputSchema).array()]).optional(),
    update: z.union([z.lazy(() => CustomerSubscriptionUpdateWithWhereUniqueWithoutVendorCustomersInputSchema), z.lazy(() => CustomerSubscriptionUpdateWithWhereUniqueWithoutVendorCustomersInputSchema).array()]).optional(),
    updateMany: z.union([z.lazy(() => CustomerSubscriptionUpdateManyWithWhereWithoutVendorCustomersInputSchema), z.lazy(() => CustomerSubscriptionUpdateManyWithWhereWithoutVendorCustomersInputSchema).array()]).optional(),
    deleteMany: z.union([z.lazy(() => CustomerSubscriptionScalarWhereInputSchema), z.lazy(() => CustomerSubscriptionScalarWhereInputSchema).array()]).optional(),
});
export default CustomerSubscriptionUpdateManyWithoutVendorCustomersNestedInputSchema;
