import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RequestsWhereUniqueInputObjectSchema as RequestsWhereUniqueInputObjectSchema } from './RequestsWhereUniqueInput.schema';
import { RequestsCreateWithoutProductInputObjectSchema as RequestsCreateWithoutProductInputObjectSchema } from './RequestsCreateWithoutProductInput.schema';
import { RequestsUncheckedCreateWithoutProductInputObjectSchema as RequestsUncheckedCreateWithoutProductInputObjectSchema } from './RequestsUncheckedCreateWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RequestsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RequestsCreateWithoutProductInputObjectSchema), z.lazy(() => RequestsUncheckedCreateWithoutProductInputObjectSchema)])
}).strict();
export const RequestsCreateOrConnectWithoutProductInputObjectSchema: z.ZodType<Prisma.RequestsCreateOrConnectWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestsCreateOrConnectWithoutProductInput>;
export const RequestsCreateOrConnectWithoutProductInputObjectZodSchema = makeSchema();
