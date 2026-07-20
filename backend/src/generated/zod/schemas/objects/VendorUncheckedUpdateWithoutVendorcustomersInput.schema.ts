import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ProductUncheckedUpdateManyWithoutVendorNestedInputObjectSchema as ProductUncheckedUpdateManyWithoutVendorNestedInputObjectSchema } from './ProductUncheckedUpdateManyWithoutVendorNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  businessName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  businessPhone: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  product: z.lazy(() => ProductUncheckedUpdateManyWithoutVendorNestedInputObjectSchema).optional()
}).strict();
export const VendorUncheckedUpdateWithoutVendorcustomersInputObjectSchema: z.ZodType<Prisma.VendorUncheckedUpdateWithoutVendorcustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.VendorUncheckedUpdateWithoutVendorcustomersInput>;
export const VendorUncheckedUpdateWithoutVendorcustomersInputObjectZodSchema = makeSchema();
