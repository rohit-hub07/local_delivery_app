import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutVendorInputSchema } from './UserCreateWithoutVendorInputSchema';
import { UserUncheckedCreateWithoutVendorInputSchema } from './UserUncheckedCreateWithoutVendorInputSchema';

export const UserCreateOrConnectWithoutVendorInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutVendorInput> = z.strictObject({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutVendorInputSchema), z.lazy(() => UserUncheckedCreateWithoutVendorInputSchema) ]),
});

export default UserCreateOrConnectWithoutVendorInputSchema;
