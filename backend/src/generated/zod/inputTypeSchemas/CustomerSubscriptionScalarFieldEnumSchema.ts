import { z } from 'zod';

export const CustomerSubscriptionScalarFieldEnumSchema = z.enum(['id','vendorCustomerId','productId','createdAt','updatedAt']);

export default CustomerSubscriptionScalarFieldEnumSchema;
