-- MySQL dump 10.13  Distrib 8.0.38, for macos14 (arm64)
--
-- Host: localhost    Database: suitntuxedo
-- ------------------------------------------------------
-- Server version	9.0.1

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
-- Table structure for table `Admin`
--

DROP TABLE IF EXISTS `Admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Admin` (
  `A_FirstName` varchar(50) NOT NULL,
  `A_LastName` varchar(50) NOT NULL,
  `A_BirthDate` date NOT NULL,
  `A_Address` varchar(100) NOT NULL,
  `L_Username` varchar(50) NOT NULL,
  PRIMARY KEY (`A_FirstName`,`A_LastName`),
  KEY `L_Username` (`L_Username`),
  CONSTRAINT `admin_ibfk_1` FOREIGN KEY (`L_Username`) REFERENCES `LoginInfo` (`L_Username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Admin`
--

LOCK TABLES `Admin` WRITE;
/*!40000 ALTER TABLE `Admin` DISABLE KEYS */;
/*!40000 ALTER TABLE `Admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `LoginInfo`
--

DROP TABLE IF EXISTS `LoginInfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `LoginInfo` (
  `L_Username` varchar(50) NOT NULL,
  `L_Password` varchar(50) NOT NULL,
  PRIMARY KEY (`L_Username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `LoginInfo`
--

LOCK TABLES `LoginInfo` WRITE;
/*!40000 ALTER TABLE `LoginInfo` DISABLE KEYS */;
/*!40000 ALTER TABLE `LoginInfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `LoginInfo_Info`
--

DROP TABLE IF EXISTS `LoginInfo_Info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `LoginInfo_Info` (
  `L_Username` varchar(50) NOT NULL,
  `LI_Info` varchar(175) NOT NULL,
  PRIMARY KEY (`L_Username`,`LI_Info`),
  CONSTRAINT `logininfo_info_ibfk_1` FOREIGN KEY (`L_Username`) REFERENCES `LoginInfo` (`L_Username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `LoginInfo_Info`
--

LOCK TABLES `LoginInfo_Info` WRITE;
/*!40000 ALTER TABLE `LoginInfo_Info` DISABLE KEYS */;
/*!40000 ALTER TABLE `LoginInfo_Info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `LoginInfo_Product`
--

DROP TABLE IF EXISTS `LoginInfo_Product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `LoginInfo_Product` (
  `L_Username` varchar(50) NOT NULL,
  `P_ID` char(7) NOT NULL,
  PRIMARY KEY (`L_Username`,`P_ID`),
  KEY `P_ID` (`P_ID`),
  CONSTRAINT `logininfo_product_ibfk_1` FOREIGN KEY (`L_Username`) REFERENCES `LoginInfo` (`L_Username`),
  CONSTRAINT `logininfo_product_ibfk_2` FOREIGN KEY (`P_ID`) REFERENCES `Product` (`P_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `LoginInfo_Product`
--

LOCK TABLES `LoginInfo_Product` WRITE;
/*!40000 ALTER TABLE `LoginInfo_Product` DISABLE KEYS */;
/*!40000 ALTER TABLE `LoginInfo_Product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Product`
--

DROP TABLE IF EXISTS `Product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Product` (
  `P_ID` char(7) NOT NULL,
  `P_Name` varchar(50) NOT NULL,
  `P_Img` varchar(175) NOT NULL,
  `P_Type` varchar(10) NOT NULL,
  `P_Brand` varchar(50) NOT NULL,
  `P_Source` varchar(175) NOT NULL,
  `P_Price` int NOT NULL,
  PRIMARY KEY (`P_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Product`
--

LOCK TABLES `Product` WRITE;
/*!40000 ALTER TABLE `Product` DISABLE KEYS */;
/*!40000 ALTER TABLE `Product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-11  9:02:40
