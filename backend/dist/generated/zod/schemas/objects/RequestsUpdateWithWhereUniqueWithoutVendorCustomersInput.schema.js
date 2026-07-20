import * as z from 'zod';
import { RequestsWhereUniqueInputObjectSchema as RequestsWhereUniqueInputObjectSchema } from './RequestsWhereUniqueInput.schema';
import { RequestsUpdateWithoutVendorCustomersInputObjectSchema as RequestsUpdateWithoutVendorCustomersInputObjectSchema } from './RequestsUpdateWithoutVendorCustomersInput.schema';
import { RequestsUncheckedUpdateWithoutVendorCustomersInputObjectSchema as RequestsUncheckedUpdateWithoutVendorCustomersInputObjectSchema } from './RequestsUncheckedUpdateWithoutVendorCustomersInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => RequestsWhereUniqueInputObjectSchema),
    data: z.union([z.lazy(() => RequestsUpdateWithoutVendorCustomersInputObjectSchema), z.lazy(() => RequestsUncheckedUpdateWithoutVendorCustomersInputObjectSchema)])
}).strict();
export const RequestsUpdateWithWhereUniqueWithoutVendorCustomersInputObjectSchema = makeSchema();
export const RequestsUpdateWithWhereUniqueWithoutVendorCustomersInputObjectZodSchema = makeSchema();
