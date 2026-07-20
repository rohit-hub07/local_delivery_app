import * as z from 'zod';
import { VendorCreateNestedOneWithoutVendorcustomersInputObjectSchema as VendorCreateNestedOneWithoutVendorcustomersInputObjectSchema } from './VendorCreateNestedOneWithoutVendorcustomersInput.schema';
import { UserCreateNestedOneWithoutVendorcustomersInputObjectSchema as UserCreateNestedOneWithoutVendorcustomersInputObjectSchema } from './UserCreateNestedOneWithoutVendorcustomersInput.schema';
import { RequestsCreateNestedManyWithoutVendorCustomersInputObjectSchema as RequestsCreateNestedManyWithoutVendorCustomersInputObjectSchema } from './RequestsCreateNestedManyWithoutVendorCustomersInput.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    customerPhone: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    vendor: z.lazy(() => VendorCreateNestedOneWithoutVendorcustomersInputObjectSchema),
    user: z.lazy(() => UserCreateNestedOneWithoutVendorcustomersInputObjectSchema),
    request: z.lazy(() => RequestsCreateNestedManyWithoutVendorCustomersInputObjectSchema).optional()
}).strict();
export const VendorCustomersCreateWithoutSubscriptionInputObjectSchema = makeSchema();
export const VendorCustomersCreateWithoutSubscriptionInputObjectZodSchema = makeSchema();
