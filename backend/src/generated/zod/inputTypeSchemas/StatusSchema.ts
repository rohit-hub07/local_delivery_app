import { z } from 'zod';

export const StatusSchema = z.enum(['PENDING','ACCEPTED','REJECTED']);

export type StatusType = `${z.infer<typeof StatusSchema>}`

export default StatusSchema;
