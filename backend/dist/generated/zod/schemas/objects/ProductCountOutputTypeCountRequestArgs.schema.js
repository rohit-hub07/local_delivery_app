import * as z from 'zod';
import { RequestsWhereInputObjectSchema as RequestsWhereInputObjectSchema } from './RequestsWhereInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => RequestsWhereInputObjectSchema).optional()
}).strict();
export const ProductCountOutputTypeCountRequestArgsObjectSchema = makeSchema();
export const ProductCountOutputTypeCountRequestArgsObjectZodSchema = makeSchema();
