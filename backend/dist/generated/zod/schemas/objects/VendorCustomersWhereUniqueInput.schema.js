import * as z from 'zod';
import { VendorCustomersVendorIdCustomerIdCompoundUniqueInputObjectSchema as VendorCustomersVendorIdCustomerIdCompoundUniqueInputObjectSchema } from './VendorCustomersVendorIdCustomerIdCompoundUniqueInput.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    vendorId_customerId: z.lazy(() => VendorCustomersVendorIdCustomerIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const VendorCustomersWhereUniqueInputObjectSchema = makeSchema();
export const VendorCustomersWhereUniqueInputObjectZodSchema = makeSchema();
