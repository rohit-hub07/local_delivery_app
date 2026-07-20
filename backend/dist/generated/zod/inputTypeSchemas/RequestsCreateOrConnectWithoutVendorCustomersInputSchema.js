import { z } from 'zod';
import { RequestsWhereUniqueInputSchema } from './RequestsWhereUniqueInputSchema';
import { RequestsCreateWithoutVendorCustomersInputSchema } from './RequestsCreateWithoutVendorCustomersInputSchema';
import { RequestsUncheckedCreateWithoutVendorCustomersInputSchema } from './RequestsUncheckedCreateWithoutVendorCustomersInputSchema';
export const RequestsCreateOrConnectWithoutVendorCustomersInputSchema = z.strictObject({
    where: z.lazy(() => RequestsWhereUniqueInputSchema),
    create: z.union([z.lazy(() => RequestsCreateWithoutVendorCustomersInputSchema), z.lazy(() => RequestsUncheckedCreateWithoutVendorCustomersInputSchema)]),
});
export default RequestsCreateOrConnectWithoutVendorCustomersInputSchema;
