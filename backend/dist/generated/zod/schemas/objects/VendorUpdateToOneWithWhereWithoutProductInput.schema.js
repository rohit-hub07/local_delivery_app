import * as z from 'zod';
import { VendorWhereInputObjectSchema as VendorWhereInputObjectSchema } from './VendorWhereInput.schema';
import { VendorUpdateWithoutProductInputObjectSchema as VendorUpdateWithoutProductInputObjectSchema } from './VendorUpdateWithoutProductInput.schema';
import { VendorUncheckedUpdateWithoutProductInputObjectSchema as VendorUncheckedUpdateWithoutProductInputObjectSchema } from './VendorUncheckedUpdateWithoutProductInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => VendorWhereInputObjectSchema).optional(),
    data: z.union([z.lazy(() => VendorUpdateWithoutProductInputObjectSchema), z.lazy(() => VendorUncheckedUpdateWithoutProductInputObjectSchema)])
}).strict();
export const VendorUpdateToOneWithWhereWithoutProductInputObjectSchema = makeSchema();
export const VendorUpdateToOneWithWhereWithoutProductInputObjectZodSchema = makeSchema();
