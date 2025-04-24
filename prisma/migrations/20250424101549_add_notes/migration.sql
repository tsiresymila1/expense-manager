-- AlterTable
ALTER TABLE "expense" ADD COLUMN     "notes" TEXT,
ADD COLUMN     "payment" TEXT DEFAULT 'Cash';
