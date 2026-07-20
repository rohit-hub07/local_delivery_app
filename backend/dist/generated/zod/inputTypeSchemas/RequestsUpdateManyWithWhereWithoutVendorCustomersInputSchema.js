import { z } from 'zod';
import { RequestsScalarWhereInputSchema } from './RequestsScalarWhereInputSchema';
import { RequestsUpdateManyMutationInputSchema } from './RequestsUpdateManyMutationInputSchema';
import { RequestsUncheckedUpdateManyWithoutVendorCustomersInputSchema } from './RequestsUncheckedUpdateManyWithoutVendorCustomersInputSchema';
export const RequestsUpdateManyWithWhereWithoutVendorCustomersInputSchema = z.strictObject({
    where: z.lazy(() => RequestsScalarWhereInputSchema),
    data: z.union([z.lazy(() => RequestsUpdateManyMutationInputSchema), z.lazy(() => RequestsUncheckedUpdateManyWithoutVendorCustomersInputSchema)]),
});
export default RequestsUpdateManyWithWhereWithoutVendorCustomersInputSchema;
