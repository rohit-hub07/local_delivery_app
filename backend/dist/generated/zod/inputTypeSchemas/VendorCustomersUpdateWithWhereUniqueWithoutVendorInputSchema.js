import { z } from 'zod';
import { VendorCustomersWhereUniqueInputSchema } from './VendorCustomersWhereUniqueInputSchema';
import { VendorCustomersUpdateWithoutVendorInputSchema } from './VendorCustomersUpdateWithoutVendorInputSchema';
import { VendorCustomersUncheckedUpdateWithoutVendorInputSchema } from './VendorCustomersUncheckedUpdateWithoutVendorInputSchema';
export const VendorCustomersUpdateWithWhereUniqueWithoutVendorInputSchema = z.strictObject({
    where: z.lazy(() => VendorCustomersWhereUniqueInputSchema),
    data: z.union([z.lazy(() => VendorCustomersUpdateWithoutVendorInputSchema), z.lazy(() => VendorCustomersUncheckedUpdateWithoutVendorInputSchema)]),
});
export default VendorCustomersUpdateWithWhereUniqueWithoutVendorInputSchema;
