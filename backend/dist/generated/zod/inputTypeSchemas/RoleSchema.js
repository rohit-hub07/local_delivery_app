import { z } from 'zod';
export const RoleSchema = z.enum(['CUSTOMER', 'VENDOR']);
export default RoleSchema;
