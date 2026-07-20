import { z } from 'zod';
import { VendorCreateWithoutUserInputSchema } from './VendorCreateWithoutUserInputSchema';
import { VendorUncheckedCreateWithoutUserInputSchema } from './VendorUncheckedCreateWithoutUserInputSchema';
import { VendorCreateOrConnectWithoutUserInputSchema } from './VendorCreateOrConnectWithoutUserInputSchema';
import { VendorUpsertWithoutUserInputSchema } from './VendorUpsertWithoutUserInputSchema';
import { VendorWhereInputSchema } from './VendorWhereInputSchema';
import { VendorWhereUniqueInputSchema } from './VendorWhereUniqueInputSchema';
import { VendorUpdateToOneWithWhereWithoutUserInputSchema } from './VendorUpdateToOneWithWhereWithoutUserInputSchema';
import { VendorUpdateWithoutUserInputSchema } from './VendorUpdateWithoutUserInputSchema';
import { VendorUncheckedUpdateWithoutUserInputSchema } from './VendorUncheckedUpdateWithoutUserInputSchema';
export const VendorUpdateOneWithoutUserNestedInputSchema = z.strictObject({
    create: z.union([z.lazy(() => VendorCreateWithoutUserInputSchema), z.lazy(() => VendorUncheckedCreateWithoutUserInputSchema)]).optional(),
    connectOrCreate: z.lazy(() => VendorCreateOrConnectWithoutUserInputSchema).optional(),
    upsert: z.lazy(() => VendorUpsertWithoutUserInputSchema).optional(),
    disconnect: z.union([z.boolean(), z.lazy(() => VendorWhereInputSchema)]).optional(),
    delete: z.union([z.boolean(), z.lazy(() => VendorWhereInputSchema)]).optional(),
    connect: z.lazy(() => VendorWhereUniqueInputSchema).optional(),
    update: z.union([z.lazy(() => VendorUpdateToOneWithWhereWithoutUserInputSchema), z.lazy(() => VendorUpdateWithoutUserInputSchema), z.lazy(() => VendorUncheckedUpdateWithoutUserInputSchema)]).optional(),
});
export default VendorUpdateOneWithoutUserNestedInputSchema;
