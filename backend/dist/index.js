import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import vendorRouter from "./routes/vendor.routes.js";
import productRouter from "./routes/product.routes.js";
import vendorCustomers from "./routes/vendor.customers.routes.js";
import customerSubscriptionRouter from "./routes/customers.subscription.routes.js";
import requestRouter from "./routes/requests.routes.js";
dotenv.config();
const app = express();
const allowedOrigins = [
    'http://192.168.29.151:8081',
    'http://127.0.0.1:8081',
    'http://localhost:8081'
];
app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (origin && allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin);
        res.header('Vary', 'Origin');
    }
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});
app.use(express.json());
app.use(cookieParser());
const PORT = Number(process.env.PORT) || 5000;
const mountApiRoutes = (basePath) => {
    app.use(`${basePath}/auth`, userRouter);
    app.use(`${basePath}/vendor`, vendorRouter);
    app.use(`${basePath}/product`, productRouter);
    app.use(`${basePath}/customer`, vendorCustomers);
    app.use(`${basePath}/subscription`, customerSubscriptionRouter);
    app.use(`${basePath}/request`, requestRouter);
};
app.get("/", async (req, res) => {
    res.status(200).send("App is working");
});
mountApiRoutes("");
mountApiRoutes("/api");
app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
});
