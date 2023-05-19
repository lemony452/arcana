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
-- Table structure for table `quiz`
--

DROP TABLE IF EXISTS `quiz`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quiz` (
  `quiz_idx` int NOT NULL,
  `answer` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `wrong1` varchar(255) DEFAULT NULL,
  `wrong2` varchar(255) DEFAULT NULL,
  `wrong3` varchar(255) DEFAULT NULL,
  `card_idx` int DEFAULT NULL,
  PRIMARY KEY (`quiz_idx`),
  KEY `FKfo2p6ickn2g1o0jsu7chybmo9` (`card_idx`),
  CONSTRAINT `FKfo2p6ickn2g1o0jsu7chybmo9` FOREIGN KEY (`card_idx`) REFERENCES `card` (`card_idx`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quiz`
--

LOCK TABLES `quiz` WRITE;
/*!40000 ALTER TABLE `quiz` DISABLE KEYS */;
INSERT INTO `quiz` VALUES (0,'죽음','다음 카드와 관련없는 키워드는?','출발','여행','도전',0),(1,'다재다능','다음 카드와 관련있는 키워드는?','실패','노력','무료함',1),(2,'모호함','다음 카드와 관련없는 키워드는?','조언','파괴','순수함',2),(3,'풍요','다음 카드와 관련있는 키워드는?','빈곤','다툼','불안감',3),(4,'지루함','다음 카드와 관련없는 키워드는?','고독함','성공','리더십',4),(5,'도덕','다음 카드와 관련있는 키워드는?','의심','불신','혼돈',5),(6,'부끄러움','다음 카드와 관련없는 키워드는?','편안함','사랑','설렘',6),(7,'용감함','다음 카드와 관련있는 키워드는?','무모함','피로','패배',7),(8,'제압','다음 카드와 관련없는 키워드는?','유대감','신뢰','노력',8),(9,'탐구','다음 카드와 관련있는 키워드는?','추위','피곤함','변화',9),(10,'운명의 장난','다음 카드와 관련없는 키워드는?','순환','행운','숙명',10),(11,'공정','다음 카드와 관련있는 키워드는?','사기','사랑','이별',11),(12,'편안함','다음 카드와 관련없는 키워드는?','고민','희생','각오',12),(13,'전환점','다음 카드와 관련있는 키워드는?','재도전','집착','평화',13),(14,'분리','다음 카드와 관련없는 키워드는?','조절','능수능란','거침없음',14),(15,'유혹','다음 카드와 관련있는 키워드는?','질서','안정','후회',15),(16,'흥미로움','다음 카드와 관련없는 키워드는?','파괴','변화','충격',16),(17,'포기','다음 카드와 관련있는 키워드는?','희망','순수함','이상향',95),(18,'애달픔','다음 카드와 관련없는 키워드는?','회피','고민해결','현실',96),(19,'멍때림','다음 카드와 관련있는 키워드는?','일출','행복함','편안함',97),(20,'회복','다음 카드와 관련없는 키워드는?','좌절','일을 미룸','심판',98),(21,'쾌락','다음 카드와 관련있는 키워드는?','성공','깨달음','사랑',99);
/*!40000 ALTER TABLE `quiz` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-19  9:27:04
