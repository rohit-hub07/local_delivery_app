import { z } from 'zod';
import { UserCreateNestedOneWithoutVendorcustomersInputSchema } from './UserCreateNestedOneWithoutVendorcustomersInputSchema';
import { CustomerSubscriptionCreateNestedManyWithoutVendorCustomersInputSchema } from './CustomerSubscriptionCreateNestedManyWithoutVendorCustomersInputSchema';
import { RequestsCreateNestedManyWithoutVendorCustomersInputSchema } from './RequestsCreateNestedManyWithoutVendorCustomersInputSchema';
export const VendorCustomersCreateWithoutVendorInputSchema = z.strictObject({
    id: z.uuid().optional(),
    customerPhone: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutVendorcustomersInputSchema),
    subscription: z.lazy(() => CustomerSubscriptionCreateNestedManyWithoutVendorCustomersInputSchema).optional(),
    request: z.lazy(() => RequestsCreateNestedManyWithoutVendorCustomersInputSchema).optional(),
});
export default VendorCustomersCreateWithoutVendorInputSchema;
