import * as z from 'zod';
import { UserCountOutputTypeCountVendorcustomersArgsObjectSchema as UserCountOutputTypeCountVendorcustomersArgsObjectSchema } from './UserCountOutputTypeCountVendorcustomersArgs.schema';
const makeSchema = () => z.object({
    vendorcustomers: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountVendorcustomersArgsObjectSchema)]).optional()
}).strict();
export const UserCountOutputTypeSelectObjectSchema = makeSchema();
export const UserCountOutputTypeSelectObjectZodSchema = makeSchema();
