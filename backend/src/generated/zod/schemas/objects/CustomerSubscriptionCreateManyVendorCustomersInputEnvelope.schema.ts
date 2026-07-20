import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CustomerSubscriptionCreateManyVendorCustomersInputObjectSchema as CustomerSubscriptionCreateManyVendorCustomersInputObjectSchema } from './CustomerSubscriptionCreateManyVendorCustomersInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CustomerSubscriptionCreateManyVendorCustomersInputObjectSchema), z.lazy(() => CustomerSubscriptionCreateManyVendorCustomersInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CustomerSubscriptionCreateManyVendorCustomersInputEnvelopeObjectSchema: z.ZodType<Prisma.CustomerSubscriptionCreateManyVendorCustomersInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CustomerSubscriptionCreateManyVendorCustomersInputEnvelope>;
export const CustomerSubscriptionCreateManyVendorCustomersInputEnvelopeObjectZodSchema = makeSchema();
