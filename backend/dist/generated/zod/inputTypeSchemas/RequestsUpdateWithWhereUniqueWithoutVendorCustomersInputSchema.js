import { z } from 'zod';
import { RequestsWhereUniqueInputSchema } from './RequestsWhereUniqueInputSchema';
import { RequestsUpdateWithoutVendorCustomersInputSchema } from './RequestsUpdateWithoutVendorCustomersInputSchema';
import { RequestsUncheckedUpdateWithoutVendorCustomersInputSchema } from './RequestsUncheckedUpdateWithoutVendorCustomersInputSchema';
export const RequestsUpdateWithWhereUniqueWithoutVendorCustomersInputSchema = z.strictObject({
    where: z.lazy(() => RequestsWhereUniqueInputSchema),
    data: z.union([z.lazy(() => RequestsUpdateWithoutVendorCustomersInputSchema), z.lazy(() => RequestsUncheckedUpdateWithoutVendorCustomersInputSchema)]),
});
export default RequestsUpdateWithWhereUniqueWithoutVendorCustomersInputSchema;
