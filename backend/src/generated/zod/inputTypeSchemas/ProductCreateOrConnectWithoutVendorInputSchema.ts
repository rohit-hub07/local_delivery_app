import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ProductWhereUniqueInputSchema } from './ProductWhereUniqueInputSchema';
import { ProductCreateWithoutVendorInputSchema } from './ProductCreateWithoutVendorInputSchema';
import { ProductUncheckedCreateWithoutVendorInputSchema } from './ProductUncheckedCreateWithoutVendorInputSchema';

export const ProductCreateOrConnectWithoutVendorInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutVendorInput> = z.strictObject({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductCreateWithoutVendorInputSchema), z.lazy(() => ProductUncheckedCreateWithoutVendorInputSchema) ]),
});

export default ProductCreateOrConnectWithoutVendorInputSchema;
