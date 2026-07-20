import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CustomerSubscriptionScalarWhereInputObjectSchema as CustomerSubscriptionScalarWhereInputObjectSchema } from './CustomerSubscriptionScalarWhereInput.schema';
import { CustomerSubscriptionUpdateManyMutationInputObjectSchema as CustomerSubscriptionUpdateManyMutationInputObjectSchema } from './CustomerSubscriptionUpdateManyMutationInput.schema';
import { CustomerSubscriptionUncheckedUpdateManyWithoutVendorCustomersInputObjectSchema as CustomerSubscriptionUncheckedUpdateManyWithoutVendorCustomersInputObjectSchema } from './CustomerSubscriptionUncheckedUpdateManyWithoutVendorCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomerSubscriptionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CustomerSubscriptionUpdateManyMutationInputObjectSchema), z.lazy(() => CustomerSubscriptionUncheckedUpdateManyWithoutVendorCustomersInputObjectSchema)])
}).strict();
export const CustomerSubscriptionUpdateManyWithWhereWithoutVendorCustomersInputObjectSchema: z.ZodType<Prisma.CustomerSubscriptionUpdateManyWithWhereWithoutVendorCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerSubscriptionUpdateManyWithWhereWithoutVendorCustomersInput>;
export const CustomerSubscriptionUpdateManyWithWhereWithoutVendorCustomersInputObjectZodSchema = makeSchema();
