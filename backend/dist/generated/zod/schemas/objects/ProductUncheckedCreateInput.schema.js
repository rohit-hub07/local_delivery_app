import * as z from 'zod';
import { CustomerSubscriptionUncheckedCreateNestedManyWithoutProductInputObjectSchema as CustomerSubscriptionUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './CustomerSubscriptionUncheckedCreateNestedManyWithoutProductInput.schema';
import { RequestsUncheckedCreateNestedManyWithoutProductInputObjectSchema as RequestsUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './RequestsUncheckedCreateNestedManyWithoutProductInput.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    vendorId: z.string(),
    productName: z.string(),
    description: z.string(),
    createdAt: z.coerce.date().optional(),
    subscription: z.lazy(() => CustomerSubscriptionUncheckedCreateNestedManyWithoutProductInputObjectSchema).optional(),
    request: z.lazy(() => RequestsUncheckedCreateNestedManyWithoutProductInputObjectSchema).optional()
}).strict();
export const ProductUncheckedCreateInputObjectSchema = makeSchema();
export const ProductUncheckedCreateInputObjectZodSchema = makeSchema();
