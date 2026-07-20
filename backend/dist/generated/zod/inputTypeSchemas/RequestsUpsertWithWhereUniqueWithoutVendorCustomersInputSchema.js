import { z } from 'zod';
import { RequestsWhereUniqueInputSchema } from './RequestsWhereUniqueInputSchema';
import { RequestsUpdateWithoutVendorCustomersInputSchema } from './RequestsUpdateWithoutVendorCustomersInputSchema';
import { RequestsUncheckedUpdateWithoutVendorCustomersInputSchema } from './RequestsUncheckedUpdateWithoutVendorCustomersInputSchema';
import { RequestsCreateWithoutVendorCustomersInputSchema } from './RequestsCreateWithoutVendorCustomersInputSchema';
import { RequestsUncheckedCreateWithoutVendorCustomersInputSchema } from './RequestsUncheckedCreateWithoutVendorCustomersInputSchema';
export const RequestsUpsertWithWhereUniqueWithoutVendorCustomersInputSchema = z.strictObject({
    where: z.lazy(() => RequestsWhereUniqueInputSchema),
    update: z.union([z.lazy(() => RequestsUpdateWithoutVendorCustomersInputSchema), z.lazy(() => RequestsUncheckedUpdateWithoutVendorCustomersInputSchema)]),
    create: z.union([z.lazy(() => RequestsCreateWithoutVendorCustomersInputSchema), z.lazy(() => RequestsUncheckedCreateWithoutVendorCustomersInputSchema)]),
});
export default RequestsUpsertWithWhereUniqueWithoutVendorCustomersInputSchema;
