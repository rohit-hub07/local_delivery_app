import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VendorCustomersCreateWithoutRequestInputObjectSchema as VendorCustomersCreateWithoutRequestInputObjectSchema } from './VendorCustomersCreateWithoutRequestInput.schema';
import { VendorCustomersUncheckedCreateWithoutRequestInputObjectSchema as VendorCustomersUncheckedCreateWithoutRequestInputObjectSchema } from './VendorCustomersUncheckedCreateWithoutRequestInput.schema';
import { VendorCustomersCreateOrConnectWithoutRequestInputObjectSchema as VendorCustomersCreateOrConnectWithoutRequestInputObjectSchema } from './VendorCustomersCreateOrConnectWithoutRequestInput.schema';
import { VendorCustomersWhereUniqueInputObjectSchema as VendorCustomersWhereUniqueInputObjectSchema } from './VendorCustomersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VendorCustomersCreateWithoutRequestInputObjectSchema), z.lazy(() => VendorCustomersUncheckedCreateWithoutRequestInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => VendorCustomersCreateOrConnectWithoutRequestInputObjectSchema).optional(),
  connect: z.lazy(() => VendorCustomersWhereUniqueInputObjectSchema).optional()
}).strict();
export const VendorCustomersCreateNestedOneWithoutRequestInputObjectSchema: z.ZodType<Prisma.VendorCustomersCreateNestedOneWithoutRequestInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorCustomersCreateNestedOneWithoutRequestInput>;
export const VendorCustomersCreateNestedOneWithoutRequestInputObjectZodSchema = makeSchema();
