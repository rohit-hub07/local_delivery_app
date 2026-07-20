import { z } from 'zod';

export const RoleSchema = z.enum(['CUSTOMER','VENDOR']);

export type RoleType = `${z.infer<typeof RoleSchema>}`

export default RoleSchema;
