import { z } from 'zod';
import { VendorCustomersCreateManyInputSchema } from '../inputTypeSchemas/VendorCustomersCreateManyInputSchema';
export const VendorCustomersCreateManyArgsSchema = z.object({
    data: z.union([VendorCustomersCreateManyInputSchema, VendorCustomersCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default VendorCustomersCreateManyArgsSchema;
