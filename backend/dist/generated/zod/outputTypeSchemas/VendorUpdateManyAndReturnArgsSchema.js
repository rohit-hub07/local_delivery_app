import { z } from 'zod';
import { VendorUpdateManyMutationInputSchema } from '../inputTypeSchemas/VendorUpdateManyMutationInputSchema';
import { VendorUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/VendorUncheckedUpdateManyInputSchema';
import { VendorWhereInputSchema } from '../inputTypeSchemas/VendorWhereInputSchema';
export const VendorUpdateManyAndReturnArgsSchema = z.object({
    data: z.union([VendorUpdateManyMutationInputSchema, VendorUncheckedUpdateManyInputSchema]),
    where: VendorWhereInputSchema.optional(),
    limit: z.number().optional(),
}).strict();
export default VendorUpdateManyAndReturnArgsSchema;
