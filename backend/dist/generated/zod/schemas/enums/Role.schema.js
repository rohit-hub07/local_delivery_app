import * as z from 'zod';
export const RoleSchema = z.enum(['CUSTOMER', 'VENDOR']);
