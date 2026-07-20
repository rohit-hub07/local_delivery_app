import * as z from 'zod';
import { CustomerSubscriptionWhereUniqueInputObjectSchema as CustomerSubscriptionWhereUniqueInputObjectSchema } from './CustomerSubscriptionWhereUniqueInput.schema';
import { CustomerSubscriptionCreateWithoutProductInputObjectSchema as CustomerSubscriptionCreateWithoutProductInputObjectSchema } from './CustomerSubscriptionCreateWithoutProductInput.schema';
import { CustomerSubscriptionUncheckedCreateWithoutProductInputObjectSchema as CustomerSubscriptionUncheckedCreateWithoutProductInputObjectSchema } from './CustomerSubscriptionUncheckedCreateWithoutProductInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => CustomerSubscriptionWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => CustomerSubscriptionCreateWithoutProductInputObjectSchema), z.lazy(() => CustomerSubscriptionUncheckedCreateWithoutProductInputObjectSchema)])
}).strict();
export const CustomerSubscriptionCreateOrConnectWithoutProductInputObjectSchema = makeSchema();
export const CustomerSubscriptionCreateOrConnectWithoutProductInputObjectZodSchema = makeSchema();
