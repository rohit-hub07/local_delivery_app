import * as z from 'zod';
import { VendorCreateWithoutUserInputObjectSchema as VendorCreateWithoutUserInputObjectSchema } from './VendorCreateWithoutUserInput.schema';
import { VendorUncheckedCreateWithoutUserInputObjectSchema as VendorUncheckedCreateWithoutUserInputObjectSchema } from './VendorUncheckedCreateWithoutUserInput.schema';
import { VendorCreateOrConnectWithoutUserInputObjectSchema as VendorCreateOrConnectWithoutUserInputObjectSchema } from './VendorCreateOrConnectWithoutUserInput.schema';
import { VendorWhereUniqueInputObjectSchema as VendorWhereUniqueInputObjectSchema } from './VendorWhereUniqueInput.schema';
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => VendorCreateWithoutUserInputObjectSchema), z.lazy(() => VendorUncheckedCreateWithoutUserInputObjectSchema)]).optional(),
    connectOrCreate: z.lazy(() => VendorCreateOrConnectWithoutUserInputObjectSchema).optional(),
    connect: z.lazy(() => VendorWhereUniqueInputObjectSchema).optional()
}).strict();
export const VendorCreateNestedOneWithoutUserInputObjectSchema = makeSchema();
export const VendorCreateNestedOneWithoutUserInputObjectZodSchema = makeSchema();
