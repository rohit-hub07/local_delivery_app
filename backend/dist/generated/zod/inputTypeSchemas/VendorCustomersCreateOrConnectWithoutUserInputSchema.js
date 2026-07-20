import { z } from 'zod';
import { VendorCustomersWhereUniqueInputSchema } from './VendorCustomersWhereUniqueInputSchema';
import { VendorCustomersCreateWithoutUserInputSchema } from './VendorCustomersCreateWithoutUserInputSchema';
import { VendorCustomersUncheckedCreateWithoutUserInputSchema } from './VendorCustomersUncheckedCreateWithoutUserInputSchema';
export const VendorCustomersCreateOrConnectWithoutUserInputSchema = z.strictObject({
    where: z.lazy(() => VendorCustomersWhereUniqueInputSchema),
    create: z.union([z.lazy(() => VendorCustomersCreateWithoutUserInputSchema), z.lazy(() => VendorCustomersUncheckedCreateWithoutUserInputSchema)]),
});
export default VendorCustomersCreateOrConnectWithoutUserInputSchema;
