# Local Delivery App

A full-stack mobile application connecting **customers** with **local vendors** for delivery-based subscriptions, requests, and order management.

---

## Architecture

```
frontend (React Native + Expo)
    ↓ HTTP / WebSocket
backend (Node.js + Express + TypeScript)
    ↓ ORM
PostgreSQL (Prisma)
```

## Tech Stack

### Frontend
- **Framework**: React Native + Expo SDK 57
- **Navigation**: React Navigation (Bottom Tabs + Native Stack)
- **State Management**: Zustand with AsyncStorage persistence
- **Networking**: Axios (`withCredentials: true`), Socket.io Client
- **Notifications**: `expo-notifications`, `expo-device`
- **Dev Client**: `expo-dev-client` (required for push notifications + custom native code)
- **Tunneling**: `@expo/ngrok` (bundled; used for local backend exposure)
- **UI Utilities**: lucide-react-native, react-native-safe-area-context, react-native-toast-message

### Backend
- **Runtime**: Node.js + Express + TypeScript
- **Database**: PostgreSQL via Prisma ORM
- **Real-time**: Socket.io
- **Authentication**: JWT with httpOnly cookies + cookie-parser
- **Validation**: Zod (with zod-prisma-types integration)
- **Push Notifications**: `expo-server-sdk` — sends notifications via Expo Push Notification service

---

## Project Structure

```
D:\internship\local_delivery_app\
├── backend/
│   ├── prisma/
│   │   └── schema.prisma          # Database schema + Zod generator config
│   ├── src/
│   │   ├── controllers/           # Request handlers
│   │   ├── middlewares/            # Auth, role guards, profile checks
│   │   ├── routes/                 # Express route definitions
│   │   ├── services/               # Business logic
│   │   │   └── notification.service.ts  # Expo push notification sender
│   │   ├── libs/
│   │   │   └── db.ts               # Prisma client singleton
│   │   ├── generated/zod/          # Auto-generated Zod types from Prisma
│   │   └── index.ts                # App entry, CORS, Socket.io setup
│   ├── .env                        # Backend environment variables
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── axios.ts            # Axios instance (baseURL from EXPO_PUBLIC_BACKEND_URL)
│   │   ├── context/
│   │   │   ├── vendorContext/      # Zustand stores (Auth, Products, Requests, etc.)
│   │   │   └── customerContext/    # Customer-specific state
│   │   ├── context/websocket/
│   │   │   └── WebSocketStore.tsx  # Socket.io client — connects to EXPO_PUBLIC_BACKEND_URL
│   │   ├── navigation/
│   │   │   ├── RootNavigator.tsx   # Role-based routing (Auth / Customer / Vendor)
│   │   │   ├── AuthNavigator.tsx   # Login + Signup stack
│   │   │   ├── CustomerNavigator.tsx # Customer bottom tabs
│   │   │   └── VendorNavigator.tsx   # Vendor bottom tabs
│   │   └── screens/
│   │       ├── auth/
│   │       │   ├── LoginScreen.tsx
│   │       │   └── SignupScreen.tsx
│   │       ├── customer/           # Home, Vendor, Requests, Subscriptions, Profile
│   │       └── vendor/             # Home, Customers, My Products, Requests, Profile, Setup
│   │   └── services/
│   │       └── registerForPushToken.ts # Registers Expo push token with backend
│   ├── .env                        # Frontend environment variables (backend URL)
│   ├── App.tsx                     # SafeAreaProvider + NavigationContainer + Notifications listener
│   ├── app.json                    # Expo config (googleServicesFile, EAS projectId)
│   ├── eas.json                    # EAS build profiles (development, preview, production)
│   ├── google-services.json        # Firebase config for Android push notifications
│   └── package.json
│
└── readme.md
```

---

## Prerequisites

- Node.js >= 18
- PostgreSQL database
- Expo CLI (`npm install -g expo-cli`)
- EAS CLI (`npm install -g eas-cli`)
- Android Studio / Xcode (for mobile emulation)

---

## Getting Started

### 1. Clone the repository
```bash
git clone <repo-url>
cd local_delivery_app
```

### 2. Backend Setup
```bash
cd backend
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```
Backend runs on `http://localhost:4000` (or whatever `PORT` is set to in `backend/.env`).

### 3. Frontend Setup
```bash
cd frontend
npm install
npm start
```
Use **Expo Go** app or an emulator to view the app. For push notifications, a **development build** is required (see below).

---

## Environment Variables

### Backend `.env`
Create `backend/.env` using the fields below:

