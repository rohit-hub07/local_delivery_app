import * as z from 'zod';
import { CustomerSubscriptionWhereUniqueInputObjectSchema as CustomerSubscriptionWhereUniqueInputObjectSchema } from './CustomerSubscriptionWhereUniqueInput.schema';
import { CustomerSubscriptionUpdateWithoutVendorCustomersInputObjectSchema as CustomerSubscriptionUpdateWithoutVendorCustomersInputObjectSchema } from './CustomerSubscriptionUpdateWithoutVendorCustomersInput.schema';
import { CustomerSubscriptionUncheckedUpdateWithoutVendorCustomersInputObjectSchema as CustomerSubscriptionUncheckedUpdateWithoutVendorCustomersInputObjectSchema } from './CustomerSubscriptionUncheckedUpdateWithoutVendorCustomersInput.schema';
import { CustomerSubscriptionCreateWithoutVendorCustomersInputObjectSchema as CustomerSubscriptionCreateWithoutVendorCustomersInputObjectSchema } from './CustomerSubscriptionCreateWithoutVendorCustomersInput.schema';
import { CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInputObjectSchema as CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInputObjectSchema } from './CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => CustomerSubscriptionWhereUniqueInputObjectSchema),
    update: z.union([z.lazy(() => CustomerSubscriptionUpdateWithoutVendorCustomersInputObjectSchema), z.lazy(() => CustomerSubscriptionUncheckedUpdateWithoutVendorCustomersInputObjectSchema)]),
    create: z.union([z.lazy(() => CustomerSubscriptionCreateWithoutVendorCustomersInputObjectSchema), z.lazy(() => CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInputObjectSchema)])
}).strict();
export const CustomerSubscriptionUpsertWithWhereUniqueWithoutVendorCustomersInputObjectSchema = makeSchema();
export const CustomerSubscriptionUpsertWithWhereUniqueWithoutVendorCustomersInputObjectZodSchema = makeSchema();
