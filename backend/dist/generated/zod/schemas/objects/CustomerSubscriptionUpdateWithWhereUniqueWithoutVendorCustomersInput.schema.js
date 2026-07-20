import * as z from 'zod';
import { CustomerSubscriptionWhereUniqueInputObjectSchema as CustomerSubscriptionWhereUniqueInputObjectSchema } from './CustomerSubscriptionWhereUniqueInput.schema';
import { CustomerSubscriptionUpdateWithoutVendorCustomersInputObjectSchema as CustomerSubscriptionUpdateWithoutVendorCustomersInputObjectSchema } from './CustomerSubscriptionUpdateWithoutVendorCustomersInput.schema';
import { CustomerSubscriptionUncheckedUpdateWithoutVendorCustomersInputObjectSchema as CustomerSubscriptionUncheckedUpdateWithoutVendorCustomersInputObjectSchema } from './CustomerSubscriptionUncheckedUpdateWithoutVendorCustomersInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => CustomerSubscriptionWhereUniqueInputObjectSchema),
    data: z.union([z.lazy(() => CustomerSubscriptionUpdateWithoutVendorCustomersInputObjectSchema), z.lazy(() => CustomerSubscriptionUncheckedUpdateWithoutVendorCustomersInputObjectSchema)])
}).strict();
export const CustomerSubscriptionUpdateWithWhereUniqueWithoutVendorCustomersInputObjectSchema = makeSchema();
export const CustomerSubscriptionUpdateWithWhereUniqueWithoutVendorCustomersInputObjectZodSchema = makeSchema();