```env
PORT=4000
JWT_SECRET=your_jwt_secret_here_change_in_production
NODE_ENV=development

DATABASE_URL=postgresql://<USER>:<PASSWORD>@<HOST>:5432/<DB_NAME>?sslmode=require
```

**Fields:**
| Variable | Description |
|----------|-------------|
| `PORT` | Backend server port (default: `4000`) |
| `JWT_SECRET` | Secret key for signing JWTs |
| `NODE_ENV` | `development` or `production` |
| `DATABASE_URL` | PostgreSQL connection string |

### Frontend `.env`
Create `frontend/.env`. The single required variable is `EXPO_PUBLIC_BACKEND_URL`, which must point to the backend server. The value changes depending on where the backend is running:

```env
# ── Choose ONE based on your setup ──────────────────────────────────

# 1) Deployed backend (currently active)
EXPO_PUBLIC_BACKEND_URL=https://local-delivery-app-pk74.onrender.com

# 2) Local backend — physical device on same LAN
# EXPO_PUBLIC_BACKEND_URL=http://192.168.29.151:4000

# 3) Local backend — Android Studio AVD emulator
# EXPO_PUBLIC_BACKEND_URL=http://10.0.2.2:4000

# 4) Local backend — ngrok HTTPS tunnel (for physical device / Expo Go)
# EXPO_PUBLIC_BACKEND_URL=https://fading-tracing-decompose.ngrok-free.dev

# 5) Local backend — iOS simulator
# EXPO_PUBLIC_BACKEND_URL=http://localhost:4000
```

**Fields:**
| Variable | Description |
|----------|-------------|
| `EXPO_PUBLIC_BACKEND_URL` | Base URL of the backend. Used by Axios and Socket.io client. Must be reachable from the device/emulator. |

---

## Database (Prisma)

The Prisma schema (`backend/prisma/schema.prisma`) defines the data model:

- **User**: name, phone, address, role (`CUSTOMER` | `VENDOR`)
- **Vendor**: businessName, businessPhone, linked to User
- **Product**: productName, description, unit, belongs to Vendor
- **VendorCustomers**: vendor-customer relationship with unique constraint
- **CustomerSubscription**: dailyQuantity, product linkage
- **Requests**: type (`NOTE` | `SKIP` | `INCREASE` | `DECREASE`), status (`PENDING` | `ACCEPTED` | `REJECTED`), message, dates
- **PushToken**: token, platform (`ANDROID` | `IOS`), linked to User

After changing `schema.prisma`:
```bash
cd backend
npx prisma migrate dev --name <migration-name>
```

---

## App Flow

### Entry Point
`frontend/App.tsx`
- Wraps the app in `<SafeAreaProvider>` and `<NavigationContainer>`.
- Registers for Expo push notifications and listens for incoming notifications.

### Routing
`frontend/src/navigation/RootNavigator.tsx`
1. Reads auth state from **Zustand** (persisted in `AsyncStorage`).
2. **Unauthenticated** → `AuthNavigator` (Login / Signup).
3. **Customer** → `CustomerTabNavigator`:
   - Home, Vendor, Requests, Subscriptions, Profile.
4. **Vendor**:
   - If profile missing → `VendorSetUpScreen`.
   - Otherwise → `VendorTabNavigator`:
     - Home, Customers, My Products, Requests, Profile.

### Authentication
- Login/Signup sets cookies via backend `jsonwebtoken` + `cookie-parser`.
- Axios instance uses `withCredentials: true`.
- Auth state is persisted with Zustand + AsyncStorage.

### Role-Based Access
- Backend middlewares (`isRoleCustomer`, `isRoleVendor`, `isAuthenticated`) guard routes.
- Frontend navigators render different tab sets per role.

---

## API Routes Overview

| Method | Path | Description |
|--------|------|-------------|
| POST | `/auth/signup` | Create user + vendor/customer profile |
| POST | `/auth/login` | Phone-based login |
| POST | `/auth/logout` | Clear session cookies |
| GET | `/auth/me` | Get current authenticated user |
| POST | `/vendor/...` | Vendor profile operations |
| POST | `/product/...` | Product CRUD |
| GET | `/customer/...` | Customer-vendor relations |
| POST | `/subscription/...` | Subscription management |
| POST | `/request/...` | Customer requests (skip, increase, notes) |
| POST | `/notification/push-token` | Save Expo push token (authenticated) |
| DELETE | `/notification/push-token` | Delete Expo push token (authenticated) |
| POST | `/notification/send` | Send push notification to a user (authenticated) |

---

## Real-Time (Socket.io)

