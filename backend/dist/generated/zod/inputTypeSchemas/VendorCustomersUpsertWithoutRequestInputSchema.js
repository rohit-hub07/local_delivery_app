import { z } from 'zod';
import { VendorCustomersUpdateWithoutRequestInputSchema } from './VendorCustomersUpdateWithoutRequestInputSchema';
import { VendorCustomersUncheckedUpdateWithoutRequestInputSchema } from './VendorCustomersUncheckedUpdateWithoutRequestInputSchema';
import { VendorCustomersCreateWithoutRequestInputSchema } from './VendorCustomersCreateWithoutRequestInputSchema';
import { VendorCustomersUncheckedCreateWithoutRequestInputSchema } from './VendorCustomersUncheckedCreateWithoutRequestInputSchema';
import { VendorCustomersWhereInputSchema } from './VendorCustomersWhereInputSchema';
export const VendorCustomersUpsertWithoutRequestInputSchema = z.strictObject({
    update: z.union([z.lazy(() => VendorCustomersUpdateWithoutRequestInputSchema), z.lazy(() => VendorCustomersUncheckedUpdateWithoutRequestInputSchema)]),
    create: z.union([z.lazy(() => VendorCustomersCreateWithoutRequestInputSchema), z.lazy(() => VendorCustomersUncheckedCreateWithoutRequestInputSchema)]),
    where: z.lazy(() => VendorCustomersWhereInputSchema).optional(),
});
export default VendorCustomersUpsertWithoutRequestInputSchema;
