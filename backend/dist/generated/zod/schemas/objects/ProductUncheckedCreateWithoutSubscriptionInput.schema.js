import * as z from 'zod';
import { RequestsUncheckedCreateNestedManyWithoutProductInputObjectSchema as RequestsUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './RequestsUncheckedCreateNestedManyWithoutProductInput.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    vendorId: z.string(),
    productName: z.string(),
    description: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    request: z.lazy(() => RequestsUncheckedCreateNestedManyWithoutProductInputObjectSchema).optional()
}).strict();
export const ProductUncheckedCreateWithoutSubscriptionInputObjectSchema = makeSchema();
export const ProductUncheckedCreateWithoutSubscriptionInputObjectZodSchema = makeSchema();
