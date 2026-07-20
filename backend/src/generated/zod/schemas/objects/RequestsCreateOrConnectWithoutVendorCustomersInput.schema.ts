import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RequestsWhereUniqueInputObjectSchema as RequestsWhereUniqueInputObjectSchema } from './RequestsWhereUniqueInput.schema';
import { RequestsCreateWithoutVendorCustomersInputObjectSchema as RequestsCreateWithoutVendorCustomersInputObjectSchema } from './RequestsCreateWithoutVendorCustomersInput.schema';
import { RequestsUncheckedCreateWithoutVendorCustomersInputObjectSchema as RequestsUncheckedCreateWithoutVendorCustomersInputObjectSchema } from './RequestsUncheckedCreateWithoutVendorCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RequestsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RequestsCreateWithoutVendorCustomersInputObjectSchema), z.lazy(() => RequestsUncheckedCreateWithoutVendorCustomersInputObjectSchema)])
}).strict();
export const RequestsCreateOrConnectWithoutVendorCustomersInputObjectSchema: z.ZodType<Prisma.RequestsCreateOrConnectWithoutVendorCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestsCreateOrConnectWithoutVendorCustomersInput>;
export const RequestsCreateOrConnectWithoutVendorCustomersInputObjectZodSchema = makeSchema();
