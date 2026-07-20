import * as z from 'zod';
import { ProductScalarWhereInputObjectSchema as ProductScalarWhereInputObjectSchema } from './ProductScalarWhereInput.schema';
import { ProductUpdateManyMutationInputObjectSchema as ProductUpdateManyMutationInputObjectSchema } from './ProductUpdateManyMutationInput.schema';
import { ProductUncheckedUpdateManyWithoutVendorInputObjectSchema as ProductUncheckedUpdateManyWithoutVendorInputObjectSchema } from './ProductUncheckedUpdateManyWithoutVendorInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => ProductScalarWhereInputObjectSchema),
    data: z.union([z.lazy(() => ProductUpdateManyMutationInputObjectSchema), z.lazy(() => ProductUncheckedUpdateManyWithoutVendorInputObjectSchema)])
}).strict();
export const ProductUpdateManyWithWhereWithoutVendorInputObjectSchema = makeSchema();
export const ProductUpdateManyWithWhereWithoutVendorInputObjectZodSchema = makeSchema();
