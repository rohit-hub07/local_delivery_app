import { z } from 'zod';

export const RequestsScalarFieldEnumSchema = z.enum(['id','vendorCustomerId','productId','type','message','start_date','end_date','status','respondedAt','createdAt','updatedAt']);

export default RequestsScalarFieldEnumSchema;
