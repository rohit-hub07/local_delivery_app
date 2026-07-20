import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { VendorCustomersWhereUniqueInputSchema } from './VendorCustomersWhereUniqueInputSchema';
import { VendorCustomersUpdateWithoutVendorInputSchema } from './VendorCustomersUpdateWithoutVendorInputSchema';
import { VendorCustomersUncheckedUpdateWithoutVendorInputSchema } from './VendorCustomersUncheckedUpdateWithoutVendorInputSchema';
import { VendorCustomersCreateWithoutVendorInputSchema } from './VendorCustomersCreateWithoutVendorInputSchema';
import { VendorCustomersUncheckedCreateWithoutVendorInputSchema } from './VendorCustomersUncheckedCreateWithoutVendorInputSchema';

export const VendorCustomersUpsertWithWhereUniqueWithoutVendorInputSchema: z.ZodType<Prisma.VendorCustomersUpsertWithWhereUniqueWithoutVendorInput> = z.strictObject({
  where: z.lazy(() => VendorCustomersWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => VendorCustomersUpdateWithoutVendorInputSchema), z.lazy(() => VendorCustomersUncheckedUpdateWithoutVendorInputSchema) ]),
  create: z.union([ z.lazy(() => VendorCustomersCreateWithoutVendorInputSchema), z.lazy(() => VendorCustomersUncheckedCreateWithoutVendorInputSchema) ]),
});

export default VendorCustomersUpsertWithWhereUniqueWithoutVendorInputSchema;
