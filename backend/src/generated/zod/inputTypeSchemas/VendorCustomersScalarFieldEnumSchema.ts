import { z } from 'zod';

export const VendorCustomersScalarFieldEnumSchema = z.enum(['id','vendorId','customerId','customerPhone','createdAt','updatedAt']);

export default VendorCustomersScalarFieldEnumSchema;
