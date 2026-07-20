import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VendorCustomersWhereInputObjectSchema as VendorCustomersWhereInputObjectSchema } from './VendorCustomersWhereInput.schema';
import { VendorCustomersUpdateWithoutRequestInputObjectSchema as VendorCustomersUpdateWithoutRequestInputObjectSchema } from './VendorCustomersUpdateWithoutRequestInput.schema';
import { VendorCustomersUncheckedUpdateWithoutRequestInputObjectSchema as VendorCustomersUncheckedUpdateWithoutRequestInputObjectSchema } from './VendorCustomersUncheckedUpdateWithoutRequestInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VendorCustomersWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => VendorCustomersUpdateWithoutRequestInputObjectSchema), z.lazy(() => VendorCustomersUncheckedUpdateWithoutRequestInputObjectSchema)])
}).strict();
export const VendorCustomersUpdateToOneWithWhereWithoutRequestInputObjectSchema: z.ZodType<Prisma.VendorCustomersUpdateToOneWithWhereWithoutRequestInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorCustomersUpdateToOneWithWhereWithoutRequestInput>;
export const VendorCustomersUpdateToOneWithWhereWithoutRequestInputObjectZodSchema = makeSchema();
