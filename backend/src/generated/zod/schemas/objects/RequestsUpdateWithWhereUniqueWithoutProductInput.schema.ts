import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RequestsWhereUniqueInputObjectSchema as RequestsWhereUniqueInputObjectSchema } from './RequestsWhereUniqueInput.schema';
import { RequestsUpdateWithoutProductInputObjectSchema as RequestsUpdateWithoutProductInputObjectSchema } from './RequestsUpdateWithoutProductInput.schema';
import { RequestsUncheckedUpdateWithoutProductInputObjectSchema as RequestsUncheckedUpdateWithoutProductInputObjectSchema } from './RequestsUncheckedUpdateWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RequestsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => RequestsUpdateWithoutProductInputObjectSchema), z.lazy(() => RequestsUncheckedUpdateWithoutProductInputObjectSchema)])
}).strict();
export const RequestsUpdateWithWhereUniqueWithoutProductInputObjectSchema: z.ZodType<Prisma.RequestsUpdateWithWhereUniqueWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestsUpdateWithWhereUniqueWithoutProductInput>;
export const RequestsUpdateWithWhereUniqueWithoutProductInputObjectZodSchema = makeSchema();
