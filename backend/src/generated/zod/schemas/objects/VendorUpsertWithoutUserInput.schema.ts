import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VendorUpdateWithoutUserInputObjectSchema as VendorUpdateWithoutUserInputObjectSchema } from './VendorUpdateWithoutUserInput.schema';
import { VendorUncheckedUpdateWithoutUserInputObjectSchema as VendorUncheckedUpdateWithoutUserInputObjectSchema } from './VendorUncheckedUpdateWithoutUserInput.schema';
import { VendorCreateWithoutUserInputObjectSchema as VendorCreateWithoutUserInputObjectSchema } from './VendorCreateWithoutUserInput.schema';
import { VendorUncheckedCreateWithoutUserInputObjectSchema as VendorUncheckedCreateWithoutUserInputObjectSchema } from './VendorUncheckedCreateWithoutUserInput.schema';
import { VendorWhereInputObjectSchema as VendorWhereInputObjectSchema } from './VendorWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => VendorUpdateWithoutUserInputObjectSchema), z.lazy(() => VendorUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => VendorCreateWithoutUserInputObjectSchema), z.lazy(() => VendorUncheckedCreateWithoutUserInputObjectSchema)]),
  where: z.lazy(() => VendorWhereInputObjectSchema).optional()
}).strict();
export const VendorUpsertWithoutUserInputObjectSchema: z.ZodType<Prisma.VendorUpsertWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorUpsertWithoutUserInput>;
export const VendorUpsertWithoutUserInputObjectZodSchema = makeSchema();
