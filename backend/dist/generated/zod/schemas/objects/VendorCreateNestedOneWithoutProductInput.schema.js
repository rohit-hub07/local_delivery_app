import * as z from 'zod';
import { VendorCreateWithoutProductInputObjectSchema as VendorCreateWithoutProductInputObjectSchema } from './VendorCreateWithoutProductInput.schema';
import { VendorUncheckedCreateWithoutProductInputObjectSchema as VendorUncheckedCreateWithoutProductInputObjectSchema } from './VendorUncheckedCreateWithoutProductInput.schema';
import { VendorCreateOrConnectWithoutProductInputObjectSchema as VendorCreateOrConnectWithoutProductInputObjectSchema } from './VendorCreateOrConnectWithoutProductInput.schema';
import { VendorWhereUniqueInputObjectSchema as VendorWhereUniqueInputObjectSchema } from './VendorWhereUniqueInput.schema';
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => VendorCreateWithoutProductInputObjectSchema), z.lazy(() => VendorUncheckedCreateWithoutProductInputObjectSchema)]).optional(),
    connectOrCreate: z.lazy(() => VendorCreateOrConnectWithoutProductInputObjectSchema).optional(),
    connect: z.lazy(() => VendorWhereUniqueInputObjectSchema).optional()
}).strict();
export const VendorCreateNestedOneWithoutProductInputObjectSchema = makeSchema();
export const VendorCreateNestedOneWithoutProductInputObjectZodSchema = makeSchema();
