import * as z from 'zod';
import { VendorCustomersWhereUniqueInputObjectSchema as VendorCustomersWhereUniqueInputObjectSchema } from './VendorCustomersWhereUniqueInput.schema';
import { VendorCustomersCreateWithoutSubscriptionInputObjectSchema as VendorCustomersCreateWithoutSubscriptionInputObjectSchema } from './VendorCustomersCreateWithoutSubscriptionInput.schema';
import { VendorCustomersUncheckedCreateWithoutSubscriptionInputObjectSchema as VendorCustomersUncheckedCreateWithoutSubscriptionInputObjectSchema } from './VendorCustomersUncheckedCreateWithoutSubscriptionInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => VendorCustomersWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => VendorCustomersCreateWithoutSubscriptionInputObjectSchema), z.lazy(() => VendorCustomersUncheckedCreateWithoutSubscriptionInputObjectSchema)])
}).strict();
export const VendorCustomersCreateOrConnectWithoutSubscriptionInputObjectSchema = makeSchema();
export const VendorCustomersCreateOrConnectWithoutSubscriptionInputObjectZodSchema = makeSchema();
