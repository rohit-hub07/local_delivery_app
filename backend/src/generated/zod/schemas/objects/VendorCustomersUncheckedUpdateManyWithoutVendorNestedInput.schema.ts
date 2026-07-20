import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VendorCustomersCreateWithoutVendorInputObjectSchema as VendorCustomersCreateWithoutVendorInputObjectSchema } from './VendorCustomersCreateWithoutVendorInput.schema';
import { VendorCustomersUncheckedCreateWithoutVendorInputObjectSchema as VendorCustomersUncheckedCreateWithoutVendorInputObjectSchema } from './VendorCustomersUncheckedCreateWithoutVendorInput.schema';
import { VendorCustomersCreateOrConnectWithoutVendorInputObjectSchema as VendorCustomersCreateOrConnectWithoutVendorInputObjectSchema } from './VendorCustomersCreateOrConnectWithoutVendorInput.schema';
import { VendorCustomersUpsertWithWhereUniqueWithoutVendorInputObjectSchema as VendorCustomersUpsertWithWhereUniqueWithoutVendorInputObjectSchema } from './VendorCustomersUpsertWithWhereUniqueWithoutVendorInput.schema';
import { VendorCustomersCreateManyVendorInputEnvelopeObjectSchema as VendorCustomersCreateManyVendorInputEnvelopeObjectSchema } from './VendorCustomersCreateManyVendorInputEnvelope.schema';
import { VendorCustomersWhereUniqueInputObjectSchema as VendorCustomersWhereUniqueInputObjectSchema } from './VendorCustomersWhereUniqueInput.schema';
import { VendorCustomersUpdateWithWhereUniqueWithoutVendorInputObjectSchema as VendorCustomersUpdateWithWhereUniqueWithoutVendorInputObjectSchema } from './VendorCustomersUpdateWithWhereUniqueWithoutVendorInput.schema';
import { VendorCustomersUpdateManyWithWhereWithoutVendorInputObjectSchema as VendorCustomersUpdateManyWithWhereWithoutVendorInputObjectSchema } from './VendorCustomersUpdateManyWithWhereWithoutVendorInput.schema';
import { VendorCustomersScalarWhereInputObjectSchema as VendorCustomersScalarWhereInputObjectSchema } from './VendorCustomersScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VendorCustomersCreateWithoutVendorInputObjectSchema), z.lazy(() => VendorCustomersCreateWithoutVendorInputObjectSchema).array(), z.lazy(() => VendorCustomersUncheckedCreateWithoutVendorInputObjectSchema), z.lazy(() => VendorCustomersUncheckedCreateWithoutVendorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => VendorCustomersCreateOrConnectWithoutVendorInputObjectSchema), z.lazy(() => VendorCustomersCreateOrConnectWithoutVendorInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => VendorCustomersUpsertWithWhereUniqueWithoutVendorInputObjectSchema), z.lazy(() => VendorCustomersUpsertWithWhereUniqueWithoutVendorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => VendorCustomersCreateManyVendorInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => VendorCustomersWhereUniqueInputObjectSchema), z.lazy(() => VendorCustomersWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => VendorCustomersWhereUniqueInputObjectSchema), z.lazy(() => VendorCustomersWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => VendorCustomersWhereUniqueInputObjectSchema), z.lazy(() => VendorCustomersWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => VendorCustomersWhereUniqueInputObjectSchema), z.lazy(() => VendorCustomersWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => VendorCustomersUpdateWithWhereUniqueWithoutVendorInputObjectSchema), z.lazy(() => VendorCustomersUpdateWithWhereUniqueWithoutVendorInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => VendorCustomersUpdateManyWithWhereWithoutVendorInputObjectSchema), z.lazy(() => VendorCustomersUpdateManyWithWhereWithoutVendorInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => VendorCustomersScalarWhereInputObjectSchema), z.lazy(() => VendorCustomersScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const VendorCustomersUncheckedUpdateManyWithoutVendorNestedInputObjectSchema: z.ZodType<Prisma.VendorCustomersUncheckedUpdateManyWithoutVendorNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorCustomersUncheckedUpdateManyWithoutVendorNestedInput>;
export const VendorCustomersUncheckedUpdateManyWithoutVendorNestedInputObjectZodSchema = makeSchema();
