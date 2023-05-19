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
-- Table structure for table `instant`
--

DROP TABLE IF EXISTS `instant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `instant` (
  `idx` int NOT NULL,
  `advice` varchar(255) DEFAULT NULL,
  `question` varchar(255) DEFAULT NULL,
  `card_idx` int DEFAULT NULL,
  PRIMARY KEY (`idx`),
  KEY `FKqwocob5wdsf2u7t17aygnkjcq` (`card_idx`),
  CONSTRAINT `FKqwocob5wdsf2u7t17aygnkjcq` FOREIGN KEY (`card_idx`) REFERENCES `card` (`card_idx`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `instant`
--

LOCK TABLES `instant` WRITE;
/*!40000 ALTER TABLE `instant` DISABLE KEYS */;
INSERT INTO `instant` VALUES (0,'이 선택지를 통해 당신은 기분 좋은 출발을 할 수 있습니다!','분위기 전환을 통해 새로운 기회를 찾고 싶어합니다!',0),(1,'이 선택지를 통해 당신은 자신의 능력을 마음껏 펼칠 수 있습니다!','하고 싶은 일이 많아 무엇을 먼저 할지 고민 중 입니다!',1),(2,'이 선택지를 통해 당신은 초반에 고민되지만 이내 좋은 결정이라는 것을 알 수 있습니다!','이성과 감성사이에서 어려운 고민을 내려야 합니다!',2),(3,'이 선택지를 통해 당신은 행복과 풍요로움을 느낄 수 있습니다!','여유로움과 풍요로움을 느낄 수 있는 최적의 방법을 찾고자 합니다!',3),(4,'이 선택지를 통해 당신은 안정을 찾고 높은 자리에 오를 수 있습니다!','성공과 안정을 동시에 얻을 수 있는 방법이 무엇인지 알고 싶어 합니다!',4),(5,'이 선택지를 통해 당신은 화려하진 않지만 안전한 방향으로 나아 갈 수 있습니다!','크게 튀지 않으며 안전한 선택지가 무엇인지 궁금해 합니다!',5),(6,'이 선택지를 통해 당신은 꿈처럼 행복한 시간을 보낼 수 있습니다!','달콤하고 사랑스러운 꿈과 같은 결과가 어느 것인지 궁금해 합니다!',6),(7,'이 선택지를 통해 당신은 두려움없이 앞으로 나아갈 수 있습니다!','거침없이 목표를 향해 나아가기 위해서 무엇이 최적인지 고민중 입니다!',7),(8,'이 선택지를 통해 당신은 기운을 얻고 문제를 해결할 수 있습니다!','용기를 내어 지금의 어려운 상황을 극복하고자 합니다!',8),(9,'이 선택지를 통해 당신은 이상을 향해 묵묵히 나아갈 수 있습니다!','스스로 조용히 성장할 수 있는 방법이 무엇인지 생각 중 입니다!',9),(10,'이 선택지를 통해 당신은 거대한 운명의 순환에서 편안함을 느낄 수 있습니다!','운명이 어디로 인도하는 지 궁금해 합니다!',10),(11,'이 선택지를 통해 당신은 정확한 사실을 보고 옳은 선택을 내릴 수 있습니다!','무엇이 가장 이성적이며 냉정한 선택인지 어려워 합니다!',11),(12,'이 선택지를 통해 당신은 편안함을 느끼며 생각을 정리할 수 있습니다!','오랜 시간 고민한 문제에 대한 해답을 구하고자 합니다!',12),(13,'이 선택지를 통해 당신은 깔끔하게 상황을 정리하고 좋은 시작을 할 수 있습니다!','새로운 단계로 나아가기 위해 필요한 것이 무엇인지 고민 중 입니다!',13),(14,'이 선택지를 통해 당신은 조화를 이루며 원하던 결과를 향해 다가갈 수 있습니다!','균형을 유지하며 유의미한 결과를 만들어내는 길을 알고 싶어 합니다!',14),(15,'이 선택지를 통해 당신은 자칫 빠져나올 수 없는 유혹의 늪에 빠져 다칠 수 있습니다!','머릿속에 많은 유혹들이 있어 힘들어 하는 중 입니다!',15),(16,'이 선택지를 통해 당신은 고통 받으나 서서히 회복할 수 있습니다!','갑작스럽게 결정을 내려야 하는 상황에 당황하는 중 입니다!',16),(17,'이 선택지를 통해 당신은 꿈꾸던 이상향을 향해 나아갈 수 있습니다!','밝은 미래를 위해 무엇이 좋을지 알고 싶어 합니다!',17),(18,'이 선택지를 통해 당신은 내면 깊숙한 욕망을 풀 수 있습니다!','내면의 목소리와 현재 나의 모습에 혼란스러워 합니다!',18),(19,'이 선택지를 통해 당신은 더욱 열정을 가지며 행복한 삶을 살아갈 수 있습니다!','그동안의 노력을 보상받기 위해 어떤 길이 가장 좋을 지 고민 중 입니다!',19),(20,'이 선택지를 통해 당신은 좋은 기회를 잡고 성장할 수 있습니다!','좋은 기회가 왔으나 어떻게 할지 몰라 고민하고 있습니다!',20),(21,'이 선택지를 통해 당신은 가장 완벽한 정답을 얻을 수 입니다.','가장 만족스러운 선택지가 무엇인지 고민하고 있습니다!',21);
/*!40000 ALTER TABLE `instant` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-19  9:27:00
