import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VendorCustomersVendorIdCustomerIdCompoundUniqueInputObjectSchema as VendorCustomersVendorIdCustomerIdCompoundUniqueInputObjectSchema } from './VendorCustomersVendorIdCustomerIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  vendorId_customerId: z.lazy(() => VendorCustomersVendorIdCustomerIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const VendorCustomersWhereUniqueInputObjectSchema: z.ZodType<Prisma.VendorCustomersWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorCustomersWhereUniqueInput>;
export const VendorCustomersWhereUniqueInputObjectZodSchema = makeSchema();
