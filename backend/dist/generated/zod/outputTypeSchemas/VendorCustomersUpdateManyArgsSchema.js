import { z } from 'zod';
import { VendorCustomersUpdateManyMutationInputSchema } from '../inputTypeSchemas/VendorCustomersUpdateManyMutationInputSchema';
import { VendorCustomersUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/VendorCustomersUncheckedUpdateManyInputSchema';
import { VendorCustomersWhereInputSchema } from '../inputTypeSchemas/VendorCustomersWhereInputSchema';
export const VendorCustomersUpdateManyArgsSchema = z.object({
    data: z.union([VendorCustomersUpdateManyMutationInputSchema, VendorCustomersUncheckedUpdateManyInputSchema]),
    where: VendorCustomersWhereInputSchema.optional(),
    limit: z.number().optional(),
}).strict();
export default VendorCustomersUpdateManyArgsSchema;
