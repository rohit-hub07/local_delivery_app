import { z } from 'zod';
import { VendorUpdateWithoutUserInputSchema } from './VendorUpdateWithoutUserInputSchema';
import { VendorUncheckedUpdateWithoutUserInputSchema } from './VendorUncheckedUpdateWithoutUserInputSchema';
import { VendorCreateWithoutUserInputSchema } from './VendorCreateWithoutUserInputSchema';
import { VendorUncheckedCreateWithoutUserInputSchema } from './VendorUncheckedCreateWithoutUserInputSchema';
import { VendorWhereInputSchema } from './VendorWhereInputSchema';
export const VendorUpsertWithoutUserInputSchema = z.strictObject({
    update: z.union([z.lazy(() => VendorUpdateWithoutUserInputSchema), z.lazy(() => VendorUncheckedUpdateWithoutUserInputSchema)]),
    create: z.union([z.lazy(() => VendorCreateWithoutUserInputSchema), z.lazy(() => VendorUncheckedCreateWithoutUserInputSchema)]),
    where: z.lazy(() => VendorWhereInputSchema).optional(),
});
export default VendorUpsertWithoutUserInputSchema;
