CREATE DATABASE  IF NOT EXISTS `my_database` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `my_database`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: my_database
-- ------------------------------------------------------
-- Server version	8.1.0

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
-- Table structure for table `kontaktni_formular`
--

DROP TABLE IF EXISTS `kontaktni_formular`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kontaktni_formular` (
  `id` int NOT NULL AUTO_INCREMENT,
  `jmeno_prijmeni` varchar(255) NOT NULL,
  `email` varchar(225) NOT NULL,
  `telefon` char(9) NOT NULL,
  `co_s_autem` varchar(1000) DEFAULT NULL,
  `zpusob_kontaktu` enum('telefonicky','emailem','nechci-byt-kontaktovan') DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kontaktni_formular`
--

LOCK TABLES `kontaktni_formular` WRITE;
/*!40000 ALTER TABLE `kontaktni_formular` DISABLE KEYS */;
INSERT INTO `kontaktni_formular` VALUES (1,'Karolína Kozlerová','karolinakozlerova@email.cz','727953653',NULL,NULL),(2,'Martin Kozler','marwellkozler@gmail.com','774262520',NULL,NULL),(3,'Pepa Mádle','karolinakozlerova@email.cz','727953653',NULL,NULL),(4,'Karolína Kozlerová','karolinakozlerova@email.cz','727953653','awdwdasdwad','emailem'),(5,'Karolína Kozlerová','karolinakozlerova@email.cz','727953653','adwads','nechci-byt-kontaktovan');
/*!40000 ALTER TABLE `kontaktni_formular` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-05 20:25:49
