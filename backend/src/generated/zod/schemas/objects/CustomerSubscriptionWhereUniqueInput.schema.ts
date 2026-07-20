import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CustomerSubscriptionVendorCustomerIdProductIdCompoundUniqueInputObjectSchema as CustomerSubscriptionVendorCustomerIdProductIdCompoundUniqueInputObjectSchema } from './CustomerSubscriptionVendorCustomerIdProductIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  vendorCustomerId_productId: z.lazy(() => CustomerSubscriptionVendorCustomerIdProductIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const CustomerSubscriptionWhereUniqueInputObjectSchema: z.ZodType<Prisma.CustomerSubscriptionWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerSubscriptionWhereUniqueInput>;
export const CustomerSubscriptionWhereUniqueInputObjectZodSchema = makeSchema();
