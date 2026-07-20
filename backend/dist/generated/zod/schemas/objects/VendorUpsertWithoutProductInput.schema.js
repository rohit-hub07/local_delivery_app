import * as z from 'zod';
import { VendorUpdateWithoutProductInputObjectSchema as VendorUpdateWithoutProductInputObjectSchema } from './VendorUpdateWithoutProductInput.schema';
import { VendorUncheckedUpdateWithoutProductInputObjectSchema as VendorUncheckedUpdateWithoutProductInputObjectSchema } from './VendorUncheckedUpdateWithoutProductInput.schema';
import { VendorCreateWithoutProductInputObjectSchema as VendorCreateWithoutProductInputObjectSchema } from './VendorCreateWithoutProductInput.schema';
import { VendorUncheckedCreateWithoutProductInputObjectSchema as VendorUncheckedCreateWithoutProductInputObjectSchema } from './VendorUncheckedCreateWithoutProductInput.schema';
import { VendorWhereInputObjectSchema as VendorWhereInputObjectSchema } from './VendorWhereInput.schema';
const makeSchema = () => z.object({
    update: z.union([z.lazy(() => VendorUpdateWithoutProductInputObjectSchema), z.lazy(() => VendorUncheckedUpdateWithoutProductInputObjectSchema)]),
    create: z.union([z.lazy(() => VendorCreateWithoutProductInputObjectSchema), z.lazy(() => VendorUncheckedCreateWithoutProductInputObjectSchema)]),
    where: z.lazy(() => VendorWhereInputObjectSchema).optional()
}).strict();
export const VendorUpsertWithoutProductInputObjectSchema = makeSchema();
export const VendorUpsertWithoutProductInputObjectZodSchema = makeSchema();
