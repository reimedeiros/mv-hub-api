-- CreateTable
CREATE TABLE `Users` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `avatarUrl` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `role` ENUM('ADMIN', 'USER') NOT NULL DEFAULT 'USER',
    `lastLogin` DATETIME(3) NULL,
    `failedLogins` INTEGER NOT NULL DEFAULT 0,
    `emailVerified` DATETIME(3) NULL,
    `verificationToken` VARCHAR(191) NULL,
    `resetPasswordToken` VARCHAR(191) NULL,
    `resetPasswordExpires` DATETIME(3) NULL,
    `lastIp` VARCHAR(191) NULL,
    `registeredIp` VARCHAR(191) NULL,
    `deletedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Users_email_key`(`email`),
    UNIQUE INDEX `Users_username_key`(`username`),
    UNIQUE INDEX `Users_cpf_key`(`cpf`),
    UNIQUE INDEX `Users_verificationToken_key`(`verificationToken`),
    UNIQUE INDEX `Users_resetPasswordToken_key`(`resetPasswordToken`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Establishment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cnes` CHAR(7) NOT NULL,
    `cnpj` CHAR(14) NOT NULL,
    `tradeName` VARCHAR(255) NOT NULL,
    `corporateName` VARCHAR(255) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `zipCode` CHAR(8) NOT NULL,
    `directorCpf` CHAR(11) NOT NULL,
    `classificationId` INTEGER NOT NULL,
    `mainActivityId` VARCHAR(191) NULL,
    `secondaryActivityId` VARCHAR(191) NULL,
    `susSystem` BOOLEAN NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EstablishmentClassification` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(500) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Activity` (
    `id` VARCHAR(2) NOT NULL,
    `activity` VARCHAR(100) NOT NULL,
    `description` VARCHAR(3000) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Establishment` ADD CONSTRAINT `Establishment_classificationId_fkey` FOREIGN KEY (`classificationId`) REFERENCES `EstablishmentClassification`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Establishment` ADD CONSTRAINT `Establishment_mainActivityId_fkey` FOREIGN KEY (`mainActivityId`) REFERENCES `Activity`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Establishment` ADD CONSTRAINT `Establishment_secondaryActivityId_fkey` FOREIGN KEY (`secondaryActivityId`) REFERENCES `Activity`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
