import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VendorCustomersWhereUniqueInputObjectSchema as VendorCustomersWhereUniqueInputObjectSchema } from './VendorCustomersWhereUniqueInput.schema';
import { VendorCustomersCreateWithoutRequestInputObjectSchema as VendorCustomersCreateWithoutRequestInputObjectSchema } from './VendorCustomersCreateWithoutRequestInput.schema';
import { VendorCustomersUncheckedCreateWithoutRequestInputObjectSchema as VendorCustomersUncheckedCreateWithoutRequestInputObjectSchema } from './VendorCustomersUncheckedCreateWithoutRequestInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VendorCustomersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => VendorCustomersCreateWithoutRequestInputObjectSchema), z.lazy(() => VendorCustomersUncheckedCreateWithoutRequestInputObjectSchema)])
}).strict();
export const VendorCustomersCreateOrConnectWithoutRequestInputObjectSchema: z.ZodType<Prisma.VendorCustomersCreateOrConnectWithoutRequestInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorCustomersCreateOrConnectWithoutRequestInput>;
export const VendorCustomersCreateOrConnectWithoutRequestInputObjectZodSchema = makeSchema();
