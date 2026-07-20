import { z } from 'zod';
import { VendorUpdateWithoutVendorcustomersInputSchema } from './VendorUpdateWithoutVendorcustomersInputSchema';
import { VendorUncheckedUpdateWithoutVendorcustomersInputSchema } from './VendorUncheckedUpdateWithoutVendorcustomersInputSchema';
import { VendorCreateWithoutVendorcustomersInputSchema } from './VendorCreateWithoutVendorcustomersInputSchema';
import { VendorUncheckedCreateWithoutVendorcustomersInputSchema } from './VendorUncheckedCreateWithoutVendorcustomersInputSchema';
import { VendorWhereInputSchema } from './VendorWhereInputSchema';
export const VendorUpsertWithoutVendorcustomersInputSchema = z.strictObject({
    update: z.union([z.lazy(() => VendorUpdateWithoutVendorcustomersInputSchema), z.lazy(() => VendorUncheckedUpdateWithoutVendorcustomersInputSchema)]),
    create: z.union([z.lazy(() => VendorCreateWithoutVendorcustomersInputSchema), z.lazy(() => VendorUncheckedCreateWithoutVendorcustomersInputSchema)]),
    where: z.lazy(() => VendorWhereInputSchema).optional(),
});
export default VendorUpsertWithoutVendorcustomersInputSchema;
