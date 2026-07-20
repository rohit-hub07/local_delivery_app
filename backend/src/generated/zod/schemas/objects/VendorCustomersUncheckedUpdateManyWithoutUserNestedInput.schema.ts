import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VendorCustomersCreateWithoutUserInputObjectSchema as VendorCustomersCreateWithoutUserInputObjectSchema } from './VendorCustomersCreateWithoutUserInput.schema';
import { VendorCustomersUncheckedCreateWithoutUserInputObjectSchema as VendorCustomersUncheckedCreateWithoutUserInputObjectSchema } from './VendorCustomersUncheckedCreateWithoutUserInput.schema';
import { VendorCustomersCreateOrConnectWithoutUserInputObjectSchema as VendorCustomersCreateOrConnectWithoutUserInputObjectSchema } from './VendorCustomersCreateOrConnectWithoutUserInput.schema';
import { VendorCustomersUpsertWithWhereUniqueWithoutUserInputObjectSchema as VendorCustomersUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './VendorCustomersUpsertWithWhereUniqueWithoutUserInput.schema';
import { VendorCustomersCreateManyUserInputEnvelopeObjectSchema as VendorCustomersCreateManyUserInputEnvelopeObjectSchema } from './VendorCustomersCreateManyUserInputEnvelope.schema';
import { VendorCustomersWhereUniqueInputObjectSchema as VendorCustomersWhereUniqueInputObjectSchema } from './VendorCustomersWhereUniqueInput.schema';
import { VendorCustomersUpdateWithWhereUniqueWithoutUserInputObjectSchema as VendorCustomersUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './VendorCustomersUpdateWithWhereUniqueWithoutUserInput.schema';
import { VendorCustomersUpdateManyWithWhereWithoutUserInputObjectSchema as VendorCustomersUpdateManyWithWhereWithoutUserInputObjectSchema } from './VendorCustomersUpdateManyWithWhereWithoutUserInput.schema';
import { VendorCustomersScalarWhereInputObjectSchema as VendorCustomersScalarWhereInputObjectSchema } from './VendorCustomersScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VendorCustomersCreateWithoutUserInputObjectSchema), z.lazy(() => VendorCustomersCreateWithoutUserInputObjectSchema).array(), z.lazy(() => VendorCustomersUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => VendorCustomersUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => VendorCustomersCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => VendorCustomersCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => VendorCustomersUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => VendorCustomersUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => VendorCustomersCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => VendorCustomersWhereUniqueInputObjectSchema), z.lazy(() => VendorCustomersWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => VendorCustomersWhereUniqueInputObjectSchema), z.lazy(() => VendorCustomersWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => VendorCustomersWhereUniqueInputObjectSchema), z.lazy(() => VendorCustomersWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => VendorCustomersWhereUniqueInputObjectSchema), z.lazy(() => VendorCustomersWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => VendorCustomersUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => VendorCustomersUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => VendorCustomersUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => VendorCustomersUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => VendorCustomersScalarWhereInputObjectSchema), z.lazy(() => VendorCustomersScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const VendorCustomersUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.VendorCustomersUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorCustomersUncheckedUpdateManyWithoutUserNestedInput>;
export const VendorCustomersUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
