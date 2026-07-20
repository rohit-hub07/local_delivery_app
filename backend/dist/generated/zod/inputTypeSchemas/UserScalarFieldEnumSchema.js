import { z } from 'zod';
export const UserScalarFieldEnumSchema = z.enum(['id', 'name', 'phone', 'address', 'role', 'createdAt', 'updatedAt']);
export default UserScalarFieldEnumSchema;
