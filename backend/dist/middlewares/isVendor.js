import { db } from "../libs/db.js";
export const isVendor = async (req, res, next) => {
    const user = req.user;
    if (!user) {
        return res.status(401).json({
            message: "Please login first!",
            success: false,
        });
    }
    const vendor = await db.vendor.findUnique({
        where: {
            userId: user?.id,
        },
    });
    if (!vendor) {
        return res.status(404).json({
            message: "Please login with your vendor profile!",
            success: false,
        });
    }
    req.vendor = vendor;
    next();
};
//# sourceMappingURL=isVendor.js.map