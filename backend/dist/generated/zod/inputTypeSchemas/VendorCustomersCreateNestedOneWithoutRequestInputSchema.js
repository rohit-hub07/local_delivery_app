import { z } from 'zod';
import { VendorCustomersCreateWithoutRequestInputSchema } from './VendorCustomersCreateWithoutRequestInputSchema';
import { VendorCustomersUncheckedCreateWithoutRequestInputSchema } from './VendorCustomersUncheckedCreateWithoutRequestInputSchema';
import { VendorCustomersCreateOrConnectWithoutRequestInputSchema } from './VendorCustomersCreateOrConnectWithoutRequestInputSchema';
import { VendorCustomersWhereUniqueInputSchema } from './VendorCustomersWhereUniqueInputSchema';
export const VendorCustomersCreateNestedOneWithoutRequestInputSchema = z.strictObject({
    create: z.union([z.lazy(() => VendorCustomersCreateWithoutRequestInputSchema), z.lazy(() => VendorCustomersUncheckedCreateWithoutRequestInputSchema)]).optional(),
    connectOrCreate: z.lazy(() => VendorCustomersCreateOrConnectWithoutRequestInputSchema).optional(),
    connect: z.lazy(() => VendorCustomersWhereUniqueInputSchema).optional(),
});
export default VendorCustomersCreateNestedOneWithoutRequestInputSchema;
