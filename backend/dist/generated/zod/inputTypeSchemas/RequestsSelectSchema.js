import { z } from 'zod';
import { VendorCustomersArgsSchema } from "../outputTypeSchemas/VendorCustomersArgsSchema";
import { ProductArgsSchema } from "../outputTypeSchemas/ProductArgsSchema";
export const RequestsSelectSchema = z.object({
    id: z.boolean().optional(),
    vendorCustomerId: z.boolean().optional(),
    productId: z.boolean().optional(),
    type: z.boolean().optional(),
    message: z.boolean().optional(),
    start_date: z.boolean().optional(),
    end_date: z.boolean().optional(),
    status: z.boolean().optional(),
    respondedAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    vendorCustomers: z.union([z.boolean(), z.lazy(() => VendorCustomersArgsSchema)]).optional(),
    product: z.union([z.boolean(), z.lazy(() => ProductArgsSchema)]).optional(),
}).strict();
export default RequestsSelectSchema;
