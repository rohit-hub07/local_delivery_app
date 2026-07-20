import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutVendorcustomersInputSchema } from './UserUpdateWithoutVendorcustomersInputSchema';
import { UserUncheckedUpdateWithoutVendorcustomersInputSchema } from './UserUncheckedUpdateWithoutVendorcustomersInputSchema';

export const UserUpdateToOneWithWhereWithoutVendorcustomersInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutVendorcustomersInput> = z.strictObject({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutVendorcustomersInputSchema), z.lazy(() => UserUncheckedUpdateWithoutVendorcustomersInputSchema) ]),
});

export default UserUpdateToOneWithWhereWithoutVendorcustomersInputSchema;
