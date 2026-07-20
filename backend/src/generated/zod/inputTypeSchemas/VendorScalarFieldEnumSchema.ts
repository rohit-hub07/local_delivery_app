import { z } from 'zod';

export const VendorScalarFieldEnumSchema = z.enum(['id','userId','businessName','businessPhone','createdAt','updatedAt']);

export default VendorScalarFieldEnumSchema;
