CREATE DATABASE  IF NOT EXISTS `eventspark` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `eventspark`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: eventspark
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `caters`
--

DROP TABLE IF EXISTS `caters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `caters` (
  `id` int NOT NULL AUTO_INCREMENT,
  `contact_number` varchar(10) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `speciality` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `caters`
--

LOCK TABLES `caters` WRITE;
/*!40000 ALTER TABLE `caters` DISABLE KEYS */;
INSERT INTO `caters` VALUES (1,'8007640748','Suraj Gandhele','Mix Veg'),(2,'8007310031','Annapurna Caterers','Gulabjamun'),(3,'9850885152','Sahil Catering\'s','PaneerAngara');
/*!40000 ALTER TABLE `caters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event`
--

DROP TABLE IF EXISTS `event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event` (
  `id` int NOT NULL AUTO_INCREMENT,
  `album` bit(1) NOT NULL,
  `crane` bit(1) NOT NULL,
  `customer_email` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `drone` bit(1) NOT NULL,
  `guest_count` int DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `photography` bit(1) NOT NULL,
  `progress` varchar(20) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `total_cost` double DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `videography` bit(1) NOT NULL,
  `cater_id` int DEFAULT NULL,
  `venue_id` int DEFAULT NULL,
  `studio_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKktry65gr2rhry5v24cqpqig8q` (`cater_id`),
  KEY `FKthgbmd6s6hp4l47kx1sh4cf9n` (`venue_id`),
  KEY `FKc7wt5l4yx3ssjkyajwqbrfwm8` (`studio_id`),
  CONSTRAINT `FKc7wt5l4yx3ssjkyajwqbrfwm8` FOREIGN KEY (`studio_id`) REFERENCES `studio` (`id`),
  CONSTRAINT `FKktry65gr2rhry5v24cqpqig8q` FOREIGN KEY (`cater_id`) REFERENCES `caters` (`id`),
  CONSTRAINT `FKthgbmd6s6hp4l47kx1sh4cf9n` FOREIGN KEY (`venue_id`) REFERENCES `venue` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event`
--

