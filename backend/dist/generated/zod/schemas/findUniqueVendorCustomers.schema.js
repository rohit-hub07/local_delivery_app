import * as z from 'zod';
import { VendorCustomersSelectObjectSchema as VendorCustomersSelectObjectSchema } from './objects/VendorCustomersSelect.schema';
import { VendorCustomersIncludeObjectSchema as VendorCustomersIncludeObjectSchema } from './objects/VendorCustomersInclude.schema';
import { VendorCustomersWhereUniqueInputObjectSchema as VendorCustomersWhereUniqueInputObjectSchema } from './objects/VendorCustomersWhereUniqueInput.schema';
export const VendorCustomersFindUniqueSchema = z.object({ select: VendorCustomersSelectObjectSchema.optional(), include: VendorCustomersIncludeObjectSchema.optional(), where: VendorCustomersWhereUniqueInputObjectSchema }).strict();
export const VendorCustomersFindUniqueZodSchema = z.object({ select: VendorCustomersSelectObjectSchema.optional(), include: VendorCustomersIncludeObjectSchema.optional(), where: VendorCustomersWhereUniqueInputObjectSchema }).strict();
