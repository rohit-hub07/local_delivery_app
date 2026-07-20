import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VendorCustomersWhereInputObjectSchema as VendorCustomersWhereInputObjectSchema } from './VendorCustomersWhereInput.schema';
import { VendorCustomersUpdateWithoutSubscriptionInputObjectSchema as VendorCustomersUpdateWithoutSubscriptionInputObjectSchema } from './VendorCustomersUpdateWithoutSubscriptionInput.schema';
import { VendorCustomersUncheckedUpdateWithoutSubscriptionInputObjectSchema as VendorCustomersUncheckedUpdateWithoutSubscriptionInputObjectSchema } from './VendorCustomersUncheckedUpdateWithoutSubscriptionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VendorCustomersWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => VendorCustomersUpdateWithoutSubscriptionInputObjectSchema), z.lazy(() => VendorCustomersUncheckedUpdateWithoutSubscriptionInputObjectSchema)])
}).strict();
export const VendorCustomersUpdateToOneWithWhereWithoutSubscriptionInputObjectSchema: z.ZodType<Prisma.VendorCustomersUpdateToOneWithWhereWithoutSubscriptionInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorCustomersUpdateToOneWithWhereWithoutSubscriptionInput>;
export const VendorCustomersUpdateToOneWithWhereWithoutSubscriptionInputObjectZodSchema = makeSchema();
