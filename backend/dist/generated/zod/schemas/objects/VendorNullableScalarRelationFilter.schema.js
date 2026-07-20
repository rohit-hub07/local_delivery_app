import * as z from 'zod';
import { VendorWhereInputObjectSchema as VendorWhereInputObjectSchema } from './VendorWhereInput.schema';
const makeSchema = () => z.object({
    is: z.lazy(() => VendorWhereInputObjectSchema).optional().nullable(),
    isNot: z.lazy(() => VendorWhereInputObjectSchema).optional().nullable()
}).strict();
export const VendorNullableScalarRelationFilterObjectSchema = makeSchema();
export const VendorNullableScalarRelationFilterObjectZodSchema = makeSchema();