- **Socket.io** server is initialized in `backend/src/index.ts` with CORS open to all origins.
- Users join personal rooms keyed by `userId` via `socket.emit("join_room", userId)`.
- Frontend connects in `frontend/src/context/websocket/WebSocketStore.tsx` using `io(EXPO_PUBLIC_BACKEND_URL)`.
- Events handled by the frontend:
  - `Updated_Product_response` — vendor updates a product
  - `vendor_update_response` — vendor responds to a customer request
  - `new_request_created` — customer creates a new request
  - `update_vendor_product` — vendor deletes a product
  - `customer_subscribed_product` — customer subscribes to a product
  - `customer_unsubcribed_product` — customer stops a subscription
  - `customer_stopped_subscription_deleted` — vendor deletes a stopped subscription
  - `vendor_added_customer` — vendor adds a new customer
  - `customer_removed` — vendor removes a customer

---

## Push Notifications

### How It Works
1. On app launch, `frontend/src/services/registerForPushToken.ts` requests notification permissions and fetches an Expo push token.
2. The token is sent to `POST /notification/push-token` and stored in the `PushToken` table (Prisma model).
3. Backend uses `expo-server-sdk` (`backend/src/services/notification.service.ts`) to send push notifications to Expo's push notification service.
4. Notifications are triggered on key events: subscription changes, request accept/reject, etc.

### Requirements
- **Android**: `google-services.json` must be present in `frontend/` and referenced in `app.json` (`"googleServicesFile": "./google-services.json"`).
- **Development build**: Push notifications require a custom dev client build (`expo-dev-client`), not Expo Go.

---

## CORS

`backend/src/index.ts` has a hardcoded `allowedOrigins` list for development. Current entries:
- `http://192.168.29.151:8081`
- `http://127.0.0.1:8081`
- `http://localhost:8081`

Add any new ngrok or LAN origin there if CORS errors appear during development.

---

## EAS Build Configuration

`frontend/eas.json` defines three build profiles:
- **development**: `developmentClient: true`, channel `development`, Android APK — use for testing push notifications.
- **preview**: distribution `internal`, channel `preview`, Android APK — use for sharing test builds.
- **production**: `autoIncrement: true` — use for store releases.

EAS Project ID: `3f51a10f-b27e-45f1-8e75-3003ca298f8f` (configured in `app.json`).

---

## Scripts

### Backend
```bash
npm run dev   # Start with tsx watch
npm run build # Compile TypeScript
npm run start # Run compiled JS
```

### Frontend
```bash
npm start      # Start Expo dev server
npm run android # Open on Android emulator
npm run ios    # Open on iOS simulator
npm run web    # Open in browser
```

---

## Expo Push Notifications & EAS Build Setup

### 1. google-services.json
- Place your `google-services.json` file (from Firebase project) inside the `frontend/` directory.
- `app.json` already references it: `"googleServicesFile": "./google-services.json"`.
- This file is required for **Expo Notifications** to work on Android.

### 2. EAS Environment Variables
Add the `google-services.json` file to your EAS environment so it is bundled during development/production builds:

```bash
eas secret:create --name GOOGLE_SERVICES_JSON --value "$(cat frontend/google-services.json)"
```

Or add it via the EAS dashboard under **Project Settings > Environment Variables**.

### 3. Development Build for Push Notifications
Expo Go does not support push notifications. You must build a **development client**:

```bash
cd frontend
eas build --profile development --platform android
```

This produces an `.apk` that you install on your device. The dev client has `expo-dev-client` and `expo-notifications` baked in.

### 4. Ngrok for Local Backend
When running the backend locally and testing on a physical device, expose it via ngrok:

```bash
ngrok http 4000
```

Copy the HTTPS URL ngrok provides (e.g. `https://abc123.ngrok-free.app`).

Update `EXPO_PUBLIC_BACKEND_URL` in `frontend/.env` to the ngrok URL, then rebuild:

```bash
cd frontend
eas build --profile development --platform android
```

> Note: `@expo/ngrok` is already a dependency in `frontend/package.json`, so the Expo dev server can automatically tunnel to your local backend when using certain Expo configs.

---

## Notes

- The app is currently in **development** mode. Hardcoded allowed origins exist in `backend/src/index.ts` for CORS.
- Default backend port is `4000`. To run on a physical device or Expo Go, use **ngrok** to expose the backend and set `EXPO_PUBLIC_BACKEND_URL` to the ngrok HTTPS URL.
- Push notifications require a **development build** (not Expo Go) with the `google-services.json` file included via EAS environment variable `GOOGLE_SERVICES_JSON`.
- Ensure your PostgreSQL database is running and the connection string is correct before starting the backend.
- `expo-server-sdk` is used server-side to dispatch notifications through Expo's push notification service.
