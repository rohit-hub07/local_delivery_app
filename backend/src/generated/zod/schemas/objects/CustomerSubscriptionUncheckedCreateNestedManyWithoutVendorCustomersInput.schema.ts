import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CustomerSubscriptionCreateWithoutVendorCustomersInputObjectSchema as CustomerSubscriptionCreateWithoutVendorCustomersInputObjectSchema } from './CustomerSubscriptionCreateWithoutVendorCustomersInput.schema';
import { CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInputObjectSchema as CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInputObjectSchema } from './CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInput.schema';
import { CustomerSubscriptionCreateOrConnectWithoutVendorCustomersInputObjectSchema as CustomerSubscriptionCreateOrConnectWithoutVendorCustomersInputObjectSchema } from './CustomerSubscriptionCreateOrConnectWithoutVendorCustomersInput.schema';
import { CustomerSubscriptionCreateManyVendorCustomersInputEnvelopeObjectSchema as CustomerSubscriptionCreateManyVendorCustomersInputEnvelopeObjectSchema } from './CustomerSubscriptionCreateManyVendorCustomersInputEnvelope.schema';
import { CustomerSubscriptionWhereUniqueInputObjectSchema as CustomerSubscriptionWhereUniqueInputObjectSchema } from './CustomerSubscriptionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomerSubscriptionCreateWithoutVendorCustomersInputObjectSchema), z.lazy(() => CustomerSubscriptionCreateWithoutVendorCustomersInputObjectSchema).array(), z.lazy(() => CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInputObjectSchema), z.lazy(() => CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CustomerSubscriptionCreateOrConnectWithoutVendorCustomersInputObjectSchema), z.lazy(() => CustomerSubscriptionCreateOrConnectWithoutVendorCustomersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CustomerSubscriptionCreateManyVendorCustomersInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CustomerSubscriptionWhereUniqueInputObjectSchema), z.lazy(() => CustomerSubscriptionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CustomerSubscriptionUncheckedCreateNestedManyWithoutVendorCustomersInputObjectSchema: z.ZodType<Prisma.CustomerSubscriptionUncheckedCreateNestedManyWithoutVendorCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerSubscriptionUncheckedCreateNestedManyWithoutVendorCustomersInput>;
export const CustomerSubscriptionUncheckedCreateNestedManyWithoutVendorCustomersInputObjectZodSchema = makeSchema();
