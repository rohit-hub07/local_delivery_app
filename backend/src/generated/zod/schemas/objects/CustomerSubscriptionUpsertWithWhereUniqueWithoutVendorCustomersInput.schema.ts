import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CustomerSubscriptionWhereUniqueInputObjectSchema as CustomerSubscriptionWhereUniqueInputObjectSchema } from './CustomerSubscriptionWhereUniqueInput.schema';
import { CustomerSubscriptionUpdateWithoutVendorCustomersInputObjectSchema as CustomerSubscriptionUpdateWithoutVendorCustomersInputObjectSchema } from './CustomerSubscriptionUpdateWithoutVendorCustomersInput.schema';
import { CustomerSubscriptionUncheckedUpdateWithoutVendorCustomersInputObjectSchema as CustomerSubscriptionUncheckedUpdateWithoutVendorCustomersInputObjectSchema } from './CustomerSubscriptionUncheckedUpdateWithoutVendorCustomersInput.schema';
import { CustomerSubscriptionCreateWithoutVendorCustomersInputObjectSchema as CustomerSubscriptionCreateWithoutVendorCustomersInputObjectSchema } from './CustomerSubscriptionCreateWithoutVendorCustomersInput.schema';
import { CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInputObjectSchema as CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInputObjectSchema } from './CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomerSubscriptionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CustomerSubscriptionUpdateWithoutVendorCustomersInputObjectSchema), z.lazy(() => CustomerSubscriptionUncheckedUpdateWithoutVendorCustomersInputObjectSchema)]),
  create: z.union([z.lazy(() => CustomerSubscriptionCreateWithoutVendorCustomersInputObjectSchema), z.lazy(() => CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInputObjectSchema)])
}).strict();
export const CustomerSubscriptionUpsertWithWhereUniqueWithoutVendorCustomersInputObjectSchema: z.ZodType<Prisma.CustomerSubscriptionUpsertWithWhereUniqueWithoutVendorCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerSubscriptionUpsertWithWhereUniqueWithoutVendorCustomersInput>;
export const CustomerSubscriptionUpsertWithWhereUniqueWithoutVendorCustomersInputObjectZodSchema = makeSchema();
