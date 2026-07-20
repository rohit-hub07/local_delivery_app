import * as z from 'zod';
import { RoleSchema } from '../enums/Role.schema';
import { VendorCustomersCreateNestedManyWithoutUserInputObjectSchema as VendorCustomersCreateNestedManyWithoutUserInputObjectSchema } from './VendorCustomersCreateNestedManyWithoutUserInput.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    name: z.string(),
    phone: z.string(),
    address: z.string(),
    role: RoleSchema.optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    vendorcustomers: z.lazy(() => VendorCustomersCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutVendorInputObjectSchema = makeSchema();
export const UserCreateWithoutVendorInputObjectZodSchema = makeSchema();
