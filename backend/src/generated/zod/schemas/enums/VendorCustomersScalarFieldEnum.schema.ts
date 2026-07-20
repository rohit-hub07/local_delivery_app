import * as z from 'zod';

export const VendorCustomersScalarFieldEnumSchema = z.enum(['id', 'vendorId', 'customerId', 'customerPhone', 'createdAt', 'updatedAt'])

export type VendorCustomersScalarFieldEnum = z.infer<typeof VendorCustomersScalarFieldEnumSchema>;