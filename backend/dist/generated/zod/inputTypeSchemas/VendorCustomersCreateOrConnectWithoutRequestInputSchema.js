import { z } from 'zod';
import { VendorCustomersWhereUniqueInputSchema } from './VendorCustomersWhereUniqueInputSchema';
import { VendorCustomersCreateWithoutRequestInputSchema } from './VendorCustomersCreateWithoutRequestInputSchema';
import { VendorCustomersUncheckedCreateWithoutRequestInputSchema } from './VendorCustomersUncheckedCreateWithoutRequestInputSchema';
export const VendorCustomersCreateOrConnectWithoutRequestInputSchema = z.strictObject({
    where: z.lazy(() => VendorCustomersWhereUniqueInputSchema),
    create: z.union([z.lazy(() => VendorCustomersCreateWithoutRequestInputSchema), z.lazy(() => VendorCustomersUncheckedCreateWithoutRequestInputSchema)]),
});
export default VendorCustomersCreateOrConnectWithoutRequestInputSchema;
