import * as z from 'zod';
import { ProductCreateWithoutRequestInputObjectSchema as ProductCreateWithoutRequestInputObjectSchema } from './ProductCreateWithoutRequestInput.schema';
import { ProductUncheckedCreateWithoutRequestInputObjectSchema as ProductUncheckedCreateWithoutRequestInputObjectSchema } from './ProductUncheckedCreateWithoutRequestInput.schema';
import { ProductCreateOrConnectWithoutRequestInputObjectSchema as ProductCreateOrConnectWithoutRequestInputObjectSchema } from './ProductCreateOrConnectWithoutRequestInput.schema';
import { ProductUpsertWithoutRequestInputObjectSchema as ProductUpsertWithoutRequestInputObjectSchema } from './ProductUpsertWithoutRequestInput.schema';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateToOneWithWhereWithoutRequestInputObjectSchema as ProductUpdateToOneWithWhereWithoutRequestInputObjectSchema } from './ProductUpdateToOneWithWhereWithoutRequestInput.schema';
import { ProductUpdateWithoutRequestInputObjectSchema as ProductUpdateWithoutRequestInputObjectSchema } from './ProductUpdateWithoutRequestInput.schema';
import { ProductUncheckedUpdateWithoutRequestInputObjectSchema as ProductUncheckedUpdateWithoutRequestInputObjectSchema } from './ProductUncheckedUpdateWithoutRequestInput.schema';
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => ProductCreateWithoutRequestInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutRequestInputObjectSchema)]).optional(),
    connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutRequestInputObjectSchema).optional(),
    upsert: z.lazy(() => ProductUpsertWithoutRequestInputObjectSchema).optional(),
    connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
    update: z.union([z.lazy(() => ProductUpdateToOneWithWhereWithoutRequestInputObjectSchema), z.lazy(() => ProductUpdateWithoutRequestInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutRequestInputObjectSchema)]).optional()
}).strict();
export const ProductUpdateOneRequiredWithoutRequestNestedInputObjectSchema = makeSchema();
export const ProductUpdateOneRequiredWithoutRequestNestedInputObjectZodSchema = makeSchema();
