import express from "express"
import { Request, Response } from "express";
import dotenv from "dotenv"
import userRouter from "./routes/user.routes.js";
import cookieParser from "cookie-parser"
import vendorRouter from "./routes/vendor.routes.js";
import productRouter from "./routes/product.routes.js";
import vendorCustomers from "./routes/vendor.customers.routes.js";
import customerSubscriptionRouter from "./routes/customers.subscription.routes.js";
import requestRouter from "./routes/requests.routes.js";
import cors from "cors"
import { Server } from "socket.io"
import http from "http"
import pushRouter from "./routes/push.notification.routes.js";
import otpRouter from "./routes/otp.routes.js";

dotenv.config();

const app = express();
const server = http.createServer(app)
const io = new Server(server, { cors: { origin: "*" } })

io.on('connection', (socket) => {
  socket.on('join_room', (userId) => {
    console.log("-------------------")
    console.log(`User: ${userId} joined room`)
    console.log("-------------------")
    socket.join(String(userId))
    
  })
})


app.use((req, res, next) => {
  req.io = io;
  next();
});


// hard coded apis for develeopment will change this once the app is ready
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
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  next();
});



app.use(express.json())
app.use(cookieParser())


const PORT = Number(process.env.PORT) || 5000;

app.get("/", async (req: Request, res: Response) => {
  res.status(200).send("App is working")
})

app.get("/privacy-policy", (req: Request, res: Response) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.status(200).send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Privacy Policy - Oaagya</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #222; max-width: 800px; margin: 0 auto; padding: 24px 16px; background-color: #fafafa; }
    .card { background: #ffffff; padding: 32px 24px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
    h1 { color: #111; font-size: 28px; margin-bottom: 4px; }
    h2 { color: #2563eb; font-size: 20px; margin-top: 28px; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px; }
    h3 { font-size: 16px; margin-top: 16px; color: #374151; }
    p, li { color: #4b5563; font-size: 15px; }
    ul { padding-left: 20px; }
    .meta { color: #6b7280; font-size: 14px; margin-bottom: 24px; }
    .highlight { background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 12px 16px; border-radius: 4px; margin: 16px 0; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Privacy Policy for Oaagya</h1>
    <div class="meta">Last updated: November 14, 2026</div>

    <p>Welcome to <strong>Oaagya</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our mobile application (<strong>Oaagya</strong>) and associated delivery and customer-management services.</p>

    <h2>1. Information We Collect</h2>
    <h3>A. Personal Information Provided by You</h3>
    <ul>
      <li><strong>User Identity &amp; Contact:</strong> Full Name, Phone Number, and Physical Delivery Address. Phone numbers are used as your primary account identifier and for authentication.</li>
      <li><strong>Vendor Details (for Vendors):</strong> Business name, business phone number, product catalog (pricing, units, descriptions), and optional shop/profile image.</li>
      <li><strong>Customer Subscriptions &amp; Orders:</strong> Subscription items, daily quantities, delivery dates, and adjustment requests (skip, pause, increase, decrease).</li>
      <li><strong>Communication &amp; Verification:</strong> SMS verification codes (OTP) used to verify your phone number.</li>
    </ul>

    <h3>B. Device Permissions &amp; Technical Information</h3>
    <ul>
      <li><strong>Photos &amp; Camera:</strong> Accessed only with your explicit permission when vendors upload a profile or shop image.</li>
      <li><strong>Push Notification Token:</strong> We collect an Expo / Firebase Cloud Messaging (FCM) device push token to send transactional delivery and order notifications.</li>
      <li><strong>Device Diagnostics:</strong> Basic device type, operating system version, and crash data to ensure application reliability.</li>
    </ul>

    <h2>2. How We Use Your Information</h2>
    <ul>
      <li>To verify your identity and manage role-based accounts (Customer vs. Vendor).</li>
      <li>To connect customers with local vendors for scheduled deliveries.</li>
      <li>To send real-time alerts regarding subscription changes, request approvals, and deliveries.</li>
      <li>To generate delivery tracking and billing summaries.</li>
      <li>To prevent fraud, protect system integrity, and provide customer support.</li>
    </ul>
    <div class="highlight">
      <strong>No Third-Party Sale:</strong> We do not sell, rent, or trade your personal information to third-party advertisers.
    </div>

    <h2>3. Information Sharing and Third Parties</h2>
    <p>Your information is only shared:</p>
    <ul>
      <li><strong>Between Customer and Vendor:</strong> Necessary delivery details (name, delivery address, phone number, and items) are shared with the specific vendor you subscribe to.</li>
      <li><strong>Service Providers:</strong> Google Firebase Cloud Messaging / Expo (push notifications), Cloudinary (image hosting), Neon / PostgreSQL (database), and SMS delivery providers for OTPs.</li>
      <li><strong>Legal Requirements:</strong> If required by applicable law, court order, or governmental authority.</li>
    </ul>

    <h2>4. Data Retention and Security</h2>
    <p>We implement industry-standard encryption (HTTPS/TLS in transit) and tokenized authentication (JWT) to safeguard your data. We retain personal information for as long as your account remains active or as needed to maintain your subscription records.</p>

    <h2>5. Account &amp; Data Deletion (User Rights)</h2>
    <p>You have full control over your information:</p>
    <ul>
      <li>You can update your name and address directly from the Profile section of the app.</li>
      <li><strong>Data Deletion Request:</strong> You can request permanent deletion of your account and all associated personal data by emailing <strong>contactus.helpinghandstech@zohomail.in
</strong> with your registered phone number. Your data will be deleted within 30 days.</li>
    </ul>

    <h2>6. Children's Privacy</h2>
    <p>Oaagya is not intended for use by children under the age of 13. We do not knowingly collect personal information from children.</p>

    <h2>7. Contact Us</h2>
    <p>If you have any questions or concerns regarding this Privacy Policy, please contact us at:</p>
    <ul>
      <li><strong>App Name:</strong> Oaagya</li>
      <li><strong>Email:</strong>contactus.helpinghandstech@zohomail.in
</li>
      <li><strong>Location:</strong> India</li>
    </ul>
  </div>
</body>
</html>`);
});

app.use("/auth", userRouter)
app.use("/vendor", vendorRouter)
app.use("/product", productRouter)
app.use("/customer", vendorCustomers)
app.use("/subscription", customerSubscriptionRouter)
app.use("/request", requestRouter)
app.use("/notification", pushRouter)
app.use("/otp", otpRouter)


server.listen(PORT, () => {
  console.log(`App is listening to port: ${PORT}`)
})





