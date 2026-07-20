import * as z from 'zod';
import { RequestsWhereUniqueInputObjectSchema as RequestsWhereUniqueInputObjectSchema } from './RequestsWhereUniqueInput.schema';
import { RequestsUpdateWithoutVendorCustomersInputObjectSchema as RequestsUpdateWithoutVendorCustomersInputObjectSchema } from './RequestsUpdateWithoutVendorCustomersInput.schema';
import { RequestsUncheckedUpdateWithoutVendorCustomersInputObjectSchema as RequestsUncheckedUpdateWithoutVendorCustomersInputObjectSchema } from './RequestsUncheckedUpdateWithoutVendorCustomersInput.schema';
import { RequestsCreateWithoutVendorCustomersInputObjectSchema as RequestsCreateWithoutVendorCustomersInputObjectSchema } from './RequestsCreateWithoutVendorCustomersInput.schema';
import { RequestsUncheckedCreateWithoutVendorCustomersInputObjectSchema as RequestsUncheckedCreateWithoutVendorCustomersInputObjectSchema } from './RequestsUncheckedCreateWithoutVendorCustomersInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => RequestsWhereUniqueInputObjectSchema),
    update: z.union([z.lazy(() => RequestsUpdateWithoutVendorCustomersInputObjectSchema), z.lazy(() => RequestsUncheckedUpdateWithoutVendorCustomersInputObjectSchema)]),
    create: z.union([z.lazy(() => RequestsCreateWithoutVendorCustomersInputObjectSchema), z.lazy(() => RequestsUncheckedCreateWithoutVendorCustomersInputObjectSchema)])
}).strict();
export const RequestsUpsertWithWhereUniqueWithoutVendorCustomersInputObjectSchema = makeSchema();
export const RequestsUpsertWithWhereUniqueWithoutVendorCustomersInputObjectZodSchema = makeSchema();
