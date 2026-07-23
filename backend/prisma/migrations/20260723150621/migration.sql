/*
  Warnings:

  - The `type` column on the `Requests` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `unit` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ProductUnit" AS ENUM ('PIECE', 'PACKET', 'BOTTLE', 'LITRE', 'ML', 'KG', 'GRAM', 'DOZEN');

-- CreateEnum
CREATE TYPE "RequestType" AS ENUM ('NOTE', 'SKIP', 'INCREASE', 'DECREASE');

-- AlterTable
ALTER TABLE "CustomerSubscription" ALTER COLUMN "startDate" SET DATA TYPE TIMESTAMP(3),
ALTER COLUMN "dailyQuantity" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "unit" "ProductUnit" NOT NULL;

-- AlterTable
ALTER TABLE "Requests" DROP COLUMN "type",
ADD COLUMN     "type" "RequestType" NOT NULL DEFAULT 'NOTE';
