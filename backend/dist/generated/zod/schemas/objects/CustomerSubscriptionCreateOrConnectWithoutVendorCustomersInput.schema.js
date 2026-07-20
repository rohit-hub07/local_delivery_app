import * as z from 'zod';
import { CustomerSubscriptionWhereUniqueInputObjectSchema as CustomerSubscriptionWhereUniqueInputObjectSchema } from './CustomerSubscriptionWhereUniqueInput.schema';
import { CustomerSubscriptionCreateWithoutVendorCustomersInputObjectSchema as CustomerSubscriptionCreateWithoutVendorCustomersInputObjectSchema } from './CustomerSubscriptionCreateWithoutVendorCustomersInput.schema';
import { CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInputObjectSchema as CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInputObjectSchema } from './CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => CustomerSubscriptionWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => CustomerSubscriptionCreateWithoutVendorCustomersInputObjectSchema), z.lazy(() => CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInputObjectSchema)])
}).strict();
export const CustomerSubscriptionCreateOrConnectWithoutVendorCustomersInputObjectSchema = makeSchema();
export const CustomerSubscriptionCreateOrConnectWithoutVendorCustomersInputObjectZodSchema = makeSchema();
