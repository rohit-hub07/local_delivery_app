import * as z from 'zod';
import { VendorWhereInputObjectSchema as VendorWhereInputObjectSchema } from './VendorWhereInput.schema';
import { VendorUpdateWithoutUserInputObjectSchema as VendorUpdateWithoutUserInputObjectSchema } from './VendorUpdateWithoutUserInput.schema';
import { VendorUncheckedUpdateWithoutUserInputObjectSchema as VendorUncheckedUpdateWithoutUserInputObjectSchema } from './VendorUncheckedUpdateWithoutUserInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => VendorWhereInputObjectSchema).optional(),
    data: z.union([z.lazy(() => VendorUpdateWithoutUserInputObjectSchema), z.lazy(() => VendorUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const VendorUpdateToOneWithWhereWithoutUserInputObjectSchema = makeSchema();
export const VendorUpdateToOneWithWhereWithoutUserInputObjectZodSchema = makeSchema();
