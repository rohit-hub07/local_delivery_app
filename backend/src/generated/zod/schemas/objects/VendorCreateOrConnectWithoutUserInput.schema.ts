import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VendorWhereUniqueInputObjectSchema as VendorWhereUniqueInputObjectSchema } from './VendorWhereUniqueInput.schema';
import { VendorCreateWithoutUserInputObjectSchema as VendorCreateWithoutUserInputObjectSchema } from './VendorCreateWithoutUserInput.schema';
import { VendorUncheckedCreateWithoutUserInputObjectSchema as VendorUncheckedCreateWithoutUserInputObjectSchema } from './VendorUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VendorWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => VendorCreateWithoutUserInputObjectSchema), z.lazy(() => VendorUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const VendorCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.VendorCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorCreateOrConnectWithoutUserInput>;
export const VendorCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
