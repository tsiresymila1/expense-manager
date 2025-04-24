/*
  Warnings:

  - A unique constraint covering the columns `[name,userId,value]` on the table `category` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "category_name_userId_key";

-- CreateIndex
CREATE UNIQUE INDEX "category_name_userId_value_key" ON "category"("name", "userId", "value");
