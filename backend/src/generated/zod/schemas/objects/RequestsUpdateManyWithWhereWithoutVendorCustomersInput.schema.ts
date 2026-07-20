import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RequestsScalarWhereInputObjectSchema as RequestsScalarWhereInputObjectSchema } from './RequestsScalarWhereInput.schema';
import { RequestsUpdateManyMutationInputObjectSchema as RequestsUpdateManyMutationInputObjectSchema } from './RequestsUpdateManyMutationInput.schema';
import { RequestsUncheckedUpdateManyWithoutVendorCustomersInputObjectSchema as RequestsUncheckedUpdateManyWithoutVendorCustomersInputObjectSchema } from './RequestsUncheckedUpdateManyWithoutVendorCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RequestsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => RequestsUpdateManyMutationInputObjectSchema), z.lazy(() => RequestsUncheckedUpdateManyWithoutVendorCustomersInputObjectSchema)])
}).strict();
export const RequestsUpdateManyWithWhereWithoutVendorCustomersInputObjectSchema: z.ZodType<Prisma.RequestsUpdateManyWithWhereWithoutVendorCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestsUpdateManyWithWhereWithoutVendorCustomersInput>;
export const RequestsUpdateManyWithWhereWithoutVendorCustomersInputObjectZodSchema = makeSchema();
