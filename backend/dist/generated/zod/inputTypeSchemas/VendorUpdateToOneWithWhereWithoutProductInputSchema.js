import { z } from 'zod';
import { VendorWhereInputSchema } from './VendorWhereInputSchema';
import { VendorUpdateWithoutProductInputSchema } from './VendorUpdateWithoutProductInputSchema';
import { VendorUncheckedUpdateWithoutProductInputSchema } from './VendorUncheckedUpdateWithoutProductInputSchema';
export const VendorUpdateToOneWithWhereWithoutProductInputSchema = z.strictObject({
    where: z.lazy(() => VendorWhereInputSchema).optional(),
    data: z.union([z.lazy(() => VendorUpdateWithoutProductInputSchema), z.lazy(() => VendorUncheckedUpdateWithoutProductInputSchema)]),
});
export default VendorUpdateToOneWithWhereWithoutProductInputSchema;
