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
-- Table structure for table `animal_nickname`
--

DROP TABLE IF EXISTS `animal_nickname`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `animal_nickname` (
  `animal_nickname_idx` int NOT NULL AUTO_INCREMENT,
  `animal_nickname` varchar(10) NOT NULL,
  PRIMARY KEY (`animal_nickname_idx`)
) ENGINE=InnoDB AUTO_INCREMENT=95 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `animal_nickname`
--

LOCK TABLES `animal_nickname` WRITE;
/*!40000 ALTER TABLE `animal_nickname` DISABLE KEYS */;
INSERT INTO `animal_nickname` VALUES (1,'의젓한'),(2,'예쁜'),(3,'화난'),(4,'귀여운'),(5,'배고픈'),(6,'철학적인'),(7,'현학적인'),(8,'슬픈'),(9,'푸른'),(10,'비싼'),(11,'밝은'),(12,'행복한'),(13,'신비로운'),(14,'똑똑한'),(15,'창의적인'),(16,'고요한'),(17,'자유로운'),(18,'사랑스러운'),(19,'친절한'),(20,'대담한'),(21,'용감한'),(22,'활발한'),(23,'지혜로운'),(24,'의리있는'),(25,'용맹스러운'),(26,'평화로운'),(27,'재미있는'),(28,'침착한'),(29,'열정적인'),(30,'친근한'),(31,'의문스러운'),(32,'기발한'),(33,'신나는'),(34,'매력적인'),(35,'창조적인'),(36,'독특한'),(37,'유쾌한'),(38,'다정한'),(39,'집중적인'),(40,'상상력이 풍부한'),(41,'현명한'),(42,'낭만적인'),(43,'사려 깊은'),(44,'참을성 있는'),(45,'자기주도적인'),(46,'확신 있는'),(47,'다재다능한'),(48,'유연한'),(49,'황제펭귄'),(50,'호랑이'),(51,'비버'),(52,'강아지'),(53,'부엉이'),(54,'여우'),(55,'치타'),(56,'문어'),(57,'고양이'),(58,'미어캣'),(59,'펭귄'),(60,'늑대'),(61,'토끼'),(62,'사자'),(63,'거북이'),(64,'기린'),(65,'코끼리'),(66,'햄스터'),(67,'나비'),(68,'다람쥐'),(69,'하이에나'),(70,'코뿔소'),(71,'표범'),(72,'두더지'),(73,'물소'),(74,'카멜레온'),(75,'악어'),(76,'플라밍고'),(77,'플라타푸스'),(78,'알파카'),(79,'라마'),(80,'스컹크'),(81,'캥거루'),(82,'앵무새'),(83,'사막여우'),(84,'코알라'),(85,'하마'),(86,'두루미'),(87,'펠리칸'),(88,'까치'),(89,'카피바라'),(90,'토코투칸'),(91,'왈라비'),(92,'쿼카'),(93,'프레리독'),(94,'황금펭귄');
/*!40000 ALTER TABLE `animal_nickname` ENABLE KEYS */;
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
