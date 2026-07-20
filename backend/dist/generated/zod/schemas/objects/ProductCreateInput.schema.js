import * as z from 'zod';
import { VendorCreateNestedOneWithoutProductInputObjectSchema as VendorCreateNestedOneWithoutProductInputObjectSchema } from './VendorCreateNestedOneWithoutProductInput.schema';
import { CustomerSubscriptionCreateNestedManyWithoutProductInputObjectSchema as CustomerSubscriptionCreateNestedManyWithoutProductInputObjectSchema } from './CustomerSubscriptionCreateNestedManyWithoutProductInput.schema';
import { RequestsCreateNestedManyWithoutProductInputObjectSchema as RequestsCreateNestedManyWithoutProductInputObjectSchema } from './RequestsCreateNestedManyWithoutProductInput.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    productName: z.string(),
    description: z.string(),
    createdAt: z.coerce.date().optional(),
    vendor: z.lazy(() => VendorCreateNestedOneWithoutProductInputObjectSchema),
    subscription: z.lazy(() => CustomerSubscriptionCreateNestedManyWithoutProductInputObjectSchema).optional(),
    request: z.lazy(() => RequestsCreateNestedManyWithoutProductInputObjectSchema).optional()
}).strict();
export const ProductCreateInputObjectSchema = makeSchema();
export const ProductCreateInputObjectZodSchema = makeSchema();
