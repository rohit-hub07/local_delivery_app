import * as z from 'zod';
import { VendorWhereUniqueInputObjectSchema as VendorWhereUniqueInputObjectSchema } from './VendorWhereUniqueInput.schema';
import { VendorCreateWithoutUserInputObjectSchema as VendorCreateWithoutUserInputObjectSchema } from './VendorCreateWithoutUserInput.schema';
import { VendorUncheckedCreateWithoutUserInputObjectSchema as VendorUncheckedCreateWithoutUserInputObjectSchema } from './VendorUncheckedCreateWithoutUserInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => VendorWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => VendorCreateWithoutUserInputObjectSchema), z.lazy(() => VendorUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const VendorCreateOrConnectWithoutUserInputObjectSchema = makeSchema();
export const VendorCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
