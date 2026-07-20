import { z } from 'zod';
import { VendorCustomersWhereInputSchema } from '../inputTypeSchemas/VendorCustomersWhereInputSchema';
export const VendorCustomersDeleteManyArgsSchema = z.object({
    where: VendorCustomersWhereInputSchema.optional(),
    limit: z.number().optional(),
}).strict();
export default VendorCustomersDeleteManyArgsSchema;
