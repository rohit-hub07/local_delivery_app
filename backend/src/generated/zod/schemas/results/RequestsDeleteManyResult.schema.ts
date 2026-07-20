import * as z from 'zod';
export const RequestsDeleteManyResultSchema = z.object({
  count: z.number()
});