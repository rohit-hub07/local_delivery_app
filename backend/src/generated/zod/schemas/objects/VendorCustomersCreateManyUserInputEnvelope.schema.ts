import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VendorCustomersCreateManyUserInputObjectSchema as VendorCustomersCreateManyUserInputObjectSchema } from './VendorCustomersCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => VendorCustomersCreateManyUserInputObjectSchema), z.lazy(() => VendorCustomersCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const VendorCustomersCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.VendorCustomersCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.VendorCustomersCreateManyUserInputEnvelope>;
export const VendorCustomersCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
