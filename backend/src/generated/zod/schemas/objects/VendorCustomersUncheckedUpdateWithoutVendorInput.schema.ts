import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CustomerSubscriptionUncheckedUpdateManyWithoutVendorCustomersNestedInputObjectSchema as CustomerSubscriptionUncheckedUpdateManyWithoutVendorCustomersNestedInputObjectSchema } from './CustomerSubscriptionUncheckedUpdateManyWithoutVendorCustomersNestedInput.schema';
import { RequestsUncheckedUpdateManyWithoutVendorCustomersNestedInputObjectSchema as RequestsUncheckedUpdateManyWithoutVendorCustomersNestedInputObjectSchema } from './RequestsUncheckedUpdateManyWithoutVendorCustomersNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  customerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  customerPhone: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  subscription: z.lazy(() => CustomerSubscriptionUncheckedUpdateManyWithoutVendorCustomersNestedInputObjectSchema).optional(),
  request: z.lazy(() => RequestsUncheckedUpdateManyWithoutVendorCustomersNestedInputObjectSchema).optional()
}).strict();
export const VendorCustomersUncheckedUpdateWithoutVendorInputObjectSchema: z.ZodType<Prisma.VendorCustomersUncheckedUpdateWithoutVendorInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorCustomersUncheckedUpdateWithoutVendorInput>;
export const VendorCustomersUncheckedUpdateWithoutVendorInputObjectZodSchema = makeSchema();
