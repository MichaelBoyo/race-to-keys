/*
  Warnings:

  - You are about to drop the column `created_at` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `email_verified` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `hasClaimedFreeSpin` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `hasClaimedFreeSpinJacob` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `hasCompletedReferral` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `is_banned` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `is_created` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `withdrawAddress` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `verification_token` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `created_at`,
    DROP COLUMN `email_verified`,
    DROP COLUMN `hasClaimedFreeSpin`,
    DROP COLUMN `hasClaimedFreeSpinJacob`,
    DROP COLUMN `hasCompletedReferral`,
    DROP COLUMN `is_banned`,
    DROP COLUMN `is_created`,
    DROP COLUMN `withdrawAddress`;

-- DropTable
DROP TABLE `verification_token`;
