/*
Navicat MySQL Data Transfer

Source Server         : todo
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : todo_dev

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2021-03-27 17:40:30
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `sequelizemeta`
-- ----------------------------
DROP TABLE IF EXISTS `sequelizemeta`;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of sequelizemeta
-- ----------------------------
INSERT INTO `sequelizemeta` VALUES ('20210325072847-create-task.js');
INSERT INTO `sequelizemeta` VALUES ('20210325073502-create-task.js');
INSERT INTO `sequelizemeta` VALUES ('20210325084759-create-task.js');
INSERT INTO `sequelizemeta` VALUES ('20210325085353-create-task.js');
INSERT INTO `sequelizemeta` VALUES ('20210325085637-create-task.js');
INSERT INTO `sequelizemeta` VALUES ('20210326075711-create-task.js');

-- ----------------------------
-- Table structure for `tasks`
-- ----------------------------
DROP TABLE IF EXISTS `tasks`;
CREATE TABLE `tasks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `value` varchar(255) DEFAULT NULL,
  `done` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of tasks
-- ----------------------------
