import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { VendorCreateWithoutProductInputSchema } from './VendorCreateWithoutProductInputSchema';
import { VendorUncheckedCreateWithoutProductInputSchema } from './VendorUncheckedCreateWithoutProductInputSchema';
import { VendorCreateOrConnectWithoutProductInputSchema } from './VendorCreateOrConnectWithoutProductInputSchema';
import { VendorWhereUniqueInputSchema } from './VendorWhereUniqueInputSchema';

export const VendorCreateNestedOneWithoutProductInputSchema: z.ZodType<Prisma.VendorCreateNestedOneWithoutProductInput> = z.strictObject({
  create: z.union([ z.lazy(() => VendorCreateWithoutProductInputSchema), z.lazy(() => VendorUncheckedCreateWithoutProductInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => VendorCreateOrConnectWithoutProductInputSchema).optional(),
  connect: z.lazy(() => VendorWhereUniqueInputSchema).optional(),
});

export default VendorCreateNestedOneWithoutProductInputSchema;
