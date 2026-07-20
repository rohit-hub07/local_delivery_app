import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RequestsWhereInputObjectSchema as RequestsWhereInputObjectSchema } from './RequestsWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RequestsWhereInputObjectSchema).optional()
}).strict();
export const ProductCountOutputTypeCountRequestArgsObjectSchema = makeSchema();
export const ProductCountOutputTypeCountRequestArgsObjectZodSchema = makeSchema();
