import { z } from 'zod';
import { VendorCustomersCreateManyInputSchema } from '../inputTypeSchemas/VendorCustomersCreateManyInputSchema';
export const VendorCustomersCreateManyAndReturnArgsSchema = z.object({
    data: z.union([VendorCustomersCreateManyInputSchema, VendorCustomersCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default VendorCustomersCreateManyAndReturnArgsSchema;
