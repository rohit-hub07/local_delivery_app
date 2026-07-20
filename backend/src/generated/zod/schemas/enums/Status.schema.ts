import * as z from 'zod';

export const StatusSchema = z.enum(['PENDING', 'ACCEPTED', 'REJECTED'])

export type Status = z.infer<typeof StatusSchema>;