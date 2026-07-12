import { z } from 'zod';
/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////
/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////
export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted', 'ReadCommitted', 'RepeatableRead', 'Serializable']);
export const UserScalarFieldEnumSchema = z.enum(['id', 'name', 'phone', 'password', 'role', 'createdAt', 'updatedAt']);
export const SortOrderSchema = z.enum(['asc', 'desc']);
export const QueryModeSchema = z.enum(['default', 'insensitive']);
export const RoleSchema = z.enum(['CUSTOMER', 'VENDOR']).default("CUSTOMER");
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////
/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////
export const UserSchema = z.object({
    role: RoleSchema,
    id: z.uuid(),
    name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
    phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
});
/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////
// USER
//------------------------------------------------------
export const UserSelectSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    phone: z.boolean().optional(),
    password: z.boolean().optional(),
    role: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
}).strict();
/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////
export const UserWhereInputSchema = z.strictObject({
    AND: z.union([z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => UserWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    phone: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    password: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    role: z.union([z.lazy(() => EnumRoleFilterSchema), z.lazy(() => RoleSchema)]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
});
export const UserOrderByWithRelationInputSchema = z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    phone: z.lazy(() => SortOrderSchema).optional(),
    password: z.lazy(() => SortOrderSchema).optional(),
    role: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
});
export const UserWhereUniqueInputSchema = z.union([
    z.object({
        id: z.uuid(),
        phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format" }),
    }),
    z.object({
        id: z.uuid(),
    }),
    z.object({
        phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format" }),
    }),
])
    .and(z.strictObject({
    id: z.uuid().optional(),
    phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format" }).optional(),
    AND: z.union([z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => UserWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array()]).optional(),
    name: z.union([z.lazy(() => StringFilterSchema), z.string().min(2, { message: "Name must be at least 2 characters long" })]).optional(),
    password: z.union([z.lazy(() => StringFilterSchema), z.string().min(8, { message: "Password must be at least 8 characters long" })]).optional(),
    role: z.union([z.lazy(() => EnumRoleFilterSchema), z.lazy(() => RoleSchema)]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
}));
export const UserOrderByWithAggregationInputSchema = z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    phone: z.lazy(() => SortOrderSchema).optional(),
    password: z.lazy(() => SortOrderSchema).optional(),
    role: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
    _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
    _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional(),
});
export const UserScalarWhereWithAggregatesInputSchema = z.strictObject({
    AND: z.union([z.lazy(() => UserScalarWhereWithAggregatesInputSchema), z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array()]).optional(),
    OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => UserScalarWhereWithAggregatesInputSchema), z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    phone: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    password: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    role: z.union([z.lazy(() => EnumRoleWithAggregatesFilterSchema), z.lazy(() => RoleSchema)]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
});
export const UserCreateInputSchema = z.strictObject({
    id: z.uuid().optional(),
    name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
    phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
    role: z.lazy(() => RoleSchema).optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
});
export const UserUncheckedCreateInputSchema = z.strictObject({
    id: z.uuid().optional(),
    name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
    phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
    role: z.lazy(() => RoleSchema).optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
});
export const UserUpdateInputSchema = z.strictObject({
    id: z.union([z.uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string().min(2, { message: "Name must be at least 2 characters long" }), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    phone: z.union([z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format" }), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    password: z.union([z.string().min(8, { message: "Password must be at least 8 characters long" }), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    role: z.union([z.lazy(() => RoleSchema), z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
});
export const UserUncheckedUpdateInputSchema = z.strictObject({
    id: z.union([z.uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string().min(2, { message: "Name must be at least 2 characters long" }), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    phone: z.union([z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format" }), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    password: z.union([z.string().min(8, { message: "Password must be at least 8 characters long" }), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    role: z.union([z.lazy(() => RoleSchema), z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
});
export const UserCreateManyInputSchema = z.strictObject({
    id: z.uuid().optional(),
    name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
    phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
    role: z.lazy(() => RoleSchema).optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
});
export const UserUpdateManyMutationInputSchema = z.strictObject({
    id: z.union([z.uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string().min(2, { message: "Name must be at least 2 characters long" }), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    phone: z.union([z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format" }), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    password: z.union([z.string().min(8, { message: "Password must be at least 8 characters long" }), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    role: z.union([z.lazy(() => RoleSchema), z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
});
export const UserUncheckedUpdateManyInputSchema = z.strictObject({
    id: z.union([z.uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string().min(2, { message: "Name must be at least 2 characters long" }), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    phone: z.union([z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format" }), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    password: z.union([z.string().min(8, { message: "Password must be at least 8 characters long" }), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    role: z.union([z.lazy(() => RoleSchema), z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
});
export const StringFilterSchema = z.strictObject({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    mode: z.lazy(() => QueryModeSchema).optional(),
    not: z.union([z.string(), z.lazy(() => NestedStringFilterSchema)]).optional(),
});
export const EnumRoleFilterSchema = z.strictObject({
    equals: z.lazy(() => RoleSchema).optional(),
    in: z.lazy(() => RoleSchema).array().optional(),
    notIn: z.lazy(() => RoleSchema).array().optional(),
    not: z.union([z.lazy(() => RoleSchema), z.lazy(() => NestedEnumRoleFilterSchema)]).optional(),
});
export const DateTimeFilterSchema = z.strictObject({
    equals: z.coerce.date().optional(),
    in: z.coerce.date().array().optional(),
    notIn: z.coerce.date().array().optional(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z.union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)]).optional(),
});
export const UserCountOrderByAggregateInputSchema = z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    phone: z.lazy(() => SortOrderSchema).optional(),
    password: z.lazy(() => SortOrderSchema).optional(),
    role: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
});
export const UserMaxOrderByAggregateInputSchema = z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    phone: z.lazy(() => SortOrderSchema).optional(),
    password: z.lazy(() => SortOrderSchema).optional(),
    role: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
});
export const UserMinOrderByAggregateInputSchema = z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    phone: z.lazy(() => SortOrderSchema).optional(),
    password: z.lazy(() => SortOrderSchema).optional(),
    role: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
});
export const StringWithAggregatesFilterSchema = z.strictObject({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    mode: z.lazy(() => QueryModeSchema).optional(),
    not: z.union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedStringFilterSchema).optional(),
    _max: z.lazy(() => NestedStringFilterSchema).optional(),
});
export const EnumRoleWithAggregatesFilterSchema = z.strictObject({
    equals: z.lazy(() => RoleSchema).optional(),
    in: z.lazy(() => RoleSchema).array().optional(),
    notIn: z.lazy(() => RoleSchema).array().optional(),
    not: z.union([z.lazy(() => RoleSchema), z.lazy(() => NestedEnumRoleWithAggregatesFilterSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedEnumRoleFilterSchema).optional(),
    _max: z.lazy(() => NestedEnumRoleFilterSchema).optional(),
});
export const DateTimeWithAggregatesFilterSchema = z.strictObject({
    equals: z.coerce.date().optional(),
    in: z.coerce.date().array().optional(),
    notIn: z.coerce.date().array().optional(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z.union([z.coerce.date(), z.lazy(() => NestedDateTimeWithAggregatesFilterSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
    _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
});
export const StringFieldUpdateOperationsInputSchema = z.strictObject({
    set: z.string().optional(),
});
export const EnumRoleFieldUpdateOperationsInputSchema = z.strictObject({
    set: z.lazy(() => RoleSchema).optional(),
});
export const DateTimeFieldUpdateOperationsInputSchema = z.strictObject({
    set: z.coerce.date().optional(),
});
export const NestedStringFilterSchema = z.strictObject({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    not: z.union([z.string(), z.lazy(() => NestedStringFilterSchema)]).optional(),
});
export const NestedEnumRoleFilterSchema = z.strictObject({
    equals: z.lazy(() => RoleSchema).optional(),
    in: z.lazy(() => RoleSchema).array().optional(),
    notIn: z.lazy(() => RoleSchema).array().optional(),
    not: z.union([z.lazy(() => RoleSchema), z.lazy(() => NestedEnumRoleFilterSchema)]).optional(),
});
export const NestedDateTimeFilterSchema = z.strictObject({
    equals: z.coerce.date().optional(),
    in: z.coerce.date().array().optional(),
    notIn: z.coerce.date().array().optional(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z.union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)]).optional(),
});
export const NestedStringWithAggregatesFilterSchema = z.strictObject({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    not: z.union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedStringFilterSchema).optional(),
    _max: z.lazy(() => NestedStringFilterSchema).optional(),
});
export const NestedIntFilterSchema = z.strictObject({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional(),
});
export const NestedEnumRoleWithAggregatesFilterSchema = z.strictObject({
    equals: z.lazy(() => RoleSchema).optional(),
    in: z.lazy(() => RoleSchema).array().optional(),
    notIn: z.lazy(() => RoleSchema).array().optional(),
    not: z.union([z.lazy(() => RoleSchema), z.lazy(() => NestedEnumRoleWithAggregatesFilterSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedEnumRoleFilterSchema).optional(),
    _max: z.lazy(() => NestedEnumRoleFilterSchema).optional(),
});
export const NestedDateTimeWithAggregatesFilterSchema = z.strictObject({
    equals: z.coerce.date().optional(),
    in: z.coerce.date().array().optional(),
    notIn: z.coerce.date().array().optional(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z.union([z.coerce.date(), z.lazy(() => NestedDateTimeWithAggregatesFilterSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
    _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
});
/////////////////////////////////////////
// ARGS
/////////////////////////////////////////
export const UserFindFirstArgsSchema = z.object({
    select: UserSelectSchema.optional(),
    where: UserWhereInputSchema.optional(),
    orderBy: z.union([UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema]).optional(),
    cursor: UserWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional(),
}).strict();
export const UserFindFirstOrThrowArgsSchema = z.object({
    select: UserSelectSchema.optional(),
    where: UserWhereInputSchema.optional(),
    orderBy: z.union([UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema]).optional(),
    cursor: UserWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional(),
}).strict();
export const UserFindManyArgsSchema = z.object({
    select: UserSelectSchema.optional(),
    where: UserWhereInputSchema.optional(),
    orderBy: z.union([UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema]).optional(),
    cursor: UserWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional(),
}).strict();
export const UserAggregateArgsSchema = z.object({
    where: UserWhereInputSchema.optional(),
    orderBy: z.union([UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema]).optional(),
    cursor: UserWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export const UserGroupByArgsSchema = z.object({
    where: UserWhereInputSchema.optional(),
    orderBy: z.union([UserOrderByWithAggregationInputSchema.array(), UserOrderByWithAggregationInputSchema]).optional(),
    by: UserScalarFieldEnumSchema.array(),
    having: UserScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export const UserFindUniqueArgsSchema = z.object({
    select: UserSelectSchema.optional(),
    where: UserWhereUniqueInputSchema,
}).strict();
export const UserFindUniqueOrThrowArgsSchema = z.object({
    select: UserSelectSchema.optional(),
    where: UserWhereUniqueInputSchema,
}).strict();
export const UserCreateArgsSchema = z.object({
    select: UserSelectSchema.optional(),
    data: z.union([UserCreateInputSchema, UserUncheckedCreateInputSchema]),
}).strict();
export const UserUpsertArgsSchema = z.object({
    select: UserSelectSchema.optional(),
    where: UserWhereUniqueInputSchema,
    create: z.union([UserCreateInputSchema, UserUncheckedCreateInputSchema]),
    update: z.union([UserUpdateInputSchema, UserUncheckedUpdateInputSchema]),
}).strict();
export const UserCreateManyArgsSchema = z.object({
    data: z.union([UserCreateManyInputSchema, UserCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export const UserCreateManyAndReturnArgsSchema = z.object({
    data: z.union([UserCreateManyInputSchema, UserCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export const UserDeleteArgsSchema = z.object({
    select: UserSelectSchema.optional(),
    where: UserWhereUniqueInputSchema,
}).strict();
export const UserUpdateArgsSchema = z.object({
    select: UserSelectSchema.optional(),
    data: z.union([UserUpdateInputSchema, UserUncheckedUpdateInputSchema]),
    where: UserWhereUniqueInputSchema,
}).strict();
export const UserUpdateManyArgsSchema = z.object({
    data: z.union([UserUpdateManyMutationInputSchema, UserUncheckedUpdateManyInputSchema]),
    where: UserWhereInputSchema.optional(),
    limit: z.number().optional(),
}).strict();
export const UserUpdateManyAndReturnArgsSchema = z.object({
    data: z.union([UserUpdateManyMutationInputSchema, UserUncheckedUpdateManyInputSchema]),
    where: UserWhereInputSchema.optional(),
    limit: z.number().optional(),
}).strict();
export const UserDeleteManyArgsSchema = z.object({
    where: UserWhereInputSchema.optional(),
    limit: z.number().optional(),
}).strict();
