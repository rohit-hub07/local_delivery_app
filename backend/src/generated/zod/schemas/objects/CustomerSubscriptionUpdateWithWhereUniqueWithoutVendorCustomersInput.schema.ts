import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CustomerSubscriptionWhereUniqueInputObjectSchema as CustomerSubscriptionWhereUniqueInputObjectSchema } from './CustomerSubscriptionWhereUniqueInput.schema';
import { CustomerSubscriptionUpdateWithoutVendorCustomersInputObjectSchema as CustomerSubscriptionUpdateWithoutVendorCustomersInputObjectSchema } from './CustomerSubscriptionUpdateWithoutVendorCustomersInput.schema';
import { CustomerSubscriptionUncheckedUpdateWithoutVendorCustomersInputObjectSchema as CustomerSubscriptionUncheckedUpdateWithoutVendorCustomersInputObjectSchema } from './CustomerSubscriptionUncheckedUpdateWithoutVendorCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomerSubscriptionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CustomerSubscriptionUpdateWithoutVendorCustomersInputObjectSchema), z.lazy(() => CustomerSubscriptionUncheckedUpdateWithoutVendorCustomersInputObjectSchema)])
}).strict();
export const CustomerSubscriptionUpdateWithWhereUniqueWithoutVendorCustomersInputObjectSchema: z.ZodType<Prisma.CustomerSubscriptionUpdateWithWhereUniqueWithoutVendorCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerSubscriptionUpdateWithWhereUniqueWithoutVendorCustomersInput>;
export const CustomerSubscriptionUpdateWithWhereUniqueWithoutVendorCustomersInputObjectZodSchema = makeSchema();
