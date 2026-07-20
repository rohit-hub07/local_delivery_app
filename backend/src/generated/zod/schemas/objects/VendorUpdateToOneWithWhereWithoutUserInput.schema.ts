import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VendorWhereInputObjectSchema as VendorWhereInputObjectSchema } from './VendorWhereInput.schema';
import { VendorUpdateWithoutUserInputObjectSchema as VendorUpdateWithoutUserInputObjectSchema } from './VendorUpdateWithoutUserInput.schema';
import { VendorUncheckedUpdateWithoutUserInputObjectSchema as VendorUncheckedUpdateWithoutUserInputObjectSchema } from './VendorUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VendorWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => VendorUpdateWithoutUserInputObjectSchema), z.lazy(() => VendorUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const VendorUpdateToOneWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.VendorUpdateToOneWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorUpdateToOneWithWhereWithoutUserInput>;
export const VendorUpdateToOneWithWhereWithoutUserInputObjectZodSchema = makeSchema();
