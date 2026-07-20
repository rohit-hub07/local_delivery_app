import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CustomerSubscriptionCreateWithoutProductInputObjectSchema as CustomerSubscriptionCreateWithoutProductInputObjectSchema } from './CustomerSubscriptionCreateWithoutProductInput.schema';
import { CustomerSubscriptionUncheckedCreateWithoutProductInputObjectSchema as CustomerSubscriptionUncheckedCreateWithoutProductInputObjectSchema } from './CustomerSubscriptionUncheckedCreateWithoutProductInput.schema';
import { CustomerSubscriptionCreateOrConnectWithoutProductInputObjectSchema as CustomerSubscriptionCreateOrConnectWithoutProductInputObjectSchema } from './CustomerSubscriptionCreateOrConnectWithoutProductInput.schema';
import { CustomerSubscriptionCreateManyProductInputEnvelopeObjectSchema as CustomerSubscriptionCreateManyProductInputEnvelopeObjectSchema } from './CustomerSubscriptionCreateManyProductInputEnvelope.schema';
import { CustomerSubscriptionWhereUniqueInputObjectSchema as CustomerSubscriptionWhereUniqueInputObjectSchema } from './CustomerSubscriptionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomerSubscriptionCreateWithoutProductInputObjectSchema), z.lazy(() => CustomerSubscriptionCreateWithoutProductInputObjectSchema).array(), z.lazy(() => CustomerSubscriptionUncheckedCreateWithoutProductInputObjectSchema), z.lazy(() => CustomerSubscriptionUncheckedCreateWithoutProductInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CustomerSubscriptionCreateOrConnectWithoutProductInputObjectSchema), z.lazy(() => CustomerSubscriptionCreateOrConnectWithoutProductInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CustomerSubscriptionCreateManyProductInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CustomerSubscriptionWhereUniqueInputObjectSchema), z.lazy(() => CustomerSubscriptionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CustomerSubscriptionUncheckedCreateNestedManyWithoutProductInputObjectSchema: z.ZodType<Prisma.CustomerSubscriptionUncheckedCreateNestedManyWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerSubscriptionUncheckedCreateNestedManyWithoutProductInput>;
export const CustomerSubscriptionUncheckedCreateNestedManyWithoutProductInputObjectZodSchema = makeSchema();
