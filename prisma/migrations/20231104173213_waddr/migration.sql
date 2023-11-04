/*
  Warnings:

  - You are about to drop the column `wallet_address` on the `account` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `account` DROP COLUMN `wallet_address`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `wallet_address` VARCHAR(191) NULL;
