-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: k8d107.p.ssafy.io    Database: arcanaDB
-- ------------------------------------------------------
-- Server version	8.0.33-0ubuntu0.20.04.2

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
-- Table structure for table `card`
--

DROP TABLE IF EXISTS `card`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `card` (
  `card_idx` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`card_idx`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card`
--

LOCK TABLES `card` WRITE;
/*!40000 ALTER TABLE `card` DISABLE KEYS */;
INSERT INTO `card` VALUES (0,'The Fool'),(1,'The Magician'),(2,'The High Priestess'),(3,'The Empress'),(4,'The Emperor'),(5,'The Hierophant'),(6,'The Lovers'),(7,'The Chariot'),(8,'Strength'),(9,'The Hermit'),(10,'Wheel of Fortune'),(11,'Justice'),(12,'The Hanged Man'),(13,'Death'),(14,'Temperance'),(15,'The Devil'),(16,'The Tower'),(17,'The Star'),(18,'The Moon'),(19,'The Sun'),(20,'Judgement'),(21,'The World'),(22,'Ace of Wands'),(23,'Two of Wands'),(24,'Three of Wands'),(25,'Four of Wands'),(26,'Five of Wands'),(27,'Six of Wands'),(28,'Seven of Wands'),(29,'Eight of Wands'),(30,'Nine of Wands'),(31,'Ten of Wands'),(32,'Page of Wands'),(33,'Knight of Wands'),(34,'Queen of Wands'),(35,'King of Wands'),(36,'Ace of Pentacles'),(37,'Two of Pentacles'),(38,'Three of Pentacles'),(39,'Four of Pentacles'),(40,'Five of Pentacles'),(41,'Six of Pentacles'),(42,'Seven of Pentacles'),(43,'Eight of Pentacles'),(44,'Nine of Pentacles'),(45,'Ten of Pentacles'),(46,'Page of Pentacles'),(47,'Knight of Pentacles'),(48,'Queen of Pentacles'),(49,'King of Pentacles'),(50,'Ace of Swords'),(51,'Two of Swords'),(52,'Three of Swords'),(53,'Four of Swords'),(54,'Five of Swords'),(55,'Six of Swords'),(56,'Seven of Swords'),(57,'Eight of Swords'),(58,'Nine of Swords'),(59,'Ten of Swords'),(60,'Page of Swords'),(61,'Knight of Swords'),(62,'Queen of Swords'),(63,'King of Swords'),(64,'Ace of Cups'),(65,'Two of Cups'),(66,'Three of Cups'),(67,'Four of Cups'),(68,'Five of Cups'),(69,'Six of Cups'),(70,'Seven of Cups'),(71,'Eight of Cups'),(72,'Nine of Cups'),(73,'Ten of Cups'),(74,'Page of Cups'),(75,'Knight of Cups'),(76,'Queen of Cups'),(77,'King of Cups'),(78,'The Fool(Reverse)'),(79,'The Magician(Reverse)'),(80,'The High Priestess(Reverse)'),(81,'The Empress(Reverse)'),(82,'The Emperor(Reverse)'),(83,'The Hierophant(Reverse)'),(84,'The Lovers(Reverse)'),(85,'The Chariot(Reverse)'),(86,'Strength(Reverse)'),(87,'The Hermit(Reverse)'),(88,'Wheel of Fortune(Reverse)'),(89,'Justice(Reverse)'),(90,'The Hanged Man(Reverse)'),(91,'Death(Reverse)'),(92,'Temperance(Reverse)'),(93,'The Devil(Reverse)'),(94,'The Tower(Reverse)'),(95,'The Star(Reverse)'),(96,'The Moon(Reverse)'),(97,'The Sun(Reverse)'),(98,'Judgement(Reverse)'),(99,'The World(Reverse)'),(100,'Ace of Wands(Reverse)'),(101,'Two of Wands(Reverse)'),(102,'Three of Wands(Reverse)'),(103,'Four of Wands(Reverse)'),(104,'Five of Wands(Reverse)'),(105,'Six of Wands(Reverse)'),(106,'Seven of Wands(Reverse)'),(107,'Eight of Wands(Reverse)'),(108,'Nine of Wands(Reverse)'),(109,'Ten of Wands(Reverse)'),(110,'Page of Wands(Reverse)'),(111,'Knight of Wands(Reverse)'),(112,'Queen of Wands(Reverse)'),(113,'King of Wands(Reverse)'),(114,'Ace of Pentacles(Reverse)'),(115,'Two of Pentacles(Reverse)'),(116,'Three of Pentacles(Reverse)'),(117,'Four of Pentacles(Reverse)'),(118,'Five of Pentacles(Reverse)'),(119,'Six of Pentacles(Reverse)'),(120,'Seven of Pentacles(Reverse)'),(121,'Eight of Pentacles(Reverse)'),(122,'Nine of Pentacles(Reverse)'),(123,'Ten of Pentacles(Reverse)'),(124,'Page of Pentacles(Reverse)'),(125,'Knight of Pentacles(Reverse)'),(126,'Queen of Pentacles(Reverse)'),(127,'King of Pentacles(Reverse)'),(128,'Ace of Swords(Reverse)'),(129,'Two of Swords(Reverse)'),(130,'Three of Swords(Reverse)'),(131,'Four of Swords(Reverse)'),(132,'Five of Swords(Reverse)'),(133,'Six of Swords(Reverse)'),(134,'Seven of Swords(Reverse)'),(135,'Eight of Swords(Reverse)'),(136,'Nine of Swords(Reverse)'),(137,'Ten of Swords(Reverse)'),(138,'Page of Swords(Reverse)'),(139,'Knight of Swords(Reverse)'),(140,'Queen of Swords(Reverse)'),(141,'King of Swords(Reverse)'),(142,'Ace of Cups(Reverse)'),(143,'Two of Cups(Reverse)'),(144,'Three of Cups(Reverse)'),(145,'Four of Cups(Reverse)'),(146,'Five of Cups(Reverse)'),(147,'Six of Cups(Reverse)'),(148,'Seven of Cups(Reverse)'),(149,'Eight of Cups(Reverse)'),(150,'Nine of Cups(Reverse)'),(151,'Ten of Cups(Reverse)'),(152,'Page of Cups(Reverse)'),(153,'Knight of Cups(Reverse)'),(154,'Queen of Cups(Reverse)'),(155,'King of Cups(Reverse)');
/*!40000 ALTER TABLE `card` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-19  9:26:59
