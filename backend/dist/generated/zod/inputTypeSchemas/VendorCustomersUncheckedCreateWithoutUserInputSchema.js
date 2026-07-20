import { z } from 'zod';
import { CustomerSubscriptionUncheckedCreateNestedManyWithoutVendorCustomersInputSchema } from './CustomerSubscriptionUncheckedCreateNestedManyWithoutVendorCustomersInputSchema';
import { RequestsUncheckedCreateNestedManyWithoutVendorCustomersInputSchema } from './RequestsUncheckedCreateNestedManyWithoutVendorCustomersInputSchema';
export const VendorCustomersUncheckedCreateWithoutUserInputSchema = z.strictObject({
    id: z.uuid().optional(),
    vendorId: z.string(),
    customerPhone: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    subscription: z.lazy(() => CustomerSubscriptionUncheckedCreateNestedManyWithoutVendorCustomersInputSchema).optional(),
    request: z.lazy(() => RequestsUncheckedCreateNestedManyWithoutVendorCustomersInputSchema).optional(),
});
export default VendorCustomersUncheckedCreateWithoutUserInputSchema;
