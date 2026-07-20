import { z } from 'zod';
import { CustomerSubscriptionVendorCustomerIdProductIdCompoundUniqueInputSchema } from './CustomerSubscriptionVendorCustomerIdProductIdCompoundUniqueInputSchema';
import { CustomerSubscriptionWhereInputSchema } from './CustomerSubscriptionWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { VendorCustomersScalarRelationFilterSchema } from './VendorCustomersScalarRelationFilterSchema';
import { VendorCustomersWhereInputSchema } from './VendorCustomersWhereInputSchema';
import { ProductScalarRelationFilterSchema } from './ProductScalarRelationFilterSchema';
import { ProductWhereInputSchema } from './ProductWhereInputSchema';
export const CustomerSubscriptionWhereUniqueInputSchema = z.union([
    z.object({
        id: z.uuid(),
        vendorCustomerId_productId: z.lazy(() => CustomerSubscriptionVendorCustomerIdProductIdCompoundUniqueInputSchema),
    }),
    z.object({
        id: z.uuid(),
    }),
    z.object({
        vendorCustomerId_productId: z.lazy(() => CustomerSubscriptionVendorCustomerIdProductIdCompoundUniqueInputSchema),
    }),
])
    .and(z.strictObject({
    id: z.uuid().optional(),
    vendorCustomerId_productId: z.lazy(() => CustomerSubscriptionVendorCustomerIdProductIdCompoundUniqueInputSchema).optional(),
    AND: z.union([z.lazy(() => CustomerSubscriptionWhereInputSchema), z.lazy(() => CustomerSubscriptionWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => CustomerSubscriptionWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => CustomerSubscriptionWhereInputSchema), z.lazy(() => CustomerSubscriptionWhereInputSchema).array()]).optional(),
    vendorCustomerId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    productId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    vendorCustomers: z.union([z.lazy(() => VendorCustomersScalarRelationFilterSchema), z.lazy(() => VendorCustomersWhereInputSchema)]).optional(),
    product: z.union([z.lazy(() => ProductScalarRelationFilterSchema), z.lazy(() => ProductWhereInputSchema)]).optional(),
}));
export default CustomerSubscriptionWhereUniqueInputSchema;
