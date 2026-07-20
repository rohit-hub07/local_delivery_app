import * as z from 'zod';
import { ProductCreateWithoutSubscriptionInputObjectSchema as ProductCreateWithoutSubscriptionInputObjectSchema } from './ProductCreateWithoutSubscriptionInput.schema';
import { ProductUncheckedCreateWithoutSubscriptionInputObjectSchema as ProductUncheckedCreateWithoutSubscriptionInputObjectSchema } from './ProductUncheckedCreateWithoutSubscriptionInput.schema';
import { ProductCreateOrConnectWithoutSubscriptionInputObjectSchema as ProductCreateOrConnectWithoutSubscriptionInputObjectSchema } from './ProductCreateOrConnectWithoutSubscriptionInput.schema';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => ProductCreateWithoutSubscriptionInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutSubscriptionInputObjectSchema)]).optional(),
    connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutSubscriptionInputObjectSchema).optional(),
    connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProductCreateNestedOneWithoutSubscriptionInputObjectSchema = makeSchema();
export const ProductCreateNestedOneWithoutSubscriptionInputObjectZodSchema = makeSchema();
