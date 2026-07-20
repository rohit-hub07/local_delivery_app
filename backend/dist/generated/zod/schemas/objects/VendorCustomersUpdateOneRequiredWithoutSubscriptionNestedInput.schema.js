import * as z from 'zod';
import { VendorCustomersCreateWithoutSubscriptionInputObjectSchema as VendorCustomersCreateWithoutSubscriptionInputObjectSchema } from './VendorCustomersCreateWithoutSubscriptionInput.schema';
import { VendorCustomersUncheckedCreateWithoutSubscriptionInputObjectSchema as VendorCustomersUncheckedCreateWithoutSubscriptionInputObjectSchema } from './VendorCustomersUncheckedCreateWithoutSubscriptionInput.schema';
import { VendorCustomersCreateOrConnectWithoutSubscriptionInputObjectSchema as VendorCustomersCreateOrConnectWithoutSubscriptionInputObjectSchema } from './VendorCustomersCreateOrConnectWithoutSubscriptionInput.schema';
import { VendorCustomersUpsertWithoutSubscriptionInputObjectSchema as VendorCustomersUpsertWithoutSubscriptionInputObjectSchema } from './VendorCustomersUpsertWithoutSubscriptionInput.schema';
import { VendorCustomersWhereUniqueInputObjectSchema as VendorCustomersWhereUniqueInputObjectSchema } from './VendorCustomersWhereUniqueInput.schema';
import { VendorCustomersUpdateToOneWithWhereWithoutSubscriptionInputObjectSchema as VendorCustomersUpdateToOneWithWhereWithoutSubscriptionInputObjectSchema } from './VendorCustomersUpdateToOneWithWhereWithoutSubscriptionInput.schema';
import { VendorCustomersUpdateWithoutSubscriptionInputObjectSchema as VendorCustomersUpdateWithoutSubscriptionInputObjectSchema } from './VendorCustomersUpdateWithoutSubscriptionInput.schema';
import { VendorCustomersUncheckedUpdateWithoutSubscriptionInputObjectSchema as VendorCustomersUncheckedUpdateWithoutSubscriptionInputObjectSchema } from './VendorCustomersUncheckedUpdateWithoutSubscriptionInput.schema';
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => VendorCustomersCreateWithoutSubscriptionInputObjectSchema), z.lazy(() => VendorCustomersUncheckedCreateWithoutSubscriptionInputObjectSchema)]).optional(),
    connectOrCreate: z.lazy(() => VendorCustomersCreateOrConnectWithoutSubscriptionInputObjectSchema).optional(),
    upsert: z.lazy(() => VendorCustomersUpsertWithoutSubscriptionInputObjectSchema).optional(),
    connect: z.lazy(() => VendorCustomersWhereUniqueInputObjectSchema).optional(),
    update: z.union([z.lazy(() => VendorCustomersUpdateToOneWithWhereWithoutSubscriptionInputObjectSchema), z.lazy(() => VendorCustomersUpdateWithoutSubscriptionInputObjectSchema), z.lazy(() => VendorCustomersUncheckedUpdateWithoutSubscriptionInputObjectSchema)]).optional()
}).strict();
export const VendorCustomersUpdateOneRequiredWithoutSubscriptionNestedInputObjectSchema = makeSchema();
export const VendorCustomersUpdateOneRequiredWithoutSubscriptionNestedInputObjectZodSchema = makeSchema();
