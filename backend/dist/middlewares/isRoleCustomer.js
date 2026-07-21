export const isRoleCustomer = async (req, res, next) => {
    const user = req.user;
    if (user?.role !== "CUSTOMER") {
        return res.status(403).json({
            message: "You are not allowed to perform this action!",
            success: false
        });
    }
    next();
};
//# sourceMappingURL=isRoleCustomer.js.map