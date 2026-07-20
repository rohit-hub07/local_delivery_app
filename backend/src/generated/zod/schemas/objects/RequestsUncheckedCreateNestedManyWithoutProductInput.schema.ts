import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RequestsCreateWithoutProductInputObjectSchema as RequestsCreateWithoutProductInputObjectSchema } from './RequestsCreateWithoutProductInput.schema';
import { RequestsUncheckedCreateWithoutProductInputObjectSchema as RequestsUncheckedCreateWithoutProductInputObjectSchema } from './RequestsUncheckedCreateWithoutProductInput.schema';
import { RequestsCreateOrConnectWithoutProductInputObjectSchema as RequestsCreateOrConnectWithoutProductInputObjectSchema } from './RequestsCreateOrConnectWithoutProductInput.schema';
import { RequestsCreateManyProductInputEnvelopeObjectSchema as RequestsCreateManyProductInputEnvelopeObjectSchema } from './RequestsCreateManyProductInputEnvelope.schema';
import { RequestsWhereUniqueInputObjectSchema as RequestsWhereUniqueInputObjectSchema } from './RequestsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RequestsCreateWithoutProductInputObjectSchema), z.lazy(() => RequestsCreateWithoutProductInputObjectSchema).array(), z.lazy(() => RequestsUncheckedCreateWithoutProductInputObjectSchema), z.lazy(() => RequestsUncheckedCreateWithoutProductInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RequestsCreateOrConnectWithoutProductInputObjectSchema), z.lazy(() => RequestsCreateOrConnectWithoutProductInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RequestsCreateManyProductInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => RequestsWhereUniqueInputObjectSchema), z.lazy(() => RequestsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const RequestsUncheckedCreateNestedManyWithoutProductInputObjectSchema: z.ZodType<Prisma.RequestsUncheckedCreateNestedManyWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestsUncheckedCreateNestedManyWithoutProductInput>;
export const RequestsUncheckedCreateNestedManyWithoutProductInputObjectZodSchema = makeSchema();
