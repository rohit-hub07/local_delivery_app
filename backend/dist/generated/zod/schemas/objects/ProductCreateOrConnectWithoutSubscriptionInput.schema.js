import * as z from 'zod';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutSubscriptionInputObjectSchema as ProductCreateWithoutSubscriptionInputObjectSchema } from './ProductCreateWithoutSubscriptionInput.schema';
import { ProductUncheckedCreateWithoutSubscriptionInputObjectSchema as ProductUncheckedCreateWithoutSubscriptionInputObjectSchema } from './ProductUncheckedCreateWithoutSubscriptionInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => ProductCreateWithoutSubscriptionInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutSubscriptionInputObjectSchema)])
}).strict();
export const ProductCreateOrConnectWithoutSubscriptionInputObjectSchema = makeSchema();
export const ProductCreateOrConnectWithoutSubscriptionInputObjectZodSchema = makeSchema();
