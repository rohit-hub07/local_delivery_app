import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { VendorCustomersVendorIdCustomerIdCompoundUniqueInputSchema } from './VendorCustomersVendorIdCustomerIdCompoundUniqueInputSchema';
import { VendorCustomersWhereInputSchema } from './VendorCustomersWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { VendorScalarRelationFilterSchema } from './VendorScalarRelationFilterSchema';
import { VendorWhereInputSchema } from './VendorWhereInputSchema';
import { UserScalarRelationFilterSchema } from './UserScalarRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { CustomerSubscriptionListRelationFilterSchema } from './CustomerSubscriptionListRelationFilterSchema';
import { RequestsListRelationFilterSchema } from './RequestsListRelationFilterSchema';

export const VendorCustomersWhereUniqueInputSchema: z.ZodType<Prisma.VendorCustomersWhereUniqueInput> = z.union([
  z.object({
    id: z.uuid(),
    vendorId_customerId: z.lazy(() => VendorCustomersVendorIdCustomerIdCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.uuid(),
  }),
  z.object({
    vendorId_customerId: z.lazy(() => VendorCustomersVendorIdCustomerIdCompoundUniqueInputSchema),
  }),
])
.and(z.strictObject({
  id: z.uuid().optional(),
  vendorId_customerId: z.lazy(() => VendorCustomersVendorIdCustomerIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => VendorCustomersWhereInputSchema), z.lazy(() => VendorCustomersWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VendorCustomersWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VendorCustomersWhereInputSchema), z.lazy(() => VendorCustomersWhereInputSchema).array() ]).optional(),
  vendorId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  customerId: z.union([ z.lazy(() => StringFilterSchema), z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format" }) ]).optional(),
  customerPhone: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  vendor: z.union([ z.lazy(() => VendorScalarRelationFilterSchema), z.lazy(() => VendorWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema), z.lazy(() => UserWhereInputSchema) ]).optional(),
  subscription: z.lazy(() => CustomerSubscriptionListRelationFilterSchema).optional(),
  request: z.lazy(() => RequestsListRelationFilterSchema).optional(),
}));

export default VendorCustomersWhereUniqueInputSchema;
