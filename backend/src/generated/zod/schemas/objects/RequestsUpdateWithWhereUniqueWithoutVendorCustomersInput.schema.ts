import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RequestsWhereUniqueInputObjectSchema as RequestsWhereUniqueInputObjectSchema } from './RequestsWhereUniqueInput.schema';
import { RequestsUpdateWithoutVendorCustomersInputObjectSchema as RequestsUpdateWithoutVendorCustomersInputObjectSchema } from './RequestsUpdateWithoutVendorCustomersInput.schema';
import { RequestsUncheckedUpdateWithoutVendorCustomersInputObjectSchema as RequestsUncheckedUpdateWithoutVendorCustomersInputObjectSchema } from './RequestsUncheckedUpdateWithoutVendorCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RequestsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => RequestsUpdateWithoutVendorCustomersInputObjectSchema), z.lazy(() => RequestsUncheckedUpdateWithoutVendorCustomersInputObjectSchema)])
}).strict();
export const RequestsUpdateWithWhereUniqueWithoutVendorCustomersInputObjectSchema: z.ZodType<Prisma.RequestsUpdateWithWhereUniqueWithoutVendorCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestsUpdateWithWhereUniqueWithoutVendorCustomersInput>;
export const RequestsUpdateWithWhereUniqueWithoutVendorCustomersInputObjectZodSchema = makeSchema();
