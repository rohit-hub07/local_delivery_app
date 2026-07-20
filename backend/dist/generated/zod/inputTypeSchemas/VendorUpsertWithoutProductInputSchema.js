import { z } from 'zod';
import { VendorUpdateWithoutProductInputSchema } from './VendorUpdateWithoutProductInputSchema';
import { VendorUncheckedUpdateWithoutProductInputSchema } from './VendorUncheckedUpdateWithoutProductInputSchema';
import { VendorCreateWithoutProductInputSchema } from './VendorCreateWithoutProductInputSchema';
import { VendorUncheckedCreateWithoutProductInputSchema } from './VendorUncheckedCreateWithoutProductInputSchema';
import { VendorWhereInputSchema } from './VendorWhereInputSchema';
export const VendorUpsertWithoutProductInputSchema = z.strictObject({
    update: z.union([z.lazy(() => VendorUpdateWithoutProductInputSchema), z.lazy(() => VendorUncheckedUpdateWithoutProductInputSchema)]),
    create: z.union([z.lazy(() => VendorCreateWithoutProductInputSchema), z.lazy(() => VendorUncheckedCreateWithoutProductInputSchema)]),
    where: z.lazy(() => VendorWhereInputSchema).optional(),
});
export default VendorUpsertWithoutProductInputSchema;
