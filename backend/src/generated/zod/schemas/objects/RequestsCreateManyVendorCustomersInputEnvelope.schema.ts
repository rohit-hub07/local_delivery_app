import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RequestsCreateManyVendorCustomersInputObjectSchema as RequestsCreateManyVendorCustomersInputObjectSchema } from './RequestsCreateManyVendorCustomersInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => RequestsCreateManyVendorCustomersInputObjectSchema), z.lazy(() => RequestsCreateManyVendorCustomersInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const RequestsCreateManyVendorCustomersInputEnvelopeObjectSchema: z.ZodType<Prisma.RequestsCreateManyVendorCustomersInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.RequestsCreateManyVendorCustomersInputEnvelope>;
export const RequestsCreateManyVendorCustomersInputEnvelopeObjectZodSchema = makeSchema();
