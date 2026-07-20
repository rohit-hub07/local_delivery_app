import * as z from 'zod';
import { VendorWhereUniqueInputObjectSchema as VendorWhereUniqueInputObjectSchema } from './VendorWhereUniqueInput.schema';
import { VendorCreateWithoutProductInputObjectSchema as VendorCreateWithoutProductInputObjectSchema } from './VendorCreateWithoutProductInput.schema';
import { VendorUncheckedCreateWithoutProductInputObjectSchema as VendorUncheckedCreateWithoutProductInputObjectSchema } from './VendorUncheckedCreateWithoutProductInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => VendorWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => VendorCreateWithoutProductInputObjectSchema), z.lazy(() => VendorUncheckedCreateWithoutProductInputObjectSchema)])
}).strict();
export const VendorCreateOrConnectWithoutProductInputObjectSchema = makeSchema();
export const VendorCreateOrConnectWithoutProductInputObjectZodSchema = makeSchema();
