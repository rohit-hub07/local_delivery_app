import * as z from 'zod';
import { CustomerSubscriptionCreateWithoutProductInputObjectSchema as CustomerSubscriptionCreateWithoutProductInputObjectSchema } from './CustomerSubscriptionCreateWithoutProductInput.schema';
import { CustomerSubscriptionUncheckedCreateWithoutProductInputObjectSchema as CustomerSubscriptionUncheckedCreateWithoutProductInputObjectSchema } from './CustomerSubscriptionUncheckedCreateWithoutProductInput.schema';
import { CustomerSubscriptionCreateOrConnectWithoutProductInputObjectSchema as CustomerSubscriptionCreateOrConnectWithoutProductInputObjectSchema } from './CustomerSubscriptionCreateOrConnectWithoutProductInput.schema';
import { CustomerSubscriptionCreateManyProductInputEnvelopeObjectSchema as CustomerSubscriptionCreateManyProductInputEnvelopeObjectSchema } from './CustomerSubscriptionCreateManyProductInputEnvelope.schema';
import { CustomerSubscriptionWhereUniqueInputObjectSchema as CustomerSubscriptionWhereUniqueInputObjectSchema } from './CustomerSubscriptionWhereUniqueInput.schema';
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => CustomerSubscriptionCreateWithoutProductInputObjectSchema), z.lazy(() => CustomerSubscriptionCreateWithoutProductInputObjectSchema).array(), z.lazy(() => CustomerSubscriptionUncheckedCreateWithoutProductInputObjectSchema), z.lazy(() => CustomerSubscriptionUncheckedCreateWithoutProductInputObjectSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => CustomerSubscriptionCreateOrConnectWithoutProductInputObjectSchema), z.lazy(() => CustomerSubscriptionCreateOrConnectWithoutProductInputObjectSchema).array()]).optional(),
    createMany: z.lazy(() => CustomerSubscriptionCreateManyProductInputEnvelopeObjectSchema).optional(),
    connect: z.union([z.lazy(() => CustomerSubscriptionWhereUniqueInputObjectSchema), z.lazy(() => CustomerSubscriptionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CustomerSubscriptionCreateNestedManyWithoutProductInputObjectSchema = makeSchema();
export const CustomerSubscriptionCreateNestedManyWithoutProductInputObjectZodSchema = makeSchema();
