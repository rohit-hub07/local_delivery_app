import { z } from 'zod';
import { VendorCreateManyInputSchema } from '../inputTypeSchemas/VendorCreateManyInputSchema';
export const VendorCreateManyArgsSchema = z.object({
    data: z.union([VendorCreateManyInputSchema, VendorCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default VendorCreateManyArgsSchema;
