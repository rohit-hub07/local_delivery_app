import { z } from 'zod';
import { VendorCreateWithoutVendorcustomersInputSchema } from './VendorCreateWithoutVendorcustomersInputSchema';
import { VendorUncheckedCreateWithoutVendorcustomersInputSchema } from './VendorUncheckedCreateWithoutVendorcustomersInputSchema';
import { VendorCreateOrConnectWithoutVendorcustomersInputSchema } from './VendorCreateOrConnectWithoutVendorcustomersInputSchema';
import { VendorWhereUniqueInputSchema } from './VendorWhereUniqueInputSchema';
export const VendorCreateNestedOneWithoutVendorcustomersInputSchema = z.strictObject({
    create: z.union([z.lazy(() => VendorCreateWithoutVendorcustomersInputSchema), z.lazy(() => VendorUncheckedCreateWithoutVendorcustomersInputSchema)]).optional(),
    connectOrCreate: z.lazy(() => VendorCreateOrConnectWithoutVendorcustomersInputSchema).optional(),
    connect: z.lazy(() => VendorWhereUniqueInputSchema).optional(),
});
export default VendorCreateNestedOneWithoutVendorcustomersInputSchema;
