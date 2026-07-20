import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { VendorCustomersCountOrderByAggregateInputObjectSchema as VendorCustomersCountOrderByAggregateInputObjectSchema } from './VendorCustomersCountOrderByAggregateInput.schema';
import { VendorCustomersMaxOrderByAggregateInputObjectSchema as VendorCustomersMaxOrderByAggregateInputObjectSchema } from './VendorCustomersMaxOrderByAggregateInput.schema';
import { VendorCustomersMinOrderByAggregateInputObjectSchema as VendorCustomersMinOrderByAggregateInputObjectSchema } from './VendorCustomersMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  vendorId: SortOrderSchema.optional(),
  customerId: SortOrderSchema.optional(),
  customerPhone: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => VendorCustomersCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => VendorCustomersMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => VendorCustomersMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const VendorCustomersOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.VendorCustomersOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorCustomersOrderByWithAggregationInput>;
export const VendorCustomersOrderByWithAggregationInputObjectZodSchema = makeSchema();
