import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VendorCustomersWhereUniqueInputObjectSchema as VendorCustomersWhereUniqueInputObjectSchema } from './VendorCustomersWhereUniqueInput.schema';
import { VendorCustomersUpdateWithoutVendorInputObjectSchema as VendorCustomersUpdateWithoutVendorInputObjectSchema } from './VendorCustomersUpdateWithoutVendorInput.schema';
import { VendorCustomersUncheckedUpdateWithoutVendorInputObjectSchema as VendorCustomersUncheckedUpdateWithoutVendorInputObjectSchema } from './VendorCustomersUncheckedUpdateWithoutVendorInput.schema';
import { VendorCustomersCreateWithoutVendorInputObjectSchema as VendorCustomersCreateWithoutVendorInputObjectSchema } from './VendorCustomersCreateWithoutVendorInput.schema';
import { VendorCustomersUncheckedCreateWithoutVendorInputObjectSchema as VendorCustomersUncheckedCreateWithoutVendorInputObjectSchema } from './VendorCustomersUncheckedCreateWithoutVendorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VendorCustomersWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => VendorCustomersUpdateWithoutVendorInputObjectSchema), z.lazy(() => VendorCustomersUncheckedUpdateWithoutVendorInputObjectSchema)]),
  create: z.union([z.lazy(() => VendorCustomersCreateWithoutVendorInputObjectSchema), z.lazy(() => VendorCustomersUncheckedCreateWithoutVendorInputObjectSchema)])
}).strict();
export const VendorCustomersUpsertWithWhereUniqueWithoutVendorInputObjectSchema: z.ZodType<Prisma.VendorCustomersUpsertWithWhereUniqueWithoutVendorInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorCustomersUpsertWithWhereUniqueWithoutVendorInput>;
export const VendorCustomersUpsertWithWhereUniqueWithoutVendorInputObjectZodSchema = makeSchema();
