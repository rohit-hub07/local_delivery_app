import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { VendorCustomersCreateWithoutVendorInputSchema } from './VendorCustomersCreateWithoutVendorInputSchema';
import { VendorCustomersUncheckedCreateWithoutVendorInputSchema } from './VendorCustomersUncheckedCreateWithoutVendorInputSchema';
import { VendorCustomersCreateOrConnectWithoutVendorInputSchema } from './VendorCustomersCreateOrConnectWithoutVendorInputSchema';
import { VendorCustomersCreateManyVendorInputEnvelopeSchema } from './VendorCustomersCreateManyVendorInputEnvelopeSchema';
import { VendorCustomersWhereUniqueInputSchema } from './VendorCustomersWhereUniqueInputSchema';

export const VendorCustomersUncheckedCreateNestedManyWithoutVendorInputSchema: z.ZodType<Prisma.VendorCustomersUncheckedCreateNestedManyWithoutVendorInput> = z.strictObject({
  create: z.union([ z.lazy(() => VendorCustomersCreateWithoutVendorInputSchema), z.lazy(() => VendorCustomersCreateWithoutVendorInputSchema).array(), z.lazy(() => VendorCustomersUncheckedCreateWithoutVendorInputSchema), z.lazy(() => VendorCustomersUncheckedCreateWithoutVendorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VendorCustomersCreateOrConnectWithoutVendorInputSchema), z.lazy(() => VendorCustomersCreateOrConnectWithoutVendorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VendorCustomersCreateManyVendorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => VendorCustomersWhereUniqueInputSchema), z.lazy(() => VendorCustomersWhereUniqueInputSchema).array() ]).optional(),
});

export default VendorCustomersUncheckedCreateNestedManyWithoutVendorInputSchema;
