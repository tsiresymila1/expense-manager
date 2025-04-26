/*
  Warnings:

  - A unique constraint covering the columns `[key]` on the table `setting` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "setting_key_key" ON "setting"("key");
