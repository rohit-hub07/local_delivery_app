import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RequestsCreateWithoutVendorCustomersInputObjectSchema as RequestsCreateWithoutVendorCustomersInputObjectSchema } from './RequestsCreateWithoutVendorCustomersInput.schema';
import { RequestsUncheckedCreateWithoutVendorCustomersInputObjectSchema as RequestsUncheckedCreateWithoutVendorCustomersInputObjectSchema } from './RequestsUncheckedCreateWithoutVendorCustomersInput.schema';
import { RequestsCreateOrConnectWithoutVendorCustomersInputObjectSchema as RequestsCreateOrConnectWithoutVendorCustomersInputObjectSchema } from './RequestsCreateOrConnectWithoutVendorCustomersInput.schema';
import { RequestsUpsertWithWhereUniqueWithoutVendorCustomersInputObjectSchema as RequestsUpsertWithWhereUniqueWithoutVendorCustomersInputObjectSchema } from './RequestsUpsertWithWhereUniqueWithoutVendorCustomersInput.schema';
import { RequestsCreateManyVendorCustomersInputEnvelopeObjectSchema as RequestsCreateManyVendorCustomersInputEnvelopeObjectSchema } from './RequestsCreateManyVendorCustomersInputEnvelope.schema';
import { RequestsWhereUniqueInputObjectSchema as RequestsWhereUniqueInputObjectSchema } from './RequestsWhereUniqueInput.schema';
import { RequestsUpdateWithWhereUniqueWithoutVendorCustomersInputObjectSchema as RequestsUpdateWithWhereUniqueWithoutVendorCustomersInputObjectSchema } from './RequestsUpdateWithWhereUniqueWithoutVendorCustomersInput.schema';
import { RequestsUpdateManyWithWhereWithoutVendorCustomersInputObjectSchema as RequestsUpdateManyWithWhereWithoutVendorCustomersInputObjectSchema } from './RequestsUpdateManyWithWhereWithoutVendorCustomersInput.schema';
import { RequestsScalarWhereInputObjectSchema as RequestsScalarWhereInputObjectSchema } from './RequestsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RequestsCreateWithoutVendorCustomersInputObjectSchema), z.lazy(() => RequestsCreateWithoutVendorCustomersInputObjectSchema).array(), z.lazy(() => RequestsUncheckedCreateWithoutVendorCustomersInputObjectSchema), z.lazy(() => RequestsUncheckedCreateWithoutVendorCustomersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RequestsCreateOrConnectWithoutVendorCustomersInputObjectSchema), z.lazy(() => RequestsCreateOrConnectWithoutVendorCustomersInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => RequestsUpsertWithWhereUniqueWithoutVendorCustomersInputObjectSchema), z.lazy(() => RequestsUpsertWithWhereUniqueWithoutVendorCustomersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RequestsCreateManyVendorCustomersInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => RequestsWhereUniqueInputObjectSchema), z.lazy(() => RequestsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => RequestsWhereUniqueInputObjectSchema), z.lazy(() => RequestsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => RequestsWhereUniqueInputObjectSchema), z.lazy(() => RequestsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => RequestsWhereUniqueInputObjectSchema), z.lazy(() => RequestsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => RequestsUpdateWithWhereUniqueWithoutVendorCustomersInputObjectSchema), z.lazy(() => RequestsUpdateWithWhereUniqueWithoutVendorCustomersInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => RequestsUpdateManyWithWhereWithoutVendorCustomersInputObjectSchema), z.lazy(() => RequestsUpdateManyWithWhereWithoutVendorCustomersInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => RequestsScalarWhereInputObjectSchema), z.lazy(() => RequestsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const RequestsUncheckedUpdateManyWithoutVendorCustomersNestedInputObjectSchema: z.ZodType<Prisma.RequestsUncheckedUpdateManyWithoutVendorCustomersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestsUncheckedUpdateManyWithoutVendorCustomersNestedInput>;
export const RequestsUncheckedUpdateManyWithoutVendorCustomersNestedInputObjectZodSchema = makeSchema();
