/*
  Warnings:

  - The values [NOTE] on the enum `RequestType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "RequestType_new" AS ENUM ('SKIP', 'INCREASE', 'DECREASE');
ALTER TABLE "public"."Requests" ALTER COLUMN "type" DROP DEFAULT;
ALTER TABLE "Requests" ALTER COLUMN "type" TYPE "RequestType_new" USING ("type"::text::"RequestType_new");
ALTER TYPE "RequestType" RENAME TO "RequestType_old";
ALTER TYPE "RequestType_new" RENAME TO "RequestType";
DROP TYPE "public"."RequestType_old";
ALTER TABLE "Requests" ALTER COLUMN "type" SET DEFAULT 'SKIP';
COMMIT;

-- AlterTable
ALTER TABLE "Requests" ALTER COLUMN "type" SET DEFAULT 'SKIP';
