import { z } from 'zod';
import { StatusSchema } from '../inputTypeSchemas/StatusSchema'

/////////////////////////////////////////
// REQUESTS SCHEMA
/////////////////////////////////////////

export const RequestsSchema = z.object({
  status: StatusSchema,
  id: z.uuid(),
  vendorCustomerId: z.string(),
  productId: z.string(),
  type: z.string(),
  message: z.string().min(2,{message: "Message should be at least 2 of 2 characters"}),
  start_date: z.coerce.date(),
  end_date: z.coerce.date(),
  respondedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Requests = z.infer<typeof RequestsSchema>

export default RequestsSchema;
