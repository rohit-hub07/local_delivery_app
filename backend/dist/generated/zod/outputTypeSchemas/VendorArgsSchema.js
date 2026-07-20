import { z } from 'zod';
import { VendorSelectSchema } from '../inputTypeSchemas/VendorSelectSchema';
import { VendorIncludeSchema } from '../inputTypeSchemas/VendorIncludeSchema';
export const VendorArgsSchema = z.object({
    select: z.lazy(() => VendorSelectSchema).optional(),
    include: z.lazy(() => VendorIncludeSchema).optional(),
}).strict();
export default VendorArgsSchema;
