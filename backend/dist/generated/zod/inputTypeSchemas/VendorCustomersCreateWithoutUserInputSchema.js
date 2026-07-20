import { z } from 'zod';
import { VendorCreateNestedOneWithoutVendorcustomersInputSchema } from './VendorCreateNestedOneWithoutVendorcustomersInputSchema';
import { CustomerSubscriptionCreateNestedManyWithoutVendorCustomersInputSchema } from './CustomerSubscriptionCreateNestedManyWithoutVendorCustomersInputSchema';
import { RequestsCreateNestedManyWithoutVendorCustomersInputSchema } from './RequestsCreateNestedManyWithoutVendorCustomersInputSchema';
export const VendorCustomersCreateWithoutUserInputSchema = z.strictObject({
    id: z.uuid().optional(),
    customerPhone: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    vendor: z.lazy(() => VendorCreateNestedOneWithoutVendorcustomersInputSchema),
    subscription: z.lazy(() => CustomerSubscriptionCreateNestedManyWithoutVendorCustomersInputSchema).optional(),
    request: z.lazy(() => RequestsCreateNestedManyWithoutVendorCustomersInputSchema).optional(),
});
export default VendorCustomersCreateWithoutUserInputSchema;
