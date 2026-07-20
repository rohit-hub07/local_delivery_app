import * as z from 'zod';
import { RequestsWhereUniqueInputObjectSchema as RequestsWhereUniqueInputObjectSchema } from './RequestsWhereUniqueInput.schema';
import { RequestsUpdateWithoutProductInputObjectSchema as RequestsUpdateWithoutProductInputObjectSchema } from './RequestsUpdateWithoutProductInput.schema';
import { RequestsUncheckedUpdateWithoutProductInputObjectSchema as RequestsUncheckedUpdateWithoutProductInputObjectSchema } from './RequestsUncheckedUpdateWithoutProductInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => RequestsWhereUniqueInputObjectSchema),
    data: z.union([z.lazy(() => RequestsUpdateWithoutProductInputObjectSchema), z.lazy(() => RequestsUncheckedUpdateWithoutProductInputObjectSchema)])
}).strict();
export const RequestsUpdateWithWhereUniqueWithoutProductInputObjectSchema = makeSchema();
export const RequestsUpdateWithWhereUniqueWithoutProductInputObjectZodSchema = makeSchema();
