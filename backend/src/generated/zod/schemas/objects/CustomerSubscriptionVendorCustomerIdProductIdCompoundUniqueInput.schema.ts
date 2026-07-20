import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  vendorCustomerId: z.string(),
  productId: z.string()
}).strict();
export const CustomerSubscriptionVendorCustomerIdProductIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.CustomerSubscriptionVendorCustomerIdProductIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerSubscriptionVendorCustomerIdProductIdCompoundUniqueInput>;
export const CustomerSubscriptionVendorCustomerIdProductIdCompoundUniqueInputObjectZodSchema = makeSchema();
