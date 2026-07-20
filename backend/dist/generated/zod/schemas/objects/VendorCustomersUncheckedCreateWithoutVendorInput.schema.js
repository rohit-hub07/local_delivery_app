import * as z from 'zod';
import { CustomerSubscriptionUncheckedCreateNestedManyWithoutVendorCustomersInputObjectSchema as CustomerSubscriptionUncheckedCreateNestedManyWithoutVendorCustomersInputObjectSchema } from './CustomerSubscriptionUncheckedCreateNestedManyWithoutVendorCustomersInput.schema';
import { RequestsUncheckedCreateNestedManyWithoutVendorCustomersInputObjectSchema as RequestsUncheckedCreateNestedManyWithoutVendorCustomersInputObjectSchema } from './RequestsUncheckedCreateNestedManyWithoutVendorCustomersInput.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    customerId: z.string(),
    customerPhone: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    subscription: z.lazy(() => CustomerSubscriptionUncheckedCreateNestedManyWithoutVendorCustomersInputObjectSchema).optional(),
    request: z.lazy(() => RequestsUncheckedCreateNestedManyWithoutVendorCustomersInputObjectSchema).optional()
}).strict();
export const VendorCustomersUncheckedCreateWithoutVendorInputObjectSchema = makeSchema();
export const VendorCustomersUncheckedCreateWithoutVendorInputObjectZodSchema = makeSchema();
