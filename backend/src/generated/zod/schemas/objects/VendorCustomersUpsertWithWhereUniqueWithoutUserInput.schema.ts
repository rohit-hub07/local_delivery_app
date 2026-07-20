import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VendorCustomersWhereUniqueInputObjectSchema as VendorCustomersWhereUniqueInputObjectSchema } from './VendorCustomersWhereUniqueInput.schema';
import { VendorCustomersUpdateWithoutUserInputObjectSchema as VendorCustomersUpdateWithoutUserInputObjectSchema } from './VendorCustomersUpdateWithoutUserInput.schema';
import { VendorCustomersUncheckedUpdateWithoutUserInputObjectSchema as VendorCustomersUncheckedUpdateWithoutUserInputObjectSchema } from './VendorCustomersUncheckedUpdateWithoutUserInput.schema';
import { VendorCustomersCreateWithoutUserInputObjectSchema as VendorCustomersCreateWithoutUserInputObjectSchema } from './VendorCustomersCreateWithoutUserInput.schema';
import { VendorCustomersUncheckedCreateWithoutUserInputObjectSchema as VendorCustomersUncheckedCreateWithoutUserInputObjectSchema } from './VendorCustomersUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VendorCustomersWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => VendorCustomersUpdateWithoutUserInputObjectSchema), z.lazy(() => VendorCustomersUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => VendorCustomersCreateWithoutUserInputObjectSchema), z.lazy(() => VendorCustomersUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const VendorCustomersUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.VendorCustomersUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorCustomersUpsertWithWhereUniqueWithoutUserInput>;
export const VendorCustomersUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
