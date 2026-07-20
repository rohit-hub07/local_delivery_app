import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VendorWhereInputObjectSchema as VendorWhereInputObjectSchema } from './VendorWhereInput.schema';
import { VendorUpdateWithoutVendorcustomersInputObjectSchema as VendorUpdateWithoutVendorcustomersInputObjectSchema } from './VendorUpdateWithoutVendorcustomersInput.schema';
import { VendorUncheckedUpdateWithoutVendorcustomersInputObjectSchema as VendorUncheckedUpdateWithoutVendorcustomersInputObjectSchema } from './VendorUncheckedUpdateWithoutVendorcustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VendorWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => VendorUpdateWithoutVendorcustomersInputObjectSchema), z.lazy(() => VendorUncheckedUpdateWithoutVendorcustomersInputObjectSchema)])
}).strict();
export const VendorUpdateToOneWithWhereWithoutVendorcustomersInputObjectSchema: z.ZodType<Prisma.VendorUpdateToOneWithWhereWithoutVendorcustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorUpdateToOneWithWhereWithoutVendorcustomersInput>;
export const VendorUpdateToOneWithWhereWithoutVendorcustomersInputObjectZodSchema = makeSchema();
