import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { StatusSchema } from './StatusSchema';
import { ProductCreateNestedOneWithoutRequestInputSchema } from './ProductCreateNestedOneWithoutRequestInputSchema';

export const RequestsCreateWithoutVendorCustomersInputSchema: z.ZodType<Prisma.RequestsCreateWithoutVendorCustomersInput> = z.strictObject({
  id: z.uuid().optional(),
  type: z.string().optional(),
  message: z.string().min(2,{message: "Message should be at least 2 of 2 characters"}),
  start_date: z.coerce.date(),
  end_date: z.coerce.date(),
  status: z.lazy(() => StatusSchema).optional(),
  respondedAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  product: z.lazy(() => ProductCreateNestedOneWithoutRequestInputSchema),
});

export default RequestsCreateWithoutVendorCustomersInputSchema;
