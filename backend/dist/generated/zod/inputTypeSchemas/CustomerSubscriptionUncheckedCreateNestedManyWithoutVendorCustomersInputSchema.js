import { z } from 'zod';
import { CustomerSubscriptionCreateWithoutVendorCustomersInputSchema } from './CustomerSubscriptionCreateWithoutVendorCustomersInputSchema';
import { CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInputSchema } from './CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInputSchema';
import { CustomerSubscriptionCreateOrConnectWithoutVendorCustomersInputSchema } from './CustomerSubscriptionCreateOrConnectWithoutVendorCustomersInputSchema';
import { CustomerSubscriptionCreateManyVendorCustomersInputEnvelopeSchema } from './CustomerSubscriptionCreateManyVendorCustomersInputEnvelopeSchema';
import { CustomerSubscriptionWhereUniqueInputSchema } from './CustomerSubscriptionWhereUniqueInputSchema';
export const CustomerSubscriptionUncheckedCreateNestedManyWithoutVendorCustomersInputSchema = z.strictObject({
    create: z.union([z.lazy(() => CustomerSubscriptionCreateWithoutVendorCustomersInputSchema), z.lazy(() => CustomerSubscriptionCreateWithoutVendorCustomersInputSchema).array(), z.lazy(() => CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInputSchema), z.lazy(() => CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => CustomerSubscriptionCreateOrConnectWithoutVendorCustomersInputSchema), z.lazy(() => CustomerSubscriptionCreateOrConnectWithoutVendorCustomersInputSchema).array()]).optional(),
    createMany: z.lazy(() => CustomerSubscriptionCreateManyVendorCustomersInputEnvelopeSchema).optional(),
    connect: z.union([z.lazy(() => CustomerSubscriptionWhereUniqueInputSchema), z.lazy(() => CustomerSubscriptionWhereUniqueInputSchema).array()]).optional(),
});
export default CustomerSubscriptionUncheckedCreateNestedManyWithoutVendorCustomersInputSchema;
