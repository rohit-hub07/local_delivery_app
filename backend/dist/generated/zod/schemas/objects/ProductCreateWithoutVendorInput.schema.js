import * as z from 'zod';
import { CustomerSubscriptionCreateNestedManyWithoutProductInputObjectSchema as CustomerSubscriptionCreateNestedManyWithoutProductInputObjectSchema } from './CustomerSubscriptionCreateNestedManyWithoutProductInput.schema';
import { RequestsCreateNestedManyWithoutProductInputObjectSchema as RequestsCreateNestedManyWithoutProductInputObjectSchema } from './RequestsCreateNestedManyWithoutProductInput.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    productName: z.string(),
    description: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    subscription: z.lazy(() => CustomerSubscriptionCreateNestedManyWithoutProductInputObjectSchema).optional(),
    request: z.lazy(() => RequestsCreateNestedManyWithoutProductInputObjectSchema).optional()
}).strict();
export const ProductCreateWithoutVendorInputObjectSchema = makeSchema();
export const ProductCreateWithoutVendorInputObjectZodSchema = makeSchema();
