import * as z from 'zod';
import { VendorCustomersCreateWithoutUserInputObjectSchema as VendorCustomersCreateWithoutUserInputObjectSchema } from './VendorCustomersCreateWithoutUserInput.schema';
import { VendorCustomersUncheckedCreateWithoutUserInputObjectSchema as VendorCustomersUncheckedCreateWithoutUserInputObjectSchema } from './VendorCustomersUncheckedCreateWithoutUserInput.schema';
import { VendorCustomersCreateOrConnectWithoutUserInputObjectSchema as VendorCustomersCreateOrConnectWithoutUserInputObjectSchema } from './VendorCustomersCreateOrConnectWithoutUserInput.schema';
import { VendorCustomersCreateManyUserInputEnvelopeObjectSchema as VendorCustomersCreateManyUserInputEnvelopeObjectSchema } from './VendorCustomersCreateManyUserInputEnvelope.schema';
import { VendorCustomersWhereUniqueInputObjectSchema as VendorCustomersWhereUniqueInputObjectSchema } from './VendorCustomersWhereUniqueInput.schema';
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => VendorCustomersCreateWithoutUserInputObjectSchema), z.lazy(() => VendorCustomersCreateWithoutUserInputObjectSchema).array(), z.lazy(() => VendorCustomersUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => VendorCustomersUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => VendorCustomersCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => VendorCustomersCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
    createMany: z.lazy(() => VendorCustomersCreateManyUserInputEnvelopeObjectSchema).optional(),
    connect: z.union([z.lazy(() => VendorCustomersWhereUniqueInputObjectSchema), z.lazy(() => VendorCustomersWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const VendorCustomersCreateNestedManyWithoutUserInputObjectSchema = makeSchema();
export const VendorCustomersCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
