import * as z from 'zod';
import { RoleSchema } from '../enums/Role.schema';
import { VendorUncheckedCreateNestedOneWithoutUserInputObjectSchema as VendorUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './VendorUncheckedCreateNestedOneWithoutUserInput.schema';
import { VendorCustomersUncheckedCreateNestedManyWithoutUserInputObjectSchema as VendorCustomersUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './VendorCustomersUncheckedCreateNestedManyWithoutUserInput.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    name: z.string(),
    phone: z.string(),
    address: z.string(),
    role: RoleSchema.optional(),
    createdAt: z.coerce.date().optional(),
    vendor: z.lazy(() => VendorUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
    vendorcustomers: z.lazy(() => VendorCustomersUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateInputObjectSchema = makeSchema();
export const UserUncheckedCreateInputObjectZodSchema = makeSchema();
