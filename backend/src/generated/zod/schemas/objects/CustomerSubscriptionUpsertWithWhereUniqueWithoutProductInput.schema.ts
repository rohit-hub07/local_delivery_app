import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CustomerSubscriptionWhereUniqueInputObjectSchema as CustomerSubscriptionWhereUniqueInputObjectSchema } from './CustomerSubscriptionWhereUniqueInput.schema';
import { CustomerSubscriptionUpdateWithoutProductInputObjectSchema as CustomerSubscriptionUpdateWithoutProductInputObjectSchema } from './CustomerSubscriptionUpdateWithoutProductInput.schema';
import { CustomerSubscriptionUncheckedUpdateWithoutProductInputObjectSchema as CustomerSubscriptionUncheckedUpdateWithoutProductInputObjectSchema } from './CustomerSubscriptionUncheckedUpdateWithoutProductInput.schema';
import { CustomerSubscriptionCreateWithoutProductInputObjectSchema as CustomerSubscriptionCreateWithoutProductInputObjectSchema } from './CustomerSubscriptionCreateWithoutProductInput.schema';
import { CustomerSubscriptionUncheckedCreateWithoutProductInputObjectSchema as CustomerSubscriptionUncheckedCreateWithoutProductInputObjectSchema } from './CustomerSubscriptionUncheckedCreateWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomerSubscriptionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CustomerSubscriptionUpdateWithoutProductInputObjectSchema), z.lazy(() => CustomerSubscriptionUncheckedUpdateWithoutProductInputObjectSchema)]),
  create: z.union([z.lazy(() => CustomerSubscriptionCreateWithoutProductInputObjectSchema), z.lazy(() => CustomerSubscriptionUncheckedCreateWithoutProductInputObjectSchema)])
}).strict();
export const CustomerSubscriptionUpsertWithWhereUniqueWithoutProductInputObjectSchema: z.ZodType<Prisma.CustomerSubscriptionUpsertWithWhereUniqueWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerSubscriptionUpsertWithWhereUniqueWithoutProductInput>;
export const CustomerSubscriptionUpsertWithWhereUniqueWithoutProductInputObjectZodSchema = makeSchema();
