import { z } from 'zod';
export const VendorCountOutputTypeSelectSchema = z.object({
    product: z.boolean().optional(),
    vendorcustomers: z.boolean().optional(),
}).strict();
export default VendorCountOutputTypeSelectSchema;
