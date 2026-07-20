import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VendorCreateWithoutUserInputObjectSchema as VendorCreateWithoutUserInputObjectSchema } from './VendorCreateWithoutUserInput.schema';
import { VendorUncheckedCreateWithoutUserInputObjectSchema as VendorUncheckedCreateWithoutUserInputObjectSchema } from './VendorUncheckedCreateWithoutUserInput.schema';
import { VendorCreateOrConnectWithoutUserInputObjectSchema as VendorCreateOrConnectWithoutUserInputObjectSchema } from './VendorCreateOrConnectWithoutUserInput.schema';
import { VendorUpsertWithoutUserInputObjectSchema as VendorUpsertWithoutUserInputObjectSchema } from './VendorUpsertWithoutUserInput.schema';
import { VendorWhereInputObjectSchema as VendorWhereInputObjectSchema } from './VendorWhereInput.schema';
import { VendorWhereUniqueInputObjectSchema as VendorWhereUniqueInputObjectSchema } from './VendorWhereUniqueInput.schema';
import { VendorUpdateToOneWithWhereWithoutUserInputObjectSchema as VendorUpdateToOneWithWhereWithoutUserInputObjectSchema } from './VendorUpdateToOneWithWhereWithoutUserInput.schema';
import { VendorUpdateWithoutUserInputObjectSchema as VendorUpdateWithoutUserInputObjectSchema } from './VendorUpdateWithoutUserInput.schema';
import { VendorUncheckedUpdateWithoutUserInputObjectSchema as VendorUncheckedUpdateWithoutUserInputObjectSchema } from './VendorUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VendorCreateWithoutUserInputObjectSchema), z.lazy(() => VendorUncheckedCreateWithoutUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => VendorCreateOrConnectWithoutUserInputObjectSchema).optional(),
  upsert: z.lazy(() => VendorUpsertWithoutUserInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => VendorWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => VendorWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => VendorWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => VendorUpdateToOneWithWhereWithoutUserInputObjectSchema), z.lazy(() => VendorUpdateWithoutUserInputObjectSchema), z.lazy(() => VendorUncheckedUpdateWithoutUserInputObjectSchema)]).optional()
}).strict();
export const VendorUncheckedUpdateOneWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.VendorUncheckedUpdateOneWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorUncheckedUpdateOneWithoutUserNestedInput>;
export const VendorUncheckedUpdateOneWithoutUserNestedInputObjectZodSchema = makeSchema();
