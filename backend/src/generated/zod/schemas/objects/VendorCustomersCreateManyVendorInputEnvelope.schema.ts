import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VendorCustomersCreateManyVendorInputObjectSchema as VendorCustomersCreateManyVendorInputObjectSchema } from './VendorCustomersCreateManyVendorInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => VendorCustomersCreateManyVendorInputObjectSchema), z.lazy(() => VendorCustomersCreateManyVendorInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const VendorCustomersCreateManyVendorInputEnvelopeObjectSchema: z.ZodType<Prisma.VendorCustomersCreateManyVendorInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.VendorCustomersCreateManyVendorInputEnvelope>;
export const VendorCustomersCreateManyVendorInputEnvelopeObjectZodSchema = makeSchema();
