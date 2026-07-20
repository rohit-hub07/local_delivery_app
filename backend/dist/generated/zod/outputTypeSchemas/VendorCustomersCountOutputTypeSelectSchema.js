import { z } from 'zod';
export const VendorCustomersCountOutputTypeSelectSchema = z.object({
    subscription: z.boolean().optional(),
    request: z.boolean().optional(),
}).strict();
export default VendorCustomersCountOutputTypeSelectSchema;
