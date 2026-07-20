import * as z from 'zod';
import { RequestsWhereUniqueInputObjectSchema as RequestsWhereUniqueInputObjectSchema } from './RequestsWhereUniqueInput.schema';
import { RequestsCreateWithoutVendorCustomersInputObjectSchema as RequestsCreateWithoutVendorCustomersInputObjectSchema } from './RequestsCreateWithoutVendorCustomersInput.schema';
import { RequestsUncheckedCreateWithoutVendorCustomersInputObjectSchema as RequestsUncheckedCreateWithoutVendorCustomersInputObjectSchema } from './RequestsUncheckedCreateWithoutVendorCustomersInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => RequestsWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => RequestsCreateWithoutVendorCustomersInputObjectSchema), z.lazy(() => RequestsUncheckedCreateWithoutVendorCustomersInputObjectSchema)])
}).strict();
export const RequestsCreateOrConnectWithoutVendorCustomersInputObjectSchema = makeSchema();
export const RequestsCreateOrConnectWithoutVendorCustomersInputObjectZodSchema = makeSchema();
