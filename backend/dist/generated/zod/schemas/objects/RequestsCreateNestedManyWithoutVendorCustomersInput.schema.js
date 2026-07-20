import * as z from 'zod';
import { RequestsCreateWithoutVendorCustomersInputObjectSchema as RequestsCreateWithoutVendorCustomersInputObjectSchema } from './RequestsCreateWithoutVendorCustomersInput.schema';
import { RequestsUncheckedCreateWithoutVendorCustomersInputObjectSchema as RequestsUncheckedCreateWithoutVendorCustomersInputObjectSchema } from './RequestsUncheckedCreateWithoutVendorCustomersInput.schema';
import { RequestsCreateOrConnectWithoutVendorCustomersInputObjectSchema as RequestsCreateOrConnectWithoutVendorCustomersInputObjectSchema } from './RequestsCreateOrConnectWithoutVendorCustomersInput.schema';
import { RequestsCreateManyVendorCustomersInputEnvelopeObjectSchema as RequestsCreateManyVendorCustomersInputEnvelopeObjectSchema } from './RequestsCreateManyVendorCustomersInputEnvelope.schema';
import { RequestsWhereUniqueInputObjectSchema as RequestsWhereUniqueInputObjectSchema } from './RequestsWhereUniqueInput.schema';
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => RequestsCreateWithoutVendorCustomersInputObjectSchema), z.lazy(() => RequestsCreateWithoutVendorCustomersInputObjectSchema).array(), z.lazy(() => RequestsUncheckedCreateWithoutVendorCustomersInputObjectSchema), z.lazy(() => RequestsUncheckedCreateWithoutVendorCustomersInputObjectSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => RequestsCreateOrConnectWithoutVendorCustomersInputObjectSchema), z.lazy(() => RequestsCreateOrConnectWithoutVendorCustomersInputObjectSchema).array()]).optional(),
    createMany: z.lazy(() => RequestsCreateManyVendorCustomersInputEnvelopeObjectSchema).optional(),
    connect: z.union([z.lazy(() => RequestsWhereUniqueInputObjectSchema), z.lazy(() => RequestsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const RequestsCreateNestedManyWithoutVendorCustomersInputObjectSchema = makeSchema();
export const RequestsCreateNestedManyWithoutVendorCustomersInputObjectZodSchema = makeSchema();
