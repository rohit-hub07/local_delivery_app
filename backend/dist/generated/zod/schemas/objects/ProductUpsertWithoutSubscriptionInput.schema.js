import * as z from 'zod';
import { ProductUpdateWithoutSubscriptionInputObjectSchema as ProductUpdateWithoutSubscriptionInputObjectSchema } from './ProductUpdateWithoutSubscriptionInput.schema';
import { ProductUncheckedUpdateWithoutSubscriptionInputObjectSchema as ProductUncheckedUpdateWithoutSubscriptionInputObjectSchema } from './ProductUncheckedUpdateWithoutSubscriptionInput.schema';
import { ProductCreateWithoutSubscriptionInputObjectSchema as ProductCreateWithoutSubscriptionInputObjectSchema } from './ProductCreateWithoutSubscriptionInput.schema';
import { ProductUncheckedCreateWithoutSubscriptionInputObjectSchema as ProductUncheckedCreateWithoutSubscriptionInputObjectSchema } from './ProductUncheckedCreateWithoutSubscriptionInput.schema';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './ProductWhereInput.schema';
const makeSchema = () => z.object({
    update: z.union([z.lazy(() => ProductUpdateWithoutSubscriptionInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutSubscriptionInputObjectSchema)]),
    create: z.union([z.lazy(() => ProductCreateWithoutSubscriptionInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutSubscriptionInputObjectSchema)]),
    where: z.lazy(() => ProductWhereInputObjectSchema).optional()
}).strict();
export const ProductUpsertWithoutSubscriptionInputObjectSchema = makeSchema();
export const ProductUpsertWithoutSubscriptionInputObjectZodSchema = makeSchema();
