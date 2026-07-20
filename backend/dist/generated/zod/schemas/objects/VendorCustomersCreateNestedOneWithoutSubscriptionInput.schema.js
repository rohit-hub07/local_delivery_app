import * as z from 'zod';
import { VendorCustomersCreateWithoutSubscriptionInputObjectSchema as VendorCustomersCreateWithoutSubscriptionInputObjectSchema } from './VendorCustomersCreateWithoutSubscriptionInput.schema';
import { VendorCustomersUncheckedCreateWithoutSubscriptionInputObjectSchema as VendorCustomersUncheckedCreateWithoutSubscriptionInputObjectSchema } from './VendorCustomersUncheckedCreateWithoutSubscriptionInput.schema';
import { VendorCustomersCreateOrConnectWithoutSubscriptionInputObjectSchema as VendorCustomersCreateOrConnectWithoutSubscriptionInputObjectSchema } from './VendorCustomersCreateOrConnectWithoutSubscriptionInput.schema';
import { VendorCustomersWhereUniqueInputObjectSchema as VendorCustomersWhereUniqueInputObjectSchema } from './VendorCustomersWhereUniqueInput.schema';
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => VendorCustomersCreateWithoutSubscriptionInputObjectSchema), z.lazy(() => VendorCustomersUncheckedCreateWithoutSubscriptionInputObjectSchema)]).optional(),
    connectOrCreate: z.lazy(() => VendorCustomersCreateOrConnectWithoutSubscriptionInputObjectSchema).optional(),
    connect: z.lazy(() => VendorCustomersWhereUniqueInputObjectSchema).optional()
}).strict();
export const VendorCustomersCreateNestedOneWithoutSubscriptionInputObjectSchema = makeSchema();
export const VendorCustomersCreateNestedOneWithoutSubscriptionInputObjectZodSchema = makeSchema();
