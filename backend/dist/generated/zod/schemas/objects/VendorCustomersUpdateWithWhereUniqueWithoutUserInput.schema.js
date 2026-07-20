import * as z from 'zod';
import { VendorCustomersWhereUniqueInputObjectSchema as VendorCustomersWhereUniqueInputObjectSchema } from './VendorCustomersWhereUniqueInput.schema';
import { VendorCustomersUpdateWithoutUserInputObjectSchema as VendorCustomersUpdateWithoutUserInputObjectSchema } from './VendorCustomersUpdateWithoutUserInput.schema';
import { VendorCustomersUncheckedUpdateWithoutUserInputObjectSchema as VendorCustomersUncheckedUpdateWithoutUserInputObjectSchema } from './VendorCustomersUncheckedUpdateWithoutUserInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => VendorCustomersWhereUniqueInputObjectSchema),
    data: z.union([z.lazy(() => VendorCustomersUpdateWithoutUserInputObjectSchema), z.lazy(() => VendorCustomersUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const VendorCustomersUpdateWithWhereUniqueWithoutUserInputObjectSchema = makeSchema();
export const VendorCustomersUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
