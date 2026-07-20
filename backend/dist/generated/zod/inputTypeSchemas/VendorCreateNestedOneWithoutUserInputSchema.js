import { z } from 'zod';
import { VendorCreateWithoutUserInputSchema } from './VendorCreateWithoutUserInputSchema';
import { VendorUncheckedCreateWithoutUserInputSchema } from './VendorUncheckedCreateWithoutUserInputSchema';
import { VendorCreateOrConnectWithoutUserInputSchema } from './VendorCreateOrConnectWithoutUserInputSchema';
import { VendorWhereUniqueInputSchema } from './VendorWhereUniqueInputSchema';
export const VendorCreateNestedOneWithoutUserInputSchema = z.strictObject({
    create: z.union([z.lazy(() => VendorCreateWithoutUserInputSchema), z.lazy(() => VendorUncheckedCreateWithoutUserInputSchema)]).optional(),
    connectOrCreate: z.lazy(() => VendorCreateOrConnectWithoutUserInputSchema).optional(),
    connect: z.lazy(() => VendorWhereUniqueInputSchema).optional(),
});
export default VendorCreateNestedOneWithoutUserInputSchema;
