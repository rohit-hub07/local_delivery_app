import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VendorCustomersWhereInputObjectSchema as VendorCustomersWhereInputObjectSchema } from './VendorCustomersWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VendorCustomersWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountVendorcustomersArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountVendorcustomersArgsObjectZodSchema = makeSchema();
