import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VendorCustomersScalarWhereInputObjectSchema as VendorCustomersScalarWhereInputObjectSchema } from './VendorCustomersScalarWhereInput.schema';
import { VendorCustomersUpdateManyMutationInputObjectSchema as VendorCustomersUpdateManyMutationInputObjectSchema } from './VendorCustomersUpdateManyMutationInput.schema';
import { VendorCustomersUncheckedUpdateManyWithoutUserInputObjectSchema as VendorCustomersUncheckedUpdateManyWithoutUserInputObjectSchema } from './VendorCustomersUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VendorCustomersScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => VendorCustomersUpdateManyMutationInputObjectSchema), z.lazy(() => VendorCustomersUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const VendorCustomersUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.VendorCustomersUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorCustomersUpdateManyWithWhereWithoutUserInput>;
export const VendorCustomersUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
