import * as z from 'zod';
import { VendorCustomersScalarWhereInputObjectSchema as VendorCustomersScalarWhereInputObjectSchema } from './VendorCustomersScalarWhereInput.schema';
import { VendorCustomersUpdateManyMutationInputObjectSchema as VendorCustomersUpdateManyMutationInputObjectSchema } from './VendorCustomersUpdateManyMutationInput.schema';
import { VendorCustomersUncheckedUpdateManyWithoutVendorInputObjectSchema as VendorCustomersUncheckedUpdateManyWithoutVendorInputObjectSchema } from './VendorCustomersUncheckedUpdateManyWithoutVendorInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => VendorCustomersScalarWhereInputObjectSchema),
    data: z.union([z.lazy(() => VendorCustomersUpdateManyMutationInputObjectSchema), z.lazy(() => VendorCustomersUncheckedUpdateManyWithoutVendorInputObjectSchema)])
}).strict();
export const VendorCustomersUpdateManyWithWhereWithoutVendorInputObjectSchema = makeSchema();
export const VendorCustomersUpdateManyWithWhereWithoutVendorInputObjectZodSchema = makeSchema();
