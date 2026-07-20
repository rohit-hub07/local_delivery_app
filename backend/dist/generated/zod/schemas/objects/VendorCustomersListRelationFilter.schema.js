import * as z from 'zod';
import { VendorCustomersWhereInputObjectSchema as VendorCustomersWhereInputObjectSchema } from './VendorCustomersWhereInput.schema';
const makeSchema = () => z.object({
    every: z.lazy(() => VendorCustomersWhereInputObjectSchema).optional(),
    some: z.lazy(() => VendorCustomersWhereInputObjectSchema).optional(),
    none: z.lazy(() => VendorCustomersWhereInputObjectSchema).optional()
}).strict();
export const VendorCustomersListRelationFilterObjectSchema = makeSchema();
export const VendorCustomersListRelationFilterObjectZodSchema = makeSchema();