LOCK TABLES `event` WRITE;
/*!40000 ALTER TABLE `event` DISABLE KEYS */;
INSERT INTO `event` VALUES (1,_binary '\0',_binary '\0','chetanpatil123@gmail.com','2025-07-24',_binary '',500,'Wedding',_binary '\0',NULL,'Waiting For Payment',295000,'MARRIAGE',_binary '\0',2,3,2),(2,_binary '\0',_binary '\0','ashok@gmail.com','2024-08-14',_binary '\0',100,'engagement',_binary '',NULL,'Approved',0,'ENGAGEMENT',_binary '\0',NULL,1,NULL);
/*!40000 ALTER TABLE `event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event_menus`
--

DROP TABLE IF EXISTS `event_menus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event_menus` (
  `event_id` int NOT NULL,
  `menu_id` int NOT NULL,
  KEY `FKg59hy5vnkyrco67yuwhcs2jw8` (`menu_id`),
  KEY `FK8f343it0qfp1bwb0g21r31meg` (`event_id`),
  CONSTRAINT `FK8f343it0qfp1bwb0g21r31meg` FOREIGN KEY (`event_id`) REFERENCES `event` (`id`),
  CONSTRAINT `FKg59hy5vnkyrco67yuwhcs2jw8` FOREIGN KEY (`menu_id`) REFERENCES `menu` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event_menus`
--

LOCK TABLES `event_menus` WRITE;
/*!40000 ALTER TABLE `event_menus` DISABLE KEYS */;
INSERT INTO `event_menus` VALUES (1,1),(2,1),(2,2),(2,3);
/*!40000 ALTER TABLE `event_menus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menu` (
  `id` int NOT NULL AUTO_INCREMENT,
  `menu_name` varchar(20) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `price` double NOT NULL,
  `sub_category` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` VALUES (1,'Veg Thali','VEG',120,'RICE'),(2,'Thali With Rice','ALL',150,'CURRY'),(3,'Non-Veg Thali','NON_VEG',250,'RICE');
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `studio`
--

DROP TABLE IF EXISTS `studio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `studio` (
  `id` int NOT NULL AUTO_INCREMENT,
  `contact` varchar(10) DEFAULT NULL,
  `albumcost` double NOT NULL,
  `cranecost` double NOT NULL,
  `dronecost` double NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `photographycost` double NOT NULL,
  `videographycost` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `studio`
--

LOCK TABLES `studio` WRITE;
/*!40000 ALTER TABLE `studio` DISABLE KEYS */;
INSERT INTO `studio` VALUES (1,'7564890213',15000,40000,35000,'Ganesh Studios',10000,30000),(2,'8460445113',15000,40000,35000,'Ibs Photography',10000,30000),(3,'7801843453',15000,40000,35000,'C Sharp Studios',10000,30000);
/*!40000 ALTER TABLE `studio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `acc_number` varchar(18) DEFAULT NULL,
  `adhar_number` varchar(12) DEFAULT NULL,
  `contact_number` varchar(10) DEFAULT NULL,
  `dob` date NOT NULL,
  `email` varchar(25) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `role` varchar(20) DEFAULT NULL,
  `salary` double NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_ob8kqyqqgmefl0aco34akdtpe` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,NULL,'513264789645','7596843621','2002-05-15','Admin@gmail.com','Admin','$2a$10$mUxergwIhmDEoJxFfult6OPomNNR05MhYmahIVVpyAVdLfXNS6YMS','ADMIN',0),(2,NULL,'598745632174','9823275529','2002-10-14','Payal@gmail.com','Payal','$2a$10$ze0Edmhp/fb1ZqxonC7rKulxwSIoGrP8WW54XA2ZuXc7odafkF7UW','EMPLOYEE',0),(3,NULL,'513624967841','9860429584','2000-03-05','shital@gmail.com','Shital Karande','$2a$10$6YvWyiiOb3wY2bWoOUAbSu1eC681fMdss9DWW.UMiZh0Bdj1M8k9O','EMPLOYEE',0),(4,NULL,'532146598749','8999910460','2001-06-15','Mayur@gmail.com','Mayur Sonawane','$2a$10$wn2xXgwEs21yygbnNDAeIODaWnmlaFwzozlCBkdczQoDkogk0w4gO','MANAGER',0),(5,NULL,'632145789654','8208106348','2001-11-13','chetanpatil@gmail.com','Chetan Patil','$2a$10$DwZUXCL4FPH9w7vwKV5cgOGXZjADx3Ho3SFFw0nkG2OlLqiuHsMr2','CUSTOMER',0),(7,NULL,'632145698745','8208106348','2001-05-18','chetanpatil123@gmail.com','Chetan Patil','$2a$10$ygMRjpWZiycmujkOmAtxieX0IHRAhyoQXyK9sQMHehVSY2Gfbor6e','CUSTOMER',0),(13,NULL,'345678767876','8007592194','1995-10-28','ashok@gmail.com','ashok','$2a$10$ECeqT5qcCtsMDATka7rTJuFno/zW6ahGbLbedHtM2PcaNOu1OS.TS','CUSTOMER',0),(14,NULL,'456321789654','9546752314','1995-08-13','Vishal@gmail.com','Vishal Pawar','$2a$10$BpP7jGPPIvM6.0DQlOxFSuqqIf5kjJKFLt2LafeN2mSB.5.hFtSjG','MANAGER',0),(17,NULL,'635478961234','7563124587','2002-08-13','vijay123@gmail.com','Vijay Pawar','$2a$10$DQebjRvOecjO1WckCyKOTe8V9MzcQgbdw7w3QbqX5G.EcAJXvWNHu','EMPLOYEE',0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_event`
--

DROP TABLE IF EXISTS `user_event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_event` (
  `user_id` int NOT NULL,
  `event_id` int NOT NULL,
  KEY `FKspe8srtv69gubpphvrnd7wekt` (`event_id`),
  KEY `FKk3smcqwou8absq8qjt3wk4vy9` (`user_id`),
  CONSTRAINT `FKk3smcqwou8absq8qjt3wk4vy9` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKspe8srtv69gubpphvrnd7wekt` FOREIGN KEY (`event_id`) REFERENCES `event` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_event`
--

LOCK TABLES `user_event` WRITE;
/*!40000 ALTER TABLE `user_event` DISABLE KEYS */;
INSERT INTO `user_event` VALUES (7,1),(4,1),(4,1),(3,1),(3,1),(13,2),(2,1),(17,2),(14,2);
/*!40000 ALTER TABLE `user_event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_todo`
--

DROP TABLE IF EXISTS `user_todo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_todo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `status` varchar(20) DEFAULT NULL,
  `todo` varchar(200) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK88g6fuvawlr98b0p7my6d4twr` (`user_id`),
  CONSTRAINT `FK88g6fuvawlr98b0p7my6d4twr` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_todo`
--

LOCK TABLES `user_todo` WRITE;
/*!40000 ALTER TABLE `user_todo` DISABLE KEYS */;
INSERT INTO `user_todo` VALUES (1,'Not Yet Started','Assign an employee who can manage this event perfectly ',4),(2,'Not Yet Started','Assign an employee who can manage this event perfectly ',4);
/*!40000 ALTER TABLE `user_todo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `venue`
--

DROP TABLE IF EXISTS `venue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `venue` (
  `id` int NOT NULL AUTO_INCREMENT,
  `address` varchar(200) DEFAULT NULL,
  `category` varchar(20) DEFAULT NULL,
  `contact` varchar(10) DEFAULT NULL,
  `cost` double DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `location` varchar(20) DEFAULT NULL,
  `max_capacity` int NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venue`
--

LOCK TABLES `venue` WRITE;
/*!40000 ALTER TABLE `venue` DISABLE KEYS */;
INSERT INTO `venue` VALUES (1,'Survey No-16/3, Karve Road, Erandwane, Pune - 411004 (Near Excel Petrol Pump)','Indoor','7490982681',60000,'Quality of food is good, Good for small to medium-sized functions.','Erandwane, Pune',150,'Shreeganesh Sabhagruha'),(2,'Opposite Sharaw Lawns, Mit College Road, Kothrud, Pune - 411038 Near Bhawani Mata Mandir , Rambaug Colony','Lawn','9035263864',249999,'Good ambience and spacious halls/lawn, Neat and clean environment with ample parking space','Kothrud, Pune',700,'Shivsamarth Hall and Lawns'),(3,'29/1B, Singhad Road, Sinhagad Road-Vadgaon Budruk, Pune - 411041 (Near Vadgaon Highway Bridge)','Outdoor','9035263864',200000,'Many customers mentioned the spacious layout of the party lawn, which easily accommodated all guests.','Sinhagad road, Pune',550,'Nahata Lawns');
/*!40000 ALTER TABLE `venue` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-14 20:13:46
