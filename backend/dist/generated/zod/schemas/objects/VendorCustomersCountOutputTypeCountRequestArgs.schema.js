import * as z from 'zod';
import { RequestsWhereInputObjectSchema as RequestsWhereInputObjectSchema } from './RequestsWhereInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => RequestsWhereInputObjectSchema).optional()
}).strict();
export const VendorCustomersCountOutputTypeCountRequestArgsObjectSchema = makeSchema();
export const VendorCustomersCountOutputTypeCountRequestArgsObjectZodSchema = makeSchema();
