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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `uid` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `provider` varchar(255) DEFAULT NULL,
  `ticket` int NOT NULL,
  `token` varchar(255) DEFAULT NULL,
  `weekly_count` int NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('2785092517','aeoragy@kakao.com','의젓한 황금펭귄','kakao',123,NULL,110),('2785185456','ikbs1008@daum.net','TotK하러 갑니다','kakao',0,NULL,105),('2786819089','gij452@kakao.com','아아ㅏ앙아아아아아악','kakao',0,NULL,109),('2787108773','totolo312@naver.com','칙칙이','kakao',100,NULL,110),('2790870786','leejy96kr@naver.com','leejy96kr@naver.com','kakao',789,NULL,110),('2794639832','minji9848@naver.com','침착한 황제펭귄','kakao',0,NULL,110),('2OnaAL7xm8RIzmtZhkqr8aElinp1','ssafyarcana@gmail.com','싸피 아르카나','Google',0,NULL,83),('78bkXsjKviV3aywbswR1nAWNDdI3','totolossafy@gmail.com','뀨','Google',0,NULL,93),('9AXqZsNKSEY1YkRFqCOo7aT0Mre2','gij9808@gmail.com','열정적인 쿼카','Google',0,NULL,110),('KHyLPyMOi9WnZI08JvOw9CaXdyG3','pluxlight@gmail.com','다정한 라마','Google',0,NULL,110),('kWlR3JzzTafyMiaiYcFNuusX8hr2','jesniey11@gmail.com','배고파요','Google',0,NULL,107),('sT9d9nn1ofOEVxOIQzQ0WHzHD5g2','leejy96kr@gmail.com','밝은 두더지','Google',0,NULL,500);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
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
