import * as z from 'zod';
import { VendorCustomersWhereInputObjectSchema as VendorCustomersWhereInputObjectSchema } from './VendorCustomersWhereInput.schema';
import { VendorCustomersUpdateWithoutSubscriptionInputObjectSchema as VendorCustomersUpdateWithoutSubscriptionInputObjectSchema } from './VendorCustomersUpdateWithoutSubscriptionInput.schema';
import { VendorCustomersUncheckedUpdateWithoutSubscriptionInputObjectSchema as VendorCustomersUncheckedUpdateWithoutSubscriptionInputObjectSchema } from './VendorCustomersUncheckedUpdateWithoutSubscriptionInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => VendorCustomersWhereInputObjectSchema).optional(),
    data: z.union([z.lazy(() => VendorCustomersUpdateWithoutSubscriptionInputObjectSchema), z.lazy(() => VendorCustomersUncheckedUpdateWithoutSubscriptionInputObjectSchema)])
}).strict();
export const VendorCustomersUpdateToOneWithWhereWithoutSubscriptionInputObjectSchema = makeSchema();
export const VendorCustomersUpdateToOneWithWhereWithoutSubscriptionInputObjectZodSchema = makeSchema();
