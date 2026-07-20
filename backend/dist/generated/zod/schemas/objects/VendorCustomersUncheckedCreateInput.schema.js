import * as z from 'zod';
import { CustomerSubscriptionUncheckedCreateNestedManyWithoutVendorCustomersInputObjectSchema as CustomerSubscriptionUncheckedCreateNestedManyWithoutVendorCustomersInputObjectSchema } from './CustomerSubscriptionUncheckedCreateNestedManyWithoutVendorCustomersInput.schema';
import { RequestsUncheckedCreateNestedManyWithoutVendorCustomersInputObjectSchema as RequestsUncheckedCreateNestedManyWithoutVendorCustomersInputObjectSchema } from './RequestsUncheckedCreateNestedManyWithoutVendorCustomersInput.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    vendorId: z.string(),
    customerId: z.string(),
    customerPhone: z.string(),
    createdAt: z.coerce.date().optional(),
    subscription: z.lazy(() => CustomerSubscriptionUncheckedCreateNestedManyWithoutVendorCustomersInputObjectSchema).optional(),
    request: z.lazy(() => RequestsUncheckedCreateNestedManyWithoutVendorCustomersInputObjectSchema).optional()
}).strict();
export const VendorCustomersUncheckedCreateInputObjectSchema = makeSchema();
export const VendorCustomersUncheckedCreateInputObjectZodSchema = makeSchema();
