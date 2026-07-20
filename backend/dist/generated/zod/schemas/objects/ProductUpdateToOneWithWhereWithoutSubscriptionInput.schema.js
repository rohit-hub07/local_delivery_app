import * as z from 'zod';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './ProductWhereInput.schema';
import { ProductUpdateWithoutSubscriptionInputObjectSchema as ProductUpdateWithoutSubscriptionInputObjectSchema } from './ProductUpdateWithoutSubscriptionInput.schema';
import { ProductUncheckedUpdateWithoutSubscriptionInputObjectSchema as ProductUncheckedUpdateWithoutSubscriptionInputObjectSchema } from './ProductUncheckedUpdateWithoutSubscriptionInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => ProductWhereInputObjectSchema).optional(),
    data: z.union([z.lazy(() => ProductUpdateWithoutSubscriptionInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutSubscriptionInputObjectSchema)])
}).strict();
export const ProductUpdateToOneWithWhereWithoutSubscriptionInputObjectSchema = makeSchema();
export const ProductUpdateToOneWithWhereWithoutSubscriptionInputObjectZodSchema = makeSchema();
