import { z } from 'zod';
import { VendorCustomersCreateWithoutUserInputSchema } from './VendorCustomersCreateWithoutUserInputSchema';
import { VendorCustomersUncheckedCreateWithoutUserInputSchema } from './VendorCustomersUncheckedCreateWithoutUserInputSchema';
import { VendorCustomersCreateOrConnectWithoutUserInputSchema } from './VendorCustomersCreateOrConnectWithoutUserInputSchema';
import { VendorCustomersCreateManyUserInputEnvelopeSchema } from './VendorCustomersCreateManyUserInputEnvelopeSchema';
import { VendorCustomersWhereUniqueInputSchema } from './VendorCustomersWhereUniqueInputSchema';
export const VendorCustomersCreateNestedManyWithoutUserInputSchema = z.strictObject({
    create: z.union([z.lazy(() => VendorCustomersCreateWithoutUserInputSchema), z.lazy(() => VendorCustomersCreateWithoutUserInputSchema).array(), z.lazy(() => VendorCustomersUncheckedCreateWithoutUserInputSchema), z.lazy(() => VendorCustomersUncheckedCreateWithoutUserInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => VendorCustomersCreateOrConnectWithoutUserInputSchema), z.lazy(() => VendorCustomersCreateOrConnectWithoutUserInputSchema).array()]).optional(),
    createMany: z.lazy(() => VendorCustomersCreateManyUserInputEnvelopeSchema).optional(),
    connect: z.union([z.lazy(() => VendorCustomersWhereUniqueInputSchema), z.lazy(() => VendorCustomersWhereUniqueInputSchema).array()]).optional(),
});
export default VendorCustomersCreateNestedManyWithoutUserInputSchema;
