import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CustomerSubscriptionScalarWhereInputObjectSchema as CustomerSubscriptionScalarWhereInputObjectSchema } from './CustomerSubscriptionScalarWhereInput.schema';
import { CustomerSubscriptionUpdateManyMutationInputObjectSchema as CustomerSubscriptionUpdateManyMutationInputObjectSchema } from './CustomerSubscriptionUpdateManyMutationInput.schema';
import { CustomerSubscriptionUncheckedUpdateManyWithoutProductInputObjectSchema as CustomerSubscriptionUncheckedUpdateManyWithoutProductInputObjectSchema } from './CustomerSubscriptionUncheckedUpdateManyWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomerSubscriptionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CustomerSubscriptionUpdateManyMutationInputObjectSchema), z.lazy(() => CustomerSubscriptionUncheckedUpdateManyWithoutProductInputObjectSchema)])
}).strict();
export const CustomerSubscriptionUpdateManyWithWhereWithoutProductInputObjectSchema: z.ZodType<Prisma.CustomerSubscriptionUpdateManyWithWhereWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerSubscriptionUpdateManyWithWhereWithoutProductInput>;
export const CustomerSubscriptionUpdateManyWithWhereWithoutProductInputObjectZodSchema = makeSchema();
