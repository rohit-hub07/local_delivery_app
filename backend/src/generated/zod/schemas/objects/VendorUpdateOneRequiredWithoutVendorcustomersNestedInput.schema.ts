import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VendorCreateWithoutVendorcustomersInputObjectSchema as VendorCreateWithoutVendorcustomersInputObjectSchema } from './VendorCreateWithoutVendorcustomersInput.schema';
import { VendorUncheckedCreateWithoutVendorcustomersInputObjectSchema as VendorUncheckedCreateWithoutVendorcustomersInputObjectSchema } from './VendorUncheckedCreateWithoutVendorcustomersInput.schema';
import { VendorCreateOrConnectWithoutVendorcustomersInputObjectSchema as VendorCreateOrConnectWithoutVendorcustomersInputObjectSchema } from './VendorCreateOrConnectWithoutVendorcustomersInput.schema';
import { VendorUpsertWithoutVendorcustomersInputObjectSchema as VendorUpsertWithoutVendorcustomersInputObjectSchema } from './VendorUpsertWithoutVendorcustomersInput.schema';
import { VendorWhereUniqueInputObjectSchema as VendorWhereUniqueInputObjectSchema } from './VendorWhereUniqueInput.schema';
import { VendorUpdateToOneWithWhereWithoutVendorcustomersInputObjectSchema as VendorUpdateToOneWithWhereWithoutVendorcustomersInputObjectSchema } from './VendorUpdateToOneWithWhereWithoutVendorcustomersInput.schema';
import { VendorUpdateWithoutVendorcustomersInputObjectSchema as VendorUpdateWithoutVendorcustomersInputObjectSchema } from './VendorUpdateWithoutVendorcustomersInput.schema';
import { VendorUncheckedUpdateWithoutVendorcustomersInputObjectSchema as VendorUncheckedUpdateWithoutVendorcustomersInputObjectSchema } from './VendorUncheckedUpdateWithoutVendorcustomersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VendorCreateWithoutVendorcustomersInputObjectSchema), z.lazy(() => VendorUncheckedCreateWithoutVendorcustomersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => VendorCreateOrConnectWithoutVendorcustomersInputObjectSchema).optional(),
  upsert: z.lazy(() => VendorUpsertWithoutVendorcustomersInputObjectSchema).optional(),
  connect: z.lazy(() => VendorWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => VendorUpdateToOneWithWhereWithoutVendorcustomersInputObjectSchema), z.lazy(() => VendorUpdateWithoutVendorcustomersInputObjectSchema), z.lazy(() => VendorUncheckedUpdateWithoutVendorcustomersInputObjectSchema)]).optional()
}).strict();
export const VendorUpdateOneRequiredWithoutVendorcustomersNestedInputObjectSchema: z.ZodType<Prisma.VendorUpdateOneRequiredWithoutVendorcustomersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorUpdateOneRequiredWithoutVendorcustomersNestedInput>;
export const VendorUpdateOneRequiredWithoutVendorcustomersNestedInputObjectZodSchema = makeSchema();
