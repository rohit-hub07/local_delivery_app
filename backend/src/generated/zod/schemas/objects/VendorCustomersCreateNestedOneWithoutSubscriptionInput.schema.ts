import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VendorCustomersCreateWithoutSubscriptionInputObjectSchema as VendorCustomersCreateWithoutSubscriptionInputObjectSchema } from './VendorCustomersCreateWithoutSubscriptionInput.schema';
import { VendorCustomersUncheckedCreateWithoutSubscriptionInputObjectSchema as VendorCustomersUncheckedCreateWithoutSubscriptionInputObjectSchema } from './VendorCustomersUncheckedCreateWithoutSubscriptionInput.schema';
import { VendorCustomersCreateOrConnectWithoutSubscriptionInputObjectSchema as VendorCustomersCreateOrConnectWithoutSubscriptionInputObjectSchema } from './VendorCustomersCreateOrConnectWithoutSubscriptionInput.schema';
import { VendorCustomersWhereUniqueInputObjectSchema as VendorCustomersWhereUniqueInputObjectSchema } from './VendorCustomersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VendorCustomersCreateWithoutSubscriptionInputObjectSchema), z.lazy(() => VendorCustomersUncheckedCreateWithoutSubscriptionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => VendorCustomersCreateOrConnectWithoutSubscriptionInputObjectSchema).optional(),
  connect: z.lazy(() => VendorCustomersWhereUniqueInputObjectSchema).optional()
}).strict();
export const VendorCustomersCreateNestedOneWithoutSubscriptionInputObjectSchema: z.ZodType<Prisma.VendorCustomersCreateNestedOneWithoutSubscriptionInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorCustomersCreateNestedOneWithoutSubscriptionInput>;
export const VendorCustomersCreateNestedOneWithoutSubscriptionInputObjectZodSchema = makeSchema();
