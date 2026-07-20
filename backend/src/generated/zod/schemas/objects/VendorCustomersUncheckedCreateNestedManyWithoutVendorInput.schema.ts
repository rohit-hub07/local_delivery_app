import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VendorCustomersCreateWithoutVendorInputObjectSchema as VendorCustomersCreateWithoutVendorInputObjectSchema } from './VendorCustomersCreateWithoutVendorInput.schema';
import { VendorCustomersUncheckedCreateWithoutVendorInputObjectSchema as VendorCustomersUncheckedCreateWithoutVendorInputObjectSchema } from './VendorCustomersUncheckedCreateWithoutVendorInput.schema';
import { VendorCustomersCreateOrConnectWithoutVendorInputObjectSchema as VendorCustomersCreateOrConnectWithoutVendorInputObjectSchema } from './VendorCustomersCreateOrConnectWithoutVendorInput.schema';
import { VendorCustomersCreateManyVendorInputEnvelopeObjectSchema as VendorCustomersCreateManyVendorInputEnvelopeObjectSchema } from './VendorCustomersCreateManyVendorInputEnvelope.schema';
import { VendorCustomersWhereUniqueInputObjectSchema as VendorCustomersWhereUniqueInputObjectSchema } from './VendorCustomersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VendorCustomersCreateWithoutVendorInputObjectSchema), z.lazy(() => VendorCustomersCreateWithoutVendorInputObjectSchema).array(), z.lazy(() => VendorCustomersUncheckedCreateWithoutVendorInputObjectSchema), z.lazy(() => VendorCustomersUncheckedCreateWithoutVendorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => VendorCustomersCreateOrConnectWithoutVendorInputObjectSchema), z.lazy(() => VendorCustomersCreateOrConnectWithoutVendorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => VendorCustomersCreateManyVendorInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => VendorCustomersWhereUniqueInputObjectSchema), z.lazy(() => VendorCustomersWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const VendorCustomersUncheckedCreateNestedManyWithoutVendorInputObjectSchema: z.ZodType<Prisma.VendorCustomersUncheckedCreateNestedManyWithoutVendorInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorCustomersUncheckedCreateNestedManyWithoutVendorInput>;
export const VendorCustomersUncheckedCreateNestedManyWithoutVendorInputObjectZodSchema = makeSchema();
