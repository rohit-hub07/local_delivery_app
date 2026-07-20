import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VendorCustomersWhereInputObjectSchema as VendorCustomersWhereInputObjectSchema } from './VendorCustomersWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => VendorCustomersWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => VendorCustomersWhereInputObjectSchema).optional()
}).strict();
export const VendorCustomersScalarRelationFilterObjectSchema: z.ZodType<Prisma.VendorCustomersScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.VendorCustomersScalarRelationFilter>;
export const VendorCustomersScalarRelationFilterObjectZodSchema = makeSchema();
