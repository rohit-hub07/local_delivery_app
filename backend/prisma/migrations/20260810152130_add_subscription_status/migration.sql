-- CreateEnum
CREATE TYPE "SubscriptionStatus" AS ENUM ('ACTIVE', 'STOPPED');

-- AlterTable
ALTER TABLE "CustomerSubscription" ADD COLUMN     "status" "SubscriptionStatus" NOT NULL DEFAULT 'ACTIVE';
