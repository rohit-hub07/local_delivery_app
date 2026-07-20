import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VendorCustomersCreateWithoutRequestInputObjectSchema as VendorCustomersCreateWithoutRequestInputObjectSchema } from './VendorCustomersCreateWithoutRequestInput.schema';
import { VendorCustomersUncheckedCreateWithoutRequestInputObjectSchema as VendorCustomersUncheckedCreateWithoutRequestInputObjectSchema } from './VendorCustomersUncheckedCreateWithoutRequestInput.schema';
import { VendorCustomersCreateOrConnectWithoutRequestInputObjectSchema as VendorCustomersCreateOrConnectWithoutRequestInputObjectSchema } from './VendorCustomersCreateOrConnectWithoutRequestInput.schema';
import { VendorCustomersUpsertWithoutRequestInputObjectSchema as VendorCustomersUpsertWithoutRequestInputObjectSchema } from './VendorCustomersUpsertWithoutRequestInput.schema';
import { VendorCustomersWhereUniqueInputObjectSchema as VendorCustomersWhereUniqueInputObjectSchema } from './VendorCustomersWhereUniqueInput.schema';
import { VendorCustomersUpdateToOneWithWhereWithoutRequestInputObjectSchema as VendorCustomersUpdateToOneWithWhereWithoutRequestInputObjectSchema } from './VendorCustomersUpdateToOneWithWhereWithoutRequestInput.schema';
import { VendorCustomersUpdateWithoutRequestInputObjectSchema as VendorCustomersUpdateWithoutRequestInputObjectSchema } from './VendorCustomersUpdateWithoutRequestInput.schema';
import { VendorCustomersUncheckedUpdateWithoutRequestInputObjectSchema as VendorCustomersUncheckedUpdateWithoutRequestInputObjectSchema } from './VendorCustomersUncheckedUpdateWithoutRequestInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VendorCustomersCreateWithoutRequestInputObjectSchema), z.lazy(() => VendorCustomersUncheckedCreateWithoutRequestInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => VendorCustomersCreateOrConnectWithoutRequestInputObjectSchema).optional(),
  upsert: z.lazy(() => VendorCustomersUpsertWithoutRequestInputObjectSchema).optional(),
  connect: z.lazy(() => VendorCustomersWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => VendorCustomersUpdateToOneWithWhereWithoutRequestInputObjectSchema), z.lazy(() => VendorCustomersUpdateWithoutRequestInputObjectSchema), z.lazy(() => VendorCustomersUncheckedUpdateWithoutRequestInputObjectSchema)]).optional()
}).strict();
export const VendorCustomersUpdateOneRequiredWithoutRequestNestedInputObjectSchema: z.ZodType<Prisma.VendorCustomersUpdateOneRequiredWithoutRequestNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorCustomersUpdateOneRequiredWithoutRequestNestedInput>;
export const VendorCustomersUpdateOneRequiredWithoutRequestNestedInputObjectZodSchema = makeSchema();
