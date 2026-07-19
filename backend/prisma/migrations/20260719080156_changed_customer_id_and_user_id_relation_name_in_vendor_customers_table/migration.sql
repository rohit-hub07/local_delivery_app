/*
  Warnings:

  - Added the required column `customerPhone` to the `VendorCustomers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "VendorCustomers" ADD COLUMN     "customerPhone" TEXT NOT NULL;
