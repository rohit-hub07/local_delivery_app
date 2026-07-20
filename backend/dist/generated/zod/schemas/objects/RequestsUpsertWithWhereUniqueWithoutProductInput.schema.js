import * as z from 'zod';
import { RequestsWhereUniqueInputObjectSchema as RequestsWhereUniqueInputObjectSchema } from './RequestsWhereUniqueInput.schema';
import { RequestsUpdateWithoutProductInputObjectSchema as RequestsUpdateWithoutProductInputObjectSchema } from './RequestsUpdateWithoutProductInput.schema';
import { RequestsUncheckedUpdateWithoutProductInputObjectSchema as RequestsUncheckedUpdateWithoutProductInputObjectSchema } from './RequestsUncheckedUpdateWithoutProductInput.schema';
import { RequestsCreateWithoutProductInputObjectSchema as RequestsCreateWithoutProductInputObjectSchema } from './RequestsCreateWithoutProductInput.schema';
import { RequestsUncheckedCreateWithoutProductInputObjectSchema as RequestsUncheckedCreateWithoutProductInputObjectSchema } from './RequestsUncheckedCreateWithoutProductInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => RequestsWhereUniqueInputObjectSchema),
    update: z.union([z.lazy(() => RequestsUpdateWithoutProductInputObjectSchema), z.lazy(() => RequestsUncheckedUpdateWithoutProductInputObjectSchema)]),
    create: z.union([z.lazy(() => RequestsCreateWithoutProductInputObjectSchema), z.lazy(() => RequestsUncheckedCreateWithoutProductInputObjectSchema)])
}).strict();
export const RequestsUpsertWithWhereUniqueWithoutProductInputObjectSchema = makeSchema();
export const RequestsUpsertWithWhereUniqueWithoutProductInputObjectZodSchema = makeSchema();
