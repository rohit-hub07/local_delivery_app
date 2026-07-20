import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CustomerSubscriptionWhereUniqueInputObjectSchema as CustomerSubscriptionWhereUniqueInputObjectSchema } from './CustomerSubscriptionWhereUniqueInput.schema';
import { CustomerSubscriptionUpdateWithoutProductInputObjectSchema as CustomerSubscriptionUpdateWithoutProductInputObjectSchema } from './CustomerSubscriptionUpdateWithoutProductInput.schema';
import { CustomerSubscriptionUncheckedUpdateWithoutProductInputObjectSchema as CustomerSubscriptionUncheckedUpdateWithoutProductInputObjectSchema } from './CustomerSubscriptionUncheckedUpdateWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomerSubscriptionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CustomerSubscriptionUpdateWithoutProductInputObjectSchema), z.lazy(() => CustomerSubscriptionUncheckedUpdateWithoutProductInputObjectSchema)])
}).strict();
export const CustomerSubscriptionUpdateWithWhereUniqueWithoutProductInputObjectSchema: z.ZodType<Prisma.CustomerSubscriptionUpdateWithWhereUniqueWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerSubscriptionUpdateWithWhereUniqueWithoutProductInput>;
export const CustomerSubscriptionUpdateWithWhereUniqueWithoutProductInputObjectZodSchema = makeSchema();
