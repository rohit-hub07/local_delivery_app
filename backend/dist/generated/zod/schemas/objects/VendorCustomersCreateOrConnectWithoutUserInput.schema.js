import * as z from 'zod';
import { VendorCustomersWhereUniqueInputObjectSchema as VendorCustomersWhereUniqueInputObjectSchema } from './VendorCustomersWhereUniqueInput.schema';
import { VendorCustomersCreateWithoutUserInputObjectSchema as VendorCustomersCreateWithoutUserInputObjectSchema } from './VendorCustomersCreateWithoutUserInput.schema';
import { VendorCustomersUncheckedCreateWithoutUserInputObjectSchema as VendorCustomersUncheckedCreateWithoutUserInputObjectSchema } from './VendorCustomersUncheckedCreateWithoutUserInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => VendorCustomersWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => VendorCustomersCreateWithoutUserInputObjectSchema), z.lazy(() => VendorCustomersUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const VendorCustomersCreateOrConnectWithoutUserInputObjectSchema = makeSchema();
export const VendorCustomersCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
