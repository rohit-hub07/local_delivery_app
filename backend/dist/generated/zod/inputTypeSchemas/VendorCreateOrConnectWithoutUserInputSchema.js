import { z } from 'zod';
import { VendorWhereUniqueInputSchema } from './VendorWhereUniqueInputSchema';
import { VendorCreateWithoutUserInputSchema } from './VendorCreateWithoutUserInputSchema';
import { VendorUncheckedCreateWithoutUserInputSchema } from './VendorUncheckedCreateWithoutUserInputSchema';
export const VendorCreateOrConnectWithoutUserInputSchema = z.strictObject({
    where: z.lazy(() => VendorWhereUniqueInputSchema),
    create: z.union([z.lazy(() => VendorCreateWithoutUserInputSchema), z.lazy(() => VendorUncheckedCreateWithoutUserInputSchema)]),
});
export default VendorCreateOrConnectWithoutUserInputSchema;
