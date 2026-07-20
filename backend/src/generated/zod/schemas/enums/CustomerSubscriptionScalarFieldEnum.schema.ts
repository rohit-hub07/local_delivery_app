import * as z from 'zod';

export const CustomerSubscriptionScalarFieldEnumSchema = z.enum(['id', 'vendorCustomerId', 'productId', 'createdAt', 'updatedAt'])

export type CustomerSubscriptionScalarFieldEnum = z.infer<typeof CustomerSubscriptionScalarFieldEnumSchema>;