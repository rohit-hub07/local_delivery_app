import * as z from 'zod';
import { RequestsWhereUniqueInputObjectSchema as RequestsWhereUniqueInputObjectSchema } from './RequestsWhereUniqueInput.schema';
import { RequestsCreateWithoutProductInputObjectSchema as RequestsCreateWithoutProductInputObjectSchema } from './RequestsCreateWithoutProductInput.schema';
import { RequestsUncheckedCreateWithoutProductInputObjectSchema as RequestsUncheckedCreateWithoutProductInputObjectSchema } from './RequestsUncheckedCreateWithoutProductInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => RequestsWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => RequestsCreateWithoutProductInputObjectSchema), z.lazy(() => RequestsUncheckedCreateWithoutProductInputObjectSchema)])
}).strict();
export const RequestsCreateOrConnectWithoutProductInputObjectSchema = makeSchema();
export const RequestsCreateOrConnectWithoutProductInputObjectZodSchema = makeSchema();
