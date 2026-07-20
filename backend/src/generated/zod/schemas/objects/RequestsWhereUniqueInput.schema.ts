import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const RequestsWhereUniqueInputObjectSchema: z.ZodType<Prisma.RequestsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestsWhereUniqueInput>;
export const RequestsWhereUniqueInputObjectZodSchema = makeSchema();
