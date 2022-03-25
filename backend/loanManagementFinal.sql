-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: loan_management
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `CustomerId` int NOT NULL AUTO_INCREMENT,
  `customer_name` varchar(50) NOT NULL,
  `customer_phone` varchar(50) DEFAULT NULL,
  `customer_address` varchar(50) NOT NULL,
  `balance` decimal(38,2) NOT NULL,
  PRIMARY KEY (`CustomerId`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1,'Farrah Dobbie','3688961901','49862 Kingsford Junction',69687.54),(2,'Malcolm Orbell','8867727382','385 Lawn Terrace',55592.51),(3,'Filippa Bucknill','6677805329','1898 Michigan Road',53826.01),(4,'Dido Vanezis','2887691797','57689 Myrtle Park',30581.83),(5,'Annelise Aspland','2096293966','3922 Cherokee Place',87026.91),(6,'Herminia Newby','8111478402','19 Chive Center',5414.47),(7,'Lind Hanley','7504959822','7534 Village Green Center',25921.26),(8,'Mimi Gilhooley','6594140488','16033 Pond Avenue',62834.94),(9,'Ileana Parkes','1281389203','095 Warner Hill',76939.31),(10,'Larissa Yeldham','2812360584','220 Shopko Parkway',15790.59);
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customerloan`
--

DROP TABLE IF EXISTS `customerloan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customerloan` (
  `CustomerLoanId` int NOT NULL AUTO_INCREMENT,
  `CustomerId` int NOT NULL,
  `LoanId` int NOT NULL,
  PRIMARY KEY (`CustomerLoanId`),
  KEY `CustomerLoan_FK1` (`CustomerId`),
  KEY `CustomerLoan_FK2` (`LoanId`),
  CONSTRAINT `CustomerLoan_FK1` FOREIGN KEY (`CustomerId`) REFERENCES `customer` (`CustomerId`),
  CONSTRAINT `CustomerLoan_FK2` FOREIGN KEY (`LoanId`) REFERENCES `loan` (`LoanId`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customerloan`
--

LOCK TABLES `customerloan` WRITE;
/*!40000 ALTER TABLE `customerloan` DISABLE KEYS */;
INSERT INTO `customerloan` VALUES (1,7,6),(2,8,8),(3,8,7),(4,8,1),(5,8,10),(6,7,9),(7,5,3),(8,2,2),(9,4,4),(10,4,5);
/*!40000 ALTER TABLE `customerloan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customerlogin`
--

DROP TABLE IF EXISTS `customerlogin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customerlogin` (
  `CustomerId` int NOT NULL,
  `CustomerUsername` varchar(50) NOT NULL,
  `CustomerPasswordHashed` varchar(500) NOT NULL,
  `Salt` varchar(50) NOT NULL,
  PRIMARY KEY (`CustomerUsername`),
  UNIQUE KEY `CustomerId_UNIQUE` (`CustomerId`),
  UNIQUE KEY `CustomerUsername_UNIQUE` (`CustomerUsername`),
  UNIQUE KEY `CustomerPasswordHashed_UNIQUE` (`CustomerPasswordHashed`),
  UNIQUE KEY `Salt_UNIQUE` (`Salt`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customerlogin`
--

LOCK TABLES `customerlogin` WRITE;
/*!40000 ALTER TABLE `customerlogin` DISABLE KEYS */;
INSERT INTO `customerlogin` VALUES (5,'annelisea','d1b45d24745c38c4b384ba569d884c520d847b9413ea6ff131ec75c6b8711a3b','a1a26481c4443b2c0fdcf315e9b9d9dc'),(4,'didov','e9f6e05274cb6b210b09e76fd875ea876bb61c8d5f1be65f50e7db943215f35e','0c1666973381376651bb6516dda1f3c1'),(1,'farrahd','c1ad90436131de9b0628b8369deea5e0230f399d4615aeeb8ead78ce7cac7877','298df34101c76725073d3597f424c8dc'),(3,'filippab','d0131fbd04861c8adf9270f1791128cc1ddd3986859cca0457029d419539364e','7c9db5a2f39bc588548e438b571e6575'),(6,'herminian','97606bd38bdf88dfe961491349c713db3370ee477fb0882f22d3e3d85d0c5a21','7557cfd5a953706db10027c3938a29b8'),(9,'ileanap','592bb79370f2687b4022a42b21d47f2c037fd6b0855c127858075136ee8ba26b','44c2e88bf1a8da9aa947409e30fe40bf'),(10,'larissay','77cebf72fb439373852273e2db1c1df9d4d3c1da1176840f7477f42bff4528d0','c31e91f8024c5aa2932e7fda2be171df'),(7,'lindh','579d8b3876477d19b95db4fce57c80a7acd77e1eed5f697f8faa4da3fa67d386','451ccfe7829af37572e5fde500352dbb'),(2,'malcolmo','afe83e17f28f7854ae987c8cc3d5cfca5c960bdb157168d925aab2518cb4c0c7','3e2c73ec79e42b8746c86d05570382a2'),(8,'mimig','ef4bb30c8d17883b1613b67fb2363b2d680351ecf21434024f751e1e3cf7bcbe','0b97dea0cc27c0e53766616231bb74ba');
/*!40000 ALTER TABLE `customerlogin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loan`
--

DROP TABLE IF EXISTS `loan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loan` (
  `LoanId` int NOT NULL AUTO_INCREMENT,
  `loan_amount` decimal(38,2) NOT NULL,
  PRIMARY KEY (`LoanId`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loan`
--

LOCK TABLES `loan` WRITE;
/*!40000 ALTER TABLE `loan` DISABLE KEYS */;
INSERT INTO `loan` VALUES (1,135532.99),(2,34367.53),(3,45086.74),(4,140123.37),(5,57800.21),(6,13165.14),(7,82062.24),(8,12416.32),(9,17250.83),(10,46431.85);
/*!40000 ALTER TABLE `loan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `PaymentId` int NOT NULL AUTO_INCREMENT,
  `LoanId` int NOT NULL,
  `payment_date` date NOT NULL,
  `payment_amount` decimal(38,2) NOT NULL,
  PRIMARY KEY (`PaymentId`),
  KEY `CustomerLoan_FK` (`LoanId`),
  CONSTRAINT `CustomerLoan_FK` FOREIGN KEY (`LoanId`) REFERENCES `loan` (`LoanId`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (1,1,'2022-02-20',35532.99),(2,6,'2022-03-19',7818.63),(3,4,'2022-01-12',74562.54),(4,4,'2022-03-21',51364.06),(5,3,'2022-01-17',16363.67),(6,1,'2022-01-03',26544.58),(7,1,'2022-02-27',30534.71),(8,9,'2022-02-27',17250.83),(9,2,'2022-02-19',34367.53),(10,7,'2022-02-08',31003.82);
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test_table`
--

DROP TABLE IF EXISTS `test_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `test_table` (
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test_table`
--

LOCK TABLES `test_table` WRITE;
/*!40000 ALTER TABLE `test_table` DISABLE KEYS */;
INSERT INTO `test_table` VALUES ('asdf','asdf');
/*!40000 ALTER TABLE `test_table` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-25 16:31:35
