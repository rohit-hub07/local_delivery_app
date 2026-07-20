import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RequestsCreateWithoutVendorCustomersInputSchema } from './RequestsCreateWithoutVendorCustomersInputSchema';
import { RequestsUncheckedCreateWithoutVendorCustomersInputSchema } from './RequestsUncheckedCreateWithoutVendorCustomersInputSchema';
import { RequestsCreateOrConnectWithoutVendorCustomersInputSchema } from './RequestsCreateOrConnectWithoutVendorCustomersInputSchema';
import { RequestsCreateManyVendorCustomersInputEnvelopeSchema } from './RequestsCreateManyVendorCustomersInputEnvelopeSchema';
import { RequestsWhereUniqueInputSchema } from './RequestsWhereUniqueInputSchema';

export const RequestsCreateNestedManyWithoutVendorCustomersInputSchema: z.ZodType<Prisma.RequestsCreateNestedManyWithoutVendorCustomersInput> = z.strictObject({
  create: z.union([ z.lazy(() => RequestsCreateWithoutVendorCustomersInputSchema), z.lazy(() => RequestsCreateWithoutVendorCustomersInputSchema).array(), z.lazy(() => RequestsUncheckedCreateWithoutVendorCustomersInputSchema), z.lazy(() => RequestsUncheckedCreateWithoutVendorCustomersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RequestsCreateOrConnectWithoutVendorCustomersInputSchema), z.lazy(() => RequestsCreateOrConnectWithoutVendorCustomersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RequestsCreateManyVendorCustomersInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RequestsWhereUniqueInputSchema), z.lazy(() => RequestsWhereUniqueInputSchema).array() ]).optional(),
});

export default RequestsCreateNestedManyWithoutVendorCustomersInputSchema;
