import * as z from 'zod';
import { StatusSchema } from '../../enums/Status.schema';
// prettier-ignore
export const RequestsResultSchema = z.object({
    id: z.string(),
    vendorCustomerId: z.string(),
    productId: z.string(),
    type: z.string(),
    message: z.string(),
    start_date: z.date(),
    end_date: z.date(),
    status: StatusSchema,
    respondedAt: z.date().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    vendorCustomers: z.unknown(),
    product: z.unknown()
}).strict();
