import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCountOutputTypeCountVendorcustomersArgsObjectSchema as UserCountOutputTypeCountVendorcustomersArgsObjectSchema } from './UserCountOutputTypeCountVendorcustomersArgs.schema'

const makeSchema = () => z.object({
  vendorcustomers: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountVendorcustomersArgsObjectSchema)]).optional()
}).strict();
export const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectZodSchema = makeSchema();
