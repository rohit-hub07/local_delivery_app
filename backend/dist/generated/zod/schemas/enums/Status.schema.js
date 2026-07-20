import * as z from 'zod';
export const StatusSchema = z.enum(['PENDING', 'ACCEPTED', 'REJECTED']);
