import * as z from 'zod';
import { VendorWhereInputObjectSchema as VendorWhereInputObjectSchema } from './VendorWhereInput.schema';
const makeSchema = () => z.object({
    is: z.lazy(() => VendorWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => VendorWhereInputObjectSchema).optional()
}).strict();
export const VendorScalarRelationFilterObjectSchema = makeSchema();
export const VendorScalarRelationFilterObjectZodSchema = makeSchema();
