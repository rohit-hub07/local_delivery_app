import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CustomerSubscriptionCreateManyProductInputObjectSchema as CustomerSubscriptionCreateManyProductInputObjectSchema } from './CustomerSubscriptionCreateManyProductInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CustomerSubscriptionCreateManyProductInputObjectSchema), z.lazy(() => CustomerSubscriptionCreateManyProductInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CustomerSubscriptionCreateManyProductInputEnvelopeObjectSchema: z.ZodType<Prisma.CustomerSubscriptionCreateManyProductInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CustomerSubscriptionCreateManyProductInputEnvelope>;
export const CustomerSubscriptionCreateManyProductInputEnvelopeObjectZodSchema = makeSchema();
