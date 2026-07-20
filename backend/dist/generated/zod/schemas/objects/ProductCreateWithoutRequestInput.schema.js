import * as z from 'zod';
import { VendorCreateNestedOneWithoutProductInputObjectSchema as VendorCreateNestedOneWithoutProductInputObjectSchema } from './VendorCreateNestedOneWithoutProductInput.schema';
import { CustomerSubscriptionCreateNestedManyWithoutProductInputObjectSchema as CustomerSubscriptionCreateNestedManyWithoutProductInputObjectSchema } from './CustomerSubscriptionCreateNestedManyWithoutProductInput.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    productName: z.string(),
    description: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    vendor: z.lazy(() => VendorCreateNestedOneWithoutProductInputObjectSchema),
    subscription: z.lazy(() => CustomerSubscriptionCreateNestedManyWithoutProductInputObjectSchema).optional()
}).strict();
export const ProductCreateWithoutRequestInputObjectSchema = makeSchema();
export const ProductCreateWithoutRequestInputObjectZodSchema = makeSchema();
