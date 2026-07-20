import * as z from 'zod';
import { RoleSchema } from '../enums/Role.schema';
import { VendorCreateNestedOneWithoutUserInputObjectSchema as VendorCreateNestedOneWithoutUserInputObjectSchema } from './VendorCreateNestedOneWithoutUserInput.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    name: z.string(),
    phone: z.string(),
    address: z.string(),
    role: RoleSchema.optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    vendor: z.lazy(() => VendorCreateNestedOneWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutVendorcustomersInputObjectSchema = makeSchema();
export const UserCreateWithoutVendorcustomersInputObjectZodSchema = makeSchema();
