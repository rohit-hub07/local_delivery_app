import * as z from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'name', 'phone', 'address', 'role', 'createdAt', 'updatedAt'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;