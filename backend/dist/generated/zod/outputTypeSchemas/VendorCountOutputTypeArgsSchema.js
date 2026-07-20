import { z } from 'zod';
import { VendorCountOutputTypeSelectSchema } from './VendorCountOutputTypeSelectSchema';
export const VendorCountOutputTypeArgsSchema = z.object({
    select: z.lazy(() => VendorCountOutputTypeSelectSchema).nullish(),
}).strict();
export default VendorCountOutputTypeSelectSchema;
