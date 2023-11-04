/*
  Warnings:

  - You are about to drop the `airdrop` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `daily_task` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `follow` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `like` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `referral` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `spin` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `airdrop`;

-- DropTable
DROP TABLE `daily_task`;

-- DropTable
DROP TABLE `follow`;

-- DropTable
DROP TABLE `like`;

-- DropTable
DROP TABLE `post`;

-- DropTable
DROP TABLE `referral`;

-- DropTable
DROP TABLE `spin`;

-- CreateIndex
CREATE INDEX `account_user_id_idx` ON `account`(`user_id`);

-- CreateIndex
CREATE INDEX `session_user_id_idx` ON `session`(`user_id`);
