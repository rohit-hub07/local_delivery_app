import * as z from 'zod';
import { VendorCustomersSelectObjectSchema as VendorCustomersSelectObjectSchema } from './objects/VendorCustomersSelect.schema';
import { VendorCustomersUpdateManyMutationInputObjectSchema as VendorCustomersUpdateManyMutationInputObjectSchema } from './objects/VendorCustomersUpdateManyMutationInput.schema';
import { VendorCustomersWhereInputObjectSchema as VendorCustomersWhereInputObjectSchema } from './objects/VendorCustomersWhereInput.schema';
export const VendorCustomersUpdateManyAndReturnSchema = z.object({ select: VendorCustomersSelectObjectSchema.optional(), data: VendorCustomersUpdateManyMutationInputObjectSchema, where: VendorCustomersWhereInputObjectSchema.optional() }).strict();
export const VendorCustomersUpdateManyAndReturnZodSchema = z.object({ select: VendorCustomersSelectObjectSchema.optional(), data: VendorCustomersUpdateManyMutationInputObjectSchema, where: VendorCustomersWhereInputObjectSchema.optional() }).strict();
