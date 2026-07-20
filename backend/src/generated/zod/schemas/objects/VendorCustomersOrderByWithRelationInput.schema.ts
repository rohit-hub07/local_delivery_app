import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { VendorOrderByWithRelationInputObjectSchema as VendorOrderByWithRelationInputObjectSchema } from './VendorOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { CustomerSubscriptionOrderByRelationAggregateInputObjectSchema as CustomerSubscriptionOrderByRelationAggregateInputObjectSchema } from './CustomerSubscriptionOrderByRelationAggregateInput.schema';
import { RequestsOrderByRelationAggregateInputObjectSchema as RequestsOrderByRelationAggregateInputObjectSchema } from './RequestsOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  vendorId: SortOrderSchema.optional(),
  customerId: SortOrderSchema.optional(),
  customerPhone: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  vendor: z.lazy(() => VendorOrderByWithRelationInputObjectSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  subscription: z.lazy(() => CustomerSubscriptionOrderByRelationAggregateInputObjectSchema).optional(),
  request: z.lazy(() => RequestsOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const VendorCustomersOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.VendorCustomersOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorCustomersOrderByWithRelationInput>;
export const VendorCustomersOrderByWithRelationInputObjectZodSchema = makeSchema();
