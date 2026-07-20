import * as z from 'zod';
import { CustomerSubscriptionWhereUniqueInputObjectSchema as CustomerSubscriptionWhereUniqueInputObjectSchema } from './CustomerSubscriptionWhereUniqueInput.schema';
import { CustomerSubscriptionUpdateWithoutProductInputObjectSchema as CustomerSubscriptionUpdateWithoutProductInputObjectSchema } from './CustomerSubscriptionUpdateWithoutProductInput.schema';
import { CustomerSubscriptionUncheckedUpdateWithoutProductInputObjectSchema as CustomerSubscriptionUncheckedUpdateWithoutProductInputObjectSchema } from './CustomerSubscriptionUncheckedUpdateWithoutProductInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => CustomerSubscriptionWhereUniqueInputObjectSchema),
    data: z.union([z.lazy(() => CustomerSubscriptionUpdateWithoutProductInputObjectSchema), z.lazy(() => CustomerSubscriptionUncheckedUpdateWithoutProductInputObjectSchema)])
}).strict();
export const CustomerSubscriptionUpdateWithWhereUniqueWithoutProductInputObjectSchema = makeSchema();
export const CustomerSubscriptionUpdateWithWhereUniqueWithoutProductInputObjectZodSchema = makeSchema();
