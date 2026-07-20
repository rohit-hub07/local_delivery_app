import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { VendorCreateWithoutVendorcustomersInputSchema } from './VendorCreateWithoutVendorcustomersInputSchema';
import { VendorUncheckedCreateWithoutVendorcustomersInputSchema } from './VendorUncheckedCreateWithoutVendorcustomersInputSchema';
import { VendorCreateOrConnectWithoutVendorcustomersInputSchema } from './VendorCreateOrConnectWithoutVendorcustomersInputSchema';
import { VendorUpsertWithoutVendorcustomersInputSchema } from './VendorUpsertWithoutVendorcustomersInputSchema';
import { VendorWhereUniqueInputSchema } from './VendorWhereUniqueInputSchema';
import { VendorUpdateToOneWithWhereWithoutVendorcustomersInputSchema } from './VendorUpdateToOneWithWhereWithoutVendorcustomersInputSchema';
import { VendorUpdateWithoutVendorcustomersInputSchema } from './VendorUpdateWithoutVendorcustomersInputSchema';
import { VendorUncheckedUpdateWithoutVendorcustomersInputSchema } from './VendorUncheckedUpdateWithoutVendorcustomersInputSchema';

export const VendorUpdateOneRequiredWithoutVendorcustomersNestedInputSchema: z.ZodType<Prisma.VendorUpdateOneRequiredWithoutVendorcustomersNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => VendorCreateWithoutVendorcustomersInputSchema), z.lazy(() => VendorUncheckedCreateWithoutVendorcustomersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => VendorCreateOrConnectWithoutVendorcustomersInputSchema).optional(),
  upsert: z.lazy(() => VendorUpsertWithoutVendorcustomersInputSchema).optional(),
  connect: z.lazy(() => VendorWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => VendorUpdateToOneWithWhereWithoutVendorcustomersInputSchema), z.lazy(() => VendorUpdateWithoutVendorcustomersInputSchema), z.lazy(() => VendorUncheckedUpdateWithoutVendorcustomersInputSchema) ]).optional(),
});

export default VendorUpdateOneRequiredWithoutVendorcustomersNestedInputSchema;
