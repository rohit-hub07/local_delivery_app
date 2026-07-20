import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional(),
    vendorId: z.string(),
    customerPhone: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional()
}).strict();
export const VendorCustomersCreateManyUserInputObjectSchema = makeSchema();
export const VendorCustomersCreateManyUserInputObjectZodSchema = makeSchema();
