import { z } from 'zod';
import { StatusSchema } from './StatusSchema';
export const NestedEnumStatusFilterSchema = z.strictObject({
    equals: z.lazy(() => StatusSchema).optional(),
    in: z.lazy(() => StatusSchema).array().optional(),
    notIn: z.lazy(() => StatusSchema).array().optional(),
    not: z.union([z.lazy(() => StatusSchema), z.lazy(() => NestedEnumStatusFilterSchema)]).optional(),
});
export default NestedEnumStatusFilterSchema;
