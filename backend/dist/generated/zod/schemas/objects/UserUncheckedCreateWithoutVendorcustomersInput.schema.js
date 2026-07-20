import * as z from 'zod';
import { RoleSchema } from '../enums/Role.schema';
import { VendorUncheckedCreateNestedOneWithoutUserInputObjectSchema as VendorUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './VendorUncheckedCreateNestedOneWithoutUserInput.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    name: z.string(),
    phone: z.string(),
    address: z.string(),
    role: RoleSchema.optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    vendor: z.lazy(() => VendorUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutVendorcustomersInputObjectSchema = makeSchema();
export const UserUncheckedCreateWithoutVendorcustomersInputObjectZodSchema = makeSchema();
