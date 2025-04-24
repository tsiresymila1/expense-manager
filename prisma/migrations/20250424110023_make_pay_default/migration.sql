/*
  Warnings:

  - Made the column `payment` on table `expense` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "expense" ALTER COLUMN "payment" SET NOT NULL;
