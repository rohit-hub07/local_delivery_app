-- AlterTable
ALTER TABLE "CustomerSubscription" ADD COLUMN     "startDate" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "dailyQuantity" DECIMAL(10,2) NOT NULL DEFAULT '1';

UPDATE "CustomerSubscription" SET "startDate" = "createdAt" WHERE "startDate" = CURRENT_TIMESTAMP;

ALTER TABLE "CustomerSubscription" ALTER COLUMN "startDate" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Requests" ADD COLUMN     "requestedQuantity" DECIMAL(10,2);
