import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  vendorId: z.string(),
  customerId: z.string()
}).strict();
export const VendorCustomersVendorIdCustomerIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.VendorCustomersVendorIdCustomerIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorCustomersVendorIdCustomerIdCompoundUniqueInput>;
export const VendorCustomersVendorIdCustomerIdCompoundUniqueInputObjectZodSchema = makeSchema();
