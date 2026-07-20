import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VendorCreateWithoutVendorcustomersInputObjectSchema as VendorCreateWithoutVendorcustomersInputObjectSchema } from './VendorCreateWithoutVendorcustomersInput.schema';
import { VendorUncheckedCreateWithoutVendorcustomersInputObjectSchema as VendorUncheckedCreateWithoutVendorcustomersInputObjectSchema } from './VendorUncheckedCreateWithoutVendorcustomersInput.schema';
import { VendorCreateOrConnectWithoutVendorcustomersInputObjectSchema as VendorCreateOrConnectWithoutVendorcustomersInputObjectSchema } from './VendorCreateOrConnectWithoutVendorcustomersInput.schema';
import { VendorWhereUniqueInputObjectSchema as VendorWhereUniqueInputObjectSchema } from './VendorWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VendorCreateWithoutVendorcustomersInputObjectSchema), z.lazy(() => VendorUncheckedCreateWithoutVendorcustomersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => VendorCreateOrConnectWithoutVendorcustomersInputObjectSchema).optional(),
  connect: z.lazy(() => VendorWhereUniqueInputObjectSchema).optional()
}).strict();
export const VendorCreateNestedOneWithoutVendorcustomersInputObjectSchema: z.ZodType<Prisma.VendorCreateNestedOneWithoutVendorcustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorCreateNestedOneWithoutVendorcustomersInput>;
export const VendorCreateNestedOneWithoutVendorcustomersInputObjectZodSchema = makeSchema();
