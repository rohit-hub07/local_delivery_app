import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RequestsCreateManyProductInputObjectSchema as RequestsCreateManyProductInputObjectSchema } from './RequestsCreateManyProductInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => RequestsCreateManyProductInputObjectSchema), z.lazy(() => RequestsCreateManyProductInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const RequestsCreateManyProductInputEnvelopeObjectSchema: z.ZodType<Prisma.RequestsCreateManyProductInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.RequestsCreateManyProductInputEnvelope>;
export const RequestsCreateManyProductInputEnvelopeObjectZodSchema = makeSchema();
