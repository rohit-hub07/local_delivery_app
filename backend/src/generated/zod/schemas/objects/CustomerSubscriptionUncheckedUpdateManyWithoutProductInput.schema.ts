import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  vendorCustomerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const CustomerSubscriptionUncheckedUpdateManyWithoutProductInputObjectSchema: z.ZodType<Prisma.CustomerSubscriptionUncheckedUpdateManyWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerSubscriptionUncheckedUpdateManyWithoutProductInput>;
export const CustomerSubscriptionUncheckedUpdateManyWithoutProductInputObjectZodSchema = makeSchema();
