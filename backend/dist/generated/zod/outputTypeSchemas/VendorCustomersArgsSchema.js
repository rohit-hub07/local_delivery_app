import { z } from 'zod';
import { VendorCustomersSelectSchema } from '../inputTypeSchemas/VendorCustomersSelectSchema';
import { VendorCustomersIncludeSchema } from '../inputTypeSchemas/VendorCustomersIncludeSchema';
export const VendorCustomersArgsSchema = z.object({
    select: z.lazy(() => VendorCustomersSelectSchema).optional(),
    include: z.lazy(() => VendorCustomersIncludeSchema).optional(),
}).strict();
export default VendorCustomersArgsSchema;
