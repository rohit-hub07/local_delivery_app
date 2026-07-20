import * as z from 'zod';
import { RequestsScalarWhereInputObjectSchema as RequestsScalarWhereInputObjectSchema } from './RequestsScalarWhereInput.schema';
import { RequestsUpdateManyMutationInputObjectSchema as RequestsUpdateManyMutationInputObjectSchema } from './RequestsUpdateManyMutationInput.schema';
import { RequestsUncheckedUpdateManyWithoutProductInputObjectSchema as RequestsUncheckedUpdateManyWithoutProductInputObjectSchema } from './RequestsUncheckedUpdateManyWithoutProductInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => RequestsScalarWhereInputObjectSchema),
    data: z.union([z.lazy(() => RequestsUpdateManyMutationInputObjectSchema), z.lazy(() => RequestsUncheckedUpdateManyWithoutProductInputObjectSchema)])
}).strict();
export const RequestsUpdateManyWithWhereWithoutProductInputObjectSchema = makeSchema();
export const RequestsUpdateManyWithWhereWithoutProductInputObjectZodSchema = makeSchema();
