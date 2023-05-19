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
-- Table structure for table `lucky`
--

DROP TABLE IF EXISTS `lucky`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lucky` (
  `idx` int NOT NULL,
  `luckyment` varchar(255) DEFAULT NULL,
  `card_idx` int DEFAULT NULL,
  PRIMARY KEY (`idx`),
  KEY `FKqx04k8orpuswk2hw3jc7shmcg` (`card_idx`),
  CONSTRAINT `FKqx04k8orpuswk2hw3jc7shmcg` FOREIGN KEY (`card_idx`) REFERENCES `card` (`card_idx`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lucky`
--

LOCK TABLES `lucky` WRITE;
/*!40000 ALTER TABLE `lucky` DISABLE KEYS */;
INSERT INTO `lucky` VALUES (0,'그대의 삶이 자유롭고 모험으로 가득 차 있길!',0),(1,'그대의 삶이 기술과 창조력으로 가득 차 있길!',1),(2,'그대의 삶이 지혜와 신비로 가득 차 있길!',2),(3,'그대의 삶이 풍요롭고 행복으로 가득 차 있길!',3),(4,'그대의 삶이 리더십과 안정으로 가득 차 있길!',4),(5,'그대의 삶이 지식과 도움으로 가득 차 있길!',5),(6,'그대의 삶이 사랑과 즐거움으로 가득 차 있길!',6),(7,'그대의 삶이 승리와 성공으로 가득 차 있길!',7),(8,'그대의 삶이 용기와 힘으로 가득 차 있길!',8),(9,'그대의 삶이 평화와 진리로 가득 차 있길!',9),(10,'그대의 삶이 운명의 미소로 가득 차 있길!',10),(11,'그대의 삶이 화합과 정의로 가득 차 있길!',11),(12,'그대의 삶이 평안과 새로움으로 가득 차 있길!',12),(13,'그대의 삶이 새 생명의 기운으로 가득 차 있길!',13),(14,'그대의 삶이 조화와 균형으로 가득 차 있길!',14),(15,'그대의 삶이 타오르는 열정으로 가득 차 있길!',15),(16,'그대의 삶이 긍정의 변화로 가득 차 있길!',16),(17,'그대의 삶이 희망과 안식으로 가득 차 있길!',17),(18,'그대의 삶이 진솔함과 성장으로 가득 차 있길!',18),(19,'그대의 삶이 따뜻한 빛과 기쁨으로 가득 차 있길!',19),(20,'그대의 삶이 도약과 행운으로 가득 차 있길!',20),(21,'그대의 삶이 성취의 달콤함으로 가득 차 있길!',21);
/*!40000 ALTER TABLE `lucky` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-19  9:27:03
