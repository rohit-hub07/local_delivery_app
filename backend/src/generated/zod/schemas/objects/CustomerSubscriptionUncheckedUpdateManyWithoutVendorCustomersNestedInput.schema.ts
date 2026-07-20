import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CustomerSubscriptionCreateWithoutVendorCustomersInputObjectSchema as CustomerSubscriptionCreateWithoutVendorCustomersInputObjectSchema } from './CustomerSubscriptionCreateWithoutVendorCustomersInput.schema';
import { CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInputObjectSchema as CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInputObjectSchema } from './CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInput.schema';
import { CustomerSubscriptionCreateOrConnectWithoutVendorCustomersInputObjectSchema as CustomerSubscriptionCreateOrConnectWithoutVendorCustomersInputObjectSchema } from './CustomerSubscriptionCreateOrConnectWithoutVendorCustomersInput.schema';
import { CustomerSubscriptionUpsertWithWhereUniqueWithoutVendorCustomersInputObjectSchema as CustomerSubscriptionUpsertWithWhereUniqueWithoutVendorCustomersInputObjectSchema } from './CustomerSubscriptionUpsertWithWhereUniqueWithoutVendorCustomersInput.schema';
import { CustomerSubscriptionCreateManyVendorCustomersInputEnvelopeObjectSchema as CustomerSubscriptionCreateManyVendorCustomersInputEnvelopeObjectSchema } from './CustomerSubscriptionCreateManyVendorCustomersInputEnvelope.schema';
import { CustomerSubscriptionWhereUniqueInputObjectSchema as CustomerSubscriptionWhereUniqueInputObjectSchema } from './CustomerSubscriptionWhereUniqueInput.schema';
import { CustomerSubscriptionUpdateWithWhereUniqueWithoutVendorCustomersInputObjectSchema as CustomerSubscriptionUpdateWithWhereUniqueWithoutVendorCustomersInputObjectSchema } from './CustomerSubscriptionUpdateWithWhereUniqueWithoutVendorCustomersInput.schema';
import { CustomerSubscriptionUpdateManyWithWhereWithoutVendorCustomersInputObjectSchema as CustomerSubscriptionUpdateManyWithWhereWithoutVendorCustomersInputObjectSchema } from './CustomerSubscriptionUpdateManyWithWhereWithoutVendorCustomersInput.schema';
import { CustomerSubscriptionScalarWhereInputObjectSchema as CustomerSubscriptionScalarWhereInputObjectSchema } from './CustomerSubscriptionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomerSubscriptionCreateWithoutVendorCustomersInputObjectSchema), z.lazy(() => CustomerSubscriptionCreateWithoutVendorCustomersInputObjectSchema).array(), z.lazy(() => CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInputObjectSchema), z.lazy(() => CustomerSubscriptionUncheckedCreateWithoutVendorCustomersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CustomerSubscriptionCreateOrConnectWithoutVendorCustomersInputObjectSchema), z.lazy(() => CustomerSubscriptionCreateOrConnectWithoutVendorCustomersInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CustomerSubscriptionUpsertWithWhereUniqueWithoutVendorCustomersInputObjectSchema), z.lazy(() => CustomerSubscriptionUpsertWithWhereUniqueWithoutVendorCustomersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CustomerSubscriptionCreateManyVendorCustomersInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CustomerSubscriptionWhereUniqueInputObjectSchema), z.lazy(() => CustomerSubscriptionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CustomerSubscriptionWhereUniqueInputObjectSchema), z.lazy(() => CustomerSubscriptionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CustomerSubscriptionWhereUniqueInputObjectSchema), z.lazy(() => CustomerSubscriptionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CustomerSubscriptionWhereUniqueInputObjectSchema), z.lazy(() => CustomerSubscriptionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CustomerSubscriptionUpdateWithWhereUniqueWithoutVendorCustomersInputObjectSchema), z.lazy(() => CustomerSubscriptionUpdateWithWhereUniqueWithoutVendorCustomersInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CustomerSubscriptionUpdateManyWithWhereWithoutVendorCustomersInputObjectSchema), z.lazy(() => CustomerSubscriptionUpdateManyWithWhereWithoutVendorCustomersInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CustomerSubscriptionScalarWhereInputObjectSchema), z.lazy(() => CustomerSubscriptionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CustomerSubscriptionUncheckedUpdateManyWithoutVendorCustomersNestedInputObjectSchema: z.ZodType<Prisma.CustomerSubscriptionUncheckedUpdateManyWithoutVendorCustomersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerSubscriptionUncheckedUpdateManyWithoutVendorCustomersNestedInput>;
export const CustomerSubscriptionUncheckedUpdateManyWithoutVendorCustomersNestedInputObjectZodSchema = makeSchema();
