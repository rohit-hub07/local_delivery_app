import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { VendorCreateWithoutProductInputSchema } from './VendorCreateWithoutProductInputSchema';
import { VendorUncheckedCreateWithoutProductInputSchema } from './VendorUncheckedCreateWithoutProductInputSchema';
import { VendorCreateOrConnectWithoutProductInputSchema } from './VendorCreateOrConnectWithoutProductInputSchema';
import { VendorUpsertWithoutProductInputSchema } from './VendorUpsertWithoutProductInputSchema';
import { VendorWhereUniqueInputSchema } from './VendorWhereUniqueInputSchema';
import { VendorUpdateToOneWithWhereWithoutProductInputSchema } from './VendorUpdateToOneWithWhereWithoutProductInputSchema';
import { VendorUpdateWithoutProductInputSchema } from './VendorUpdateWithoutProductInputSchema';
import { VendorUncheckedUpdateWithoutProductInputSchema } from './VendorUncheckedUpdateWithoutProductInputSchema';

export const VendorUpdateOneRequiredWithoutProductNestedInputSchema: z.ZodType<Prisma.VendorUpdateOneRequiredWithoutProductNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => VendorCreateWithoutProductInputSchema), z.lazy(() => VendorUncheckedCreateWithoutProductInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => VendorCreateOrConnectWithoutProductInputSchema).optional(),
  upsert: z.lazy(() => VendorUpsertWithoutProductInputSchema).optional(),
  connect: z.lazy(() => VendorWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => VendorUpdateToOneWithWhereWithoutProductInputSchema), z.lazy(() => VendorUpdateWithoutProductInputSchema), z.lazy(() => VendorUncheckedUpdateWithoutProductInputSchema) ]).optional(),
});

export default VendorUpdateOneRequiredWithoutProductNestedInputSchema;
