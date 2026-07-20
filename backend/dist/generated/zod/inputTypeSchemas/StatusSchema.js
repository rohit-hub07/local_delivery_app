import { z } from 'zod';
export const StatusSchema = z.enum(['PENDING', 'ACCEPTED', 'REJECTED']);
export default StatusSchema;
