import * as z from 'zod';
import { VendorCustomersWhereInputObjectSchema as VendorCustomersWhereInputObjectSchema } from './VendorCustomersWhereInput.schema';
const makeSchema = () => z.object({
    is: z.lazy(() => VendorCustomersWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => VendorCustomersWhereInputObjectSchema).optional()
}).strict();
export const VendorCustomersScalarRelationFilterObjectSchema = makeSchema();
export const VendorCustomersScalarRelationFilterObjectZodSchema = makeSchema();
