-- CreateTable
CREATE TABLE `account` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `provider` VARCHAR(191) NOT NULL,
    `provider_account_id` VARCHAR(191) NOT NULL,
    `refresh_token` TEXT NULL,
    `access_token` TEXT NULL,
    `expires_at` INTEGER NULL,
    `token_type` VARCHAR(191) NULL,
    `scope` VARCHAR(191) NULL,
    `id_token` TEXT NULL,
    `session_state` VARCHAR(191) NULL,

    UNIQUE INDEX `account_provider_provider_account_id_key`(`provider`, `provider_account_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `session` (
    `id` VARCHAR(191) NOT NULL,
    `session_token` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `session_session_token_key`(`session_token`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `verification_token` (
    `identifier` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `verification_token_token_key`(`token`),
    UNIQUE INDEX `verification_token_identifier_token_key`(`identifier`, `token`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `email_verified` DATETIME(3) NULL,
    `username` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `privateKey` VARCHAR(191) NOT NULL,
    `withdrawAddress` VARCHAR(191) NULL,
    `hasCompletedReferral` BOOLEAN NOT NULL DEFAULT false,
    `is_created` BOOLEAN NOT NULL DEFAULT false,
    `is_banned` BOOLEAN NOT NULL DEFAULT false,
    `hasClaimedFreeSpin` BOOLEAN NOT NULL DEFAULT false,
    `hasClaimedFreeSpinJacob` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `user_email_key`(`email`),
    UNIQUE INDEX `user_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `referral` (
    `referrer_id` VARCHAR(191) NOT NULL,
    `referred_by_id` VARCHAR(191) NOT NULL,
    `is_claimed` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `referral_referrer_id_key`(`referrer_id`),
    INDEX `referral_referred_by_id_idx`(`referred_by_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `follow` (
    `id` VARCHAR(191) NOT NULL,
    `follower_id` VARCHAR(191) NOT NULL,
    `following_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `follow_follower_id_idx`(`follower_id`),
    INDEX `follow_following_id_idx`(`following_id`),
    UNIQUE INDEX `follow_follower_id_following_id_key`(`follower_id`, `following_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `post` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `body` VARCHAR(191) NOT NULL,
    `is_comment` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `post_user_id_idx`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `like` (
    `id` VARCHAR(191) NOT NULL,
    `sender_id` VARCHAR(191) NOT NULL,
    `recipient_id` VARCHAR(191) NOT NULL,
    `contract_post_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `like_sender_id_idx`(`sender_id`),
    INDEX `like_recipient_id_idx`(`recipient_id`),
    UNIQUE INDEX `like_sender_id_recipient_id_contract_post_id_key`(`sender_id`, `recipient_id`, `contract_post_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `spin` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `prize` INTEGER NULL,
    `has_spun` BOOLEAN NOT NULL DEFAULT false,
    `spun_at` DATETIME(3) NULL,
    `tx_hash` VARCHAR(191) NULL,
    `has_exchanged` BOOLEAN NOT NULL DEFAULT false,

    INDEX `spin_user_id_idx`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `daily_task` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `daily_task_user_id_idx`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `airdrop` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `airdrop_user_id_idx`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
