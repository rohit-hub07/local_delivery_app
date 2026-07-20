import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { VendorCustomersCreateWithoutRequestInputSchema } from './VendorCustomersCreateWithoutRequestInputSchema';
import { VendorCustomersUncheckedCreateWithoutRequestInputSchema } from './VendorCustomersUncheckedCreateWithoutRequestInputSchema';
import { VendorCustomersCreateOrConnectWithoutRequestInputSchema } from './VendorCustomersCreateOrConnectWithoutRequestInputSchema';
import { VendorCustomersUpsertWithoutRequestInputSchema } from './VendorCustomersUpsertWithoutRequestInputSchema';
import { VendorCustomersWhereUniqueInputSchema } from './VendorCustomersWhereUniqueInputSchema';
import { VendorCustomersUpdateToOneWithWhereWithoutRequestInputSchema } from './VendorCustomersUpdateToOneWithWhereWithoutRequestInputSchema';
import { VendorCustomersUpdateWithoutRequestInputSchema } from './VendorCustomersUpdateWithoutRequestInputSchema';
import { VendorCustomersUncheckedUpdateWithoutRequestInputSchema } from './VendorCustomersUncheckedUpdateWithoutRequestInputSchema';

export const VendorCustomersUpdateOneRequiredWithoutRequestNestedInputSchema: z.ZodType<Prisma.VendorCustomersUpdateOneRequiredWithoutRequestNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => VendorCustomersCreateWithoutRequestInputSchema), z.lazy(() => VendorCustomersUncheckedCreateWithoutRequestInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => VendorCustomersCreateOrConnectWithoutRequestInputSchema).optional(),
  upsert: z.lazy(() => VendorCustomersUpsertWithoutRequestInputSchema).optional(),
  connect: z.lazy(() => VendorCustomersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => VendorCustomersUpdateToOneWithWhereWithoutRequestInputSchema), z.lazy(() => VendorCustomersUpdateWithoutRequestInputSchema), z.lazy(() => VendorCustomersUncheckedUpdateWithoutRequestInputSchema) ]).optional(),
});

export default VendorCustomersUpdateOneRequiredWithoutRequestNestedInputSchema;
