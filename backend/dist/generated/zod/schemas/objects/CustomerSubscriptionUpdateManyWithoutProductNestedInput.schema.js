import * as z from 'zod';
import { CustomerSubscriptionCreateWithoutProductInputObjectSchema as CustomerSubscriptionCreateWithoutProductInputObjectSchema } from './CustomerSubscriptionCreateWithoutProductInput.schema';
import { CustomerSubscriptionUncheckedCreateWithoutProductInputObjectSchema as CustomerSubscriptionUncheckedCreateWithoutProductInputObjectSchema } from './CustomerSubscriptionUncheckedCreateWithoutProductInput.schema';
import { CustomerSubscriptionCreateOrConnectWithoutProductInputObjectSchema as CustomerSubscriptionCreateOrConnectWithoutProductInputObjectSchema } from './CustomerSubscriptionCreateOrConnectWithoutProductInput.schema';
import { CustomerSubscriptionUpsertWithWhereUniqueWithoutProductInputObjectSchema as CustomerSubscriptionUpsertWithWhereUniqueWithoutProductInputObjectSchema } from './CustomerSubscriptionUpsertWithWhereUniqueWithoutProductInput.schema';
import { CustomerSubscriptionCreateManyProductInputEnvelopeObjectSchema as CustomerSubscriptionCreateManyProductInputEnvelopeObjectSchema } from './CustomerSubscriptionCreateManyProductInputEnvelope.schema';
import { CustomerSubscriptionWhereUniqueInputObjectSchema as CustomerSubscriptionWhereUniqueInputObjectSchema } from './CustomerSubscriptionWhereUniqueInput.schema';
import { CustomerSubscriptionUpdateWithWhereUniqueWithoutProductInputObjectSchema as CustomerSubscriptionUpdateWithWhereUniqueWithoutProductInputObjectSchema } from './CustomerSubscriptionUpdateWithWhereUniqueWithoutProductInput.schema';
import { CustomerSubscriptionUpdateManyWithWhereWithoutProductInputObjectSchema as CustomerSubscriptionUpdateManyWithWhereWithoutProductInputObjectSchema } from './CustomerSubscriptionUpdateManyWithWhereWithoutProductInput.schema';
import { CustomerSubscriptionScalarWhereInputObjectSchema as CustomerSubscriptionScalarWhereInputObjectSchema } from './CustomerSubscriptionScalarWhereInput.schema';
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => CustomerSubscriptionCreateWithoutProductInputObjectSchema), z.lazy(() => CustomerSubscriptionCreateWithoutProductInputObjectSchema).array(), z.lazy(() => CustomerSubscriptionUncheckedCreateWithoutProductInputObjectSchema), z.lazy(() => CustomerSubscriptionUncheckedCreateWithoutProductInputObjectSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => CustomerSubscriptionCreateOrConnectWithoutProductInputObjectSchema), z.lazy(() => CustomerSubscriptionCreateOrConnectWithoutProductInputObjectSchema).array()]).optional(),
    upsert: z.union([z.lazy(() => CustomerSubscriptionUpsertWithWhereUniqueWithoutProductInputObjectSchema), z.lazy(() => CustomerSubscriptionUpsertWithWhereUniqueWithoutProductInputObjectSchema).array()]).optional(),
    createMany: z.lazy(() => CustomerSubscriptionCreateManyProductInputEnvelopeObjectSchema).optional(),
    set: z.union([z.lazy(() => CustomerSubscriptionWhereUniqueInputObjectSchema), z.lazy(() => CustomerSubscriptionWhereUniqueInputObjectSchema).array()]).optional(),
    disconnect: z.union([z.lazy(() => CustomerSubscriptionWhereUniqueInputObjectSchema), z.lazy(() => CustomerSubscriptionWhereUniqueInputObjectSchema).array()]).optional(),
    delete: z.union([z.lazy(() => CustomerSubscriptionWhereUniqueInputObjectSchema), z.lazy(() => CustomerSubscriptionWhereUniqueInputObjectSchema).array()]).optional(),
    connect: z.union([z.lazy(() => CustomerSubscriptionWhereUniqueInputObjectSchema), z.lazy(() => CustomerSubscriptionWhereUniqueInputObjectSchema).array()]).optional(),
    update: z.union([z.lazy(() => CustomerSubscriptionUpdateWithWhereUniqueWithoutProductInputObjectSchema), z.lazy(() => CustomerSubscriptionUpdateWithWhereUniqueWithoutProductInputObjectSchema).array()]).optional(),
    updateMany: z.union([z.lazy(() => CustomerSubscriptionUpdateManyWithWhereWithoutProductInputObjectSchema), z.lazy(() => CustomerSubscriptionUpdateManyWithWhereWithoutProductInputObjectSchema).array()]).optional(),
    deleteMany: z.union([z.lazy(() => CustomerSubscriptionScalarWhereInputObjectSchema), z.lazy(() => CustomerSubscriptionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CustomerSubscriptionUpdateManyWithoutProductNestedInputObjectSchema = makeSchema();
export const CustomerSubscriptionUpdateManyWithoutProductNestedInputObjectZodSchema = makeSchema();
