import { z } from 'zod';
import { VendorCustomersScalarWhereInputSchema } from './VendorCustomersScalarWhereInputSchema';
import { VendorCustomersUpdateManyMutationInputSchema } from './VendorCustomersUpdateManyMutationInputSchema';
import { VendorCustomersUncheckedUpdateManyWithoutVendorInputSchema } from './VendorCustomersUncheckedUpdateManyWithoutVendorInputSchema';
export const VendorCustomersUpdateManyWithWhereWithoutVendorInputSchema = z.strictObject({
    where: z.lazy(() => VendorCustomersScalarWhereInputSchema),
    data: z.union([z.lazy(() => VendorCustomersUpdateManyMutationInputSchema), z.lazy(() => VendorCustomersUncheckedUpdateManyWithoutVendorInputSchema)]),
});
export default VendorCustomersUpdateManyWithWhereWithoutVendorInputSchema;
