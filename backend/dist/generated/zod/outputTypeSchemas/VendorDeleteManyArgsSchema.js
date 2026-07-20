import { z } from 'zod';
import { VendorWhereInputSchema } from '../inputTypeSchemas/VendorWhereInputSchema';
export const VendorDeleteManyArgsSchema = z.object({
    where: VendorWhereInputSchema.optional(),
    limit: z.number().optional(),
}).strict();
export default VendorDeleteManyArgsSchema;
