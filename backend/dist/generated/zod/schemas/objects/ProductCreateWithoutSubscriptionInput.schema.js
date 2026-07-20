import * as z from 'zod';
import { VendorCreateNestedOneWithoutProductInputObjectSchema as VendorCreateNestedOneWithoutProductInputObjectSchema } from './VendorCreateNestedOneWithoutProductInput.schema';
import { RequestsCreateNestedManyWithoutProductInputObjectSchema as RequestsCreateNestedManyWithoutProductInputObjectSchema } from './RequestsCreateNestedManyWithoutProductInput.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    productName: z.string(),
    description: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    vendor: z.lazy(() => VendorCreateNestedOneWithoutProductInputObjectSchema),
    request: z.lazy(() => RequestsCreateNestedManyWithoutProductInputObjectSchema).optional()
}).strict();
export const ProductCreateWithoutSubscriptionInputObjectSchema = makeSchema();
export const ProductCreateWithoutSubscriptionInputObjectZodSchema = makeSchema();
