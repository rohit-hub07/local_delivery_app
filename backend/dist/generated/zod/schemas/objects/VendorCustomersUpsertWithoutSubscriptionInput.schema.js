import * as z from 'zod';
import { VendorCustomersUpdateWithoutSubscriptionInputObjectSchema as VendorCustomersUpdateWithoutSubscriptionInputObjectSchema } from './VendorCustomersUpdateWithoutSubscriptionInput.schema';
import { VendorCustomersUncheckedUpdateWithoutSubscriptionInputObjectSchema as VendorCustomersUncheckedUpdateWithoutSubscriptionInputObjectSchema } from './VendorCustomersUncheckedUpdateWithoutSubscriptionInput.schema';
import { VendorCustomersCreateWithoutSubscriptionInputObjectSchema as VendorCustomersCreateWithoutSubscriptionInputObjectSchema } from './VendorCustomersCreateWithoutSubscriptionInput.schema';
import { VendorCustomersUncheckedCreateWithoutSubscriptionInputObjectSchema as VendorCustomersUncheckedCreateWithoutSubscriptionInputObjectSchema } from './VendorCustomersUncheckedCreateWithoutSubscriptionInput.schema';
import { VendorCustomersWhereInputObjectSchema as VendorCustomersWhereInputObjectSchema } from './VendorCustomersWhereInput.schema';
const makeSchema = () => z.object({
    update: z.union([z.lazy(() => VendorCustomersUpdateWithoutSubscriptionInputObjectSchema), z.lazy(() => VendorCustomersUncheckedUpdateWithoutSubscriptionInputObjectSchema)]),
    create: z.union([z.lazy(() => VendorCustomersCreateWithoutSubscriptionInputObjectSchema), z.lazy(() => VendorCustomersUncheckedCreateWithoutSubscriptionInputObjectSchema)]),
    where: z.lazy(() => VendorCustomersWhereInputObjectSchema).optional()
}).strict();
export const VendorCustomersUpsertWithoutSubscriptionInputObjectSchema = makeSchema();
export const VendorCustomersUpsertWithoutSubscriptionInputObjectZodSchema = makeSchema();
