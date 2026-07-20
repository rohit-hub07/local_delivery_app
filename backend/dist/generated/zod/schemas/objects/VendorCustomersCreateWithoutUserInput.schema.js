import * as z from 'zod';
import { VendorCreateNestedOneWithoutVendorcustomersInputObjectSchema as VendorCreateNestedOneWithoutVendorcustomersInputObjectSchema } from './VendorCreateNestedOneWithoutVendorcustomersInput.schema';
import { CustomerSubscriptionCreateNestedManyWithoutVendorCustomersInputObjectSchema as CustomerSubscriptionCreateNestedManyWithoutVendorCustomersInputObjectSchema } from './CustomerSubscriptionCreateNestedManyWithoutVendorCustomersInput.schema';
import { RequestsCreateNestedManyWithoutVendorCustomersInputObjectSchema as RequestsCreateNestedManyWithoutVendorCustomersInputObjectSchema } from './RequestsCreateNestedManyWithoutVendorCustomersInput.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    customerPhone: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    vendor: z.lazy(() => VendorCreateNestedOneWithoutVendorcustomersInputObjectSchema),
    subscription: z.lazy(() => CustomerSubscriptionCreateNestedManyWithoutVendorCustomersInputObjectSchema).optional(),
    request: z.lazy(() => RequestsCreateNestedManyWithoutVendorCustomersInputObjectSchema).optional()
}).strict();
export const VendorCustomersCreateWithoutUserInputObjectSchema = makeSchema();
export const VendorCustomersCreateWithoutUserInputObjectZodSchema = makeSchema();
