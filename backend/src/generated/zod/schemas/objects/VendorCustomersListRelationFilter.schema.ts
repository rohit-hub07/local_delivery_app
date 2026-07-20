import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VendorCustomersWhereInputObjectSchema as VendorCustomersWhereInputObjectSchema } from './VendorCustomersWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => VendorCustomersWhereInputObjectSchema).optional(),
  some: z.lazy(() => VendorCustomersWhereInputObjectSchema).optional(),
  none: z.lazy(() => VendorCustomersWhereInputObjectSchema).optional()
}).strict();
export const VendorCustomersListRelationFilterObjectSchema: z.ZodType<Prisma.VendorCustomersListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.VendorCustomersListRelationFilter>;
export const VendorCustomersListRelationFilterObjectZodSchema = makeSchema();
