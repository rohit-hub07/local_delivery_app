import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RequestsCreateWithoutProductInputObjectSchema as RequestsCreateWithoutProductInputObjectSchema } from './RequestsCreateWithoutProductInput.schema';
import { RequestsUncheckedCreateWithoutProductInputObjectSchema as RequestsUncheckedCreateWithoutProductInputObjectSchema } from './RequestsUncheckedCreateWithoutProductInput.schema';
import { RequestsCreateOrConnectWithoutProductInputObjectSchema as RequestsCreateOrConnectWithoutProductInputObjectSchema } from './RequestsCreateOrConnectWithoutProductInput.schema';
import { RequestsUpsertWithWhereUniqueWithoutProductInputObjectSchema as RequestsUpsertWithWhereUniqueWithoutProductInputObjectSchema } from './RequestsUpsertWithWhereUniqueWithoutProductInput.schema';
import { RequestsCreateManyProductInputEnvelopeObjectSchema as RequestsCreateManyProductInputEnvelopeObjectSchema } from './RequestsCreateManyProductInputEnvelope.schema';
import { RequestsWhereUniqueInputObjectSchema as RequestsWhereUniqueInputObjectSchema } from './RequestsWhereUniqueInput.schema';
import { RequestsUpdateWithWhereUniqueWithoutProductInputObjectSchema as RequestsUpdateWithWhereUniqueWithoutProductInputObjectSchema } from './RequestsUpdateWithWhereUniqueWithoutProductInput.schema';
import { RequestsUpdateManyWithWhereWithoutProductInputObjectSchema as RequestsUpdateManyWithWhereWithoutProductInputObjectSchema } from './RequestsUpdateManyWithWhereWithoutProductInput.schema';
import { RequestsScalarWhereInputObjectSchema as RequestsScalarWhereInputObjectSchema } from './RequestsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RequestsCreateWithoutProductInputObjectSchema), z.lazy(() => RequestsCreateWithoutProductInputObjectSchema).array(), z.lazy(() => RequestsUncheckedCreateWithoutProductInputObjectSchema), z.lazy(() => RequestsUncheckedCreateWithoutProductInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RequestsCreateOrConnectWithoutProductInputObjectSchema), z.lazy(() => RequestsCreateOrConnectWithoutProductInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => RequestsUpsertWithWhereUniqueWithoutProductInputObjectSchema), z.lazy(() => RequestsUpsertWithWhereUniqueWithoutProductInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RequestsCreateManyProductInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => RequestsWhereUniqueInputObjectSchema), z.lazy(() => RequestsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => RequestsWhereUniqueInputObjectSchema), z.lazy(() => RequestsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => RequestsWhereUniqueInputObjectSchema), z.lazy(() => RequestsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => RequestsWhereUniqueInputObjectSchema), z.lazy(() => RequestsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => RequestsUpdateWithWhereUniqueWithoutProductInputObjectSchema), z.lazy(() => RequestsUpdateWithWhereUniqueWithoutProductInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => RequestsUpdateManyWithWhereWithoutProductInputObjectSchema), z.lazy(() => RequestsUpdateManyWithWhereWithoutProductInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => RequestsScalarWhereInputObjectSchema), z.lazy(() => RequestsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const RequestsUpdateManyWithoutProductNestedInputObjectSchema: z.ZodType<Prisma.RequestsUpdateManyWithoutProductNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestsUpdateManyWithoutProductNestedInput>;
export const RequestsUpdateManyWithoutProductNestedInputObjectZodSchema = makeSchema();
