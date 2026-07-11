// 1. Target the folder containing your generated client.ts
import { PrismaClient } from "../generated/prisma/client.js"; 
// 2. Import the required driver adapter
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

// 3. Setup the PostgreSQL Connection Pool
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});
const adapter = new PrismaPg(pool);

declare global {
  var prisma: PrismaClient | undefined;
}

const globalForPrisma = globalThis as typeof globalThis & {
  prisma?: PrismaClient;
};

// 4. Instantiate the client using the adapter
export const db = globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}
