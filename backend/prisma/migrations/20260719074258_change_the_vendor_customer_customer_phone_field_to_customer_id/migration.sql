/*
  Warnings:

  - You are about to drop the column `customerPhone` on the `VendorCustomers` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[vendorId,customerId]` on the table `VendorCustomers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `customerId` to the `VendorCustomers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "VendorCustomers" DROP CONSTRAINT "VendorCustomers_customerPhone_fkey";

-- DropIndex
DROP INDEX "VendorCustomers_vendorId_customerPhone_key";

-- AlterTable
ALTER TABLE "VendorCustomers" DROP COLUMN "customerPhone",
ADD COLUMN     "customerId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "VendorCustomers_vendorId_customerId_key" ON "VendorCustomers"("vendorId", "customerId");

-- AddForeignKey
ALTER TABLE "VendorCustomers" ADD CONSTRAINT "VendorCustomers_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
