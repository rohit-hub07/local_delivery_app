import * as z from 'zod';
import { ProductCreateWithoutRequestInputObjectSchema as ProductCreateWithoutRequestInputObjectSchema } from './ProductCreateWithoutRequestInput.schema';
import { ProductUncheckedCreateWithoutRequestInputObjectSchema as ProductUncheckedCreateWithoutRequestInputObjectSchema } from './ProductUncheckedCreateWithoutRequestInput.schema';
import { ProductCreateOrConnectWithoutRequestInputObjectSchema as ProductCreateOrConnectWithoutRequestInputObjectSchema } from './ProductCreateOrConnectWithoutRequestInput.schema';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => ProductCreateWithoutRequestInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutRequestInputObjectSchema)]).optional(),
    connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutRequestInputObjectSchema).optional(),
    connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProductCreateNestedOneWithoutRequestInputObjectSchema = makeSchema();
export const ProductCreateNestedOneWithoutRequestInputObjectZodSchema = makeSchema();
