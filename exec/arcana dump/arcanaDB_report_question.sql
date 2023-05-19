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
-- Table structure for table `report_question`
--

DROP TABLE IF EXISTS `report_question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `report_question` (
  `report_question_idx` int NOT NULL AUTO_INCREMENT,
  `options` varchar(64) NOT NULL,
  `summary` varchar(512) NOT NULL,
  `question` varchar(128) NOT NULL,
  `uid` varchar(255) NOT NULL,
  PRIMARY KEY (`report_question_idx`),
  KEY `uid-from-user-to-rq_idx` (`uid`),
  CONSTRAINT `uid-from-user-to-rq` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=966 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `report_question`
--

LOCK TABLES `report_question` WRITE;
/*!40000 ALTER TABLE `report_question` DISABLE KEYS */;
INSERT INTO `report_question` VALUES (200,'재물운','','언제 돈을 많이 벌까?','9AXqZsNKSEY1YkRFqCOo7aT0Mre2'),(225,'월별운세','이익을 위해 스스로 평판을 낮추는 행위는 반드시 삼가시게나 이익을 위해 스스로 평판을 낮추는 행위는 반드시 삼가시게나 개인에게 소소한 보상을 하며 작은 행복들을 느껴보시게나','','9AXqZsNKSEY1YkRFqCOo7aT0Mre2'),(233,'재물운','','이번에 진행하는 뽑기에서 좋은게 나올까?','KHyLPyMOi9WnZI08JvOw9CaXdyG3'),(245,'월별운세','행여 이를 놓쳐 미련을 가진다면 더 큰 재앙이 올 것이니 이를 꼭 기억해야 하며 이를 지키고자 부정을 저지르면 더 큰 화를 불러일으킬 것이니 조심해야 하고 직감을 믿되 순리에 맡기며 진행해야 한다.','이번에 진행하는 뽑기에서 좋은게 나올까?','KHyLPyMOi9WnZI08JvOw9CaXdyG3'),(253,'신년운세','현실에서 억지를 부리지 말고 새로운 변화를 맞이하는 것이 좋아 보이지만 귀찮음에 아무것도 하지 않으면 스스로 몰락할 수 있으니 귀찮음에 아무것도 하지 않으면 스스로 몰락할 수 있으니 귀찮음에 아무것도 하지 않으면 스스로 몰락할 수 있으니 귀찮음에 아무것도 하지 않으면 스스로 몰락할 수 있으니 귀찮음에 아무것도 하지 않으면 스스로 몰락할 수 있으니 주의하시게나','','2787108773'),(381,'월별운세','금전적인 문제가 생길 수 있으니 돈과 관련 없는 일들에 관심을 가지는 것도 중요하지만 운명의 흐름에 자신을 맡기는 것도 현명한 선택이며 부정을 저지르면 더 큰 화를 불러일으킬 것이니 조심해야 한다.','','2785185456'),(417,'재물운','','복권에 당첨될까용?','2787108773'),(441,'월별운세','돈과 관련 없는 일들에 관심을 가지는 것도 중요하지만 금전적인 문제가 생길 수 있으니 돈과 관련 없는 일들에 관심을 가지는 것도 중요해 보인다.','미래의 내가 빌딩을 살수있을까?','78bkXsjKviV3aywbswR1nAWNDdI3'),(449,'월별운세','자신을 속이며 현실을 피하는 일은 없어야 할걸세. 자신을 속이며 현실을 피하는 일은 없어야 할걸세. 자신을 속이며 현실을 피하는 일은 없어야 할걸세. 자신을 속이며 현실을 피하는 일은 없어야 할걸세. 자신을 속이며 현실을 피하는 일은 없어야 할걸세. 자신을 속이며 현실을 피하는 일은 없어야 할걸세. 자신을 속이며 현실을 피하는 일은 없어야 할걸세. 자신을 속이며 현실을 피하는 일은 없어야 할걸세. 준비를 잘 해둔다면 쉽게 넘어갈 수 있는 운이 함께 있으니 꼭 기억하시게나.','','2OnaAL7xm8RIzmtZhkqr8aElinp1'),(457,'성공운','','지난주의 면접 결과가 궁금해','2785185456'),(469,'재물운','자신을 속이며 현실을 피하는 일은 없어야 할걸세. 자신을 속이며 현실을 피하는 일은 없어야 할걸세. 자신을 속이며 현실을 피하는 일은 없어야 할걸세. 자신을 속이며 현실을 피하는 일은 없어야 할걸세. 자신을 속이며 현실을 피하는 일은 없어야 할걸세. 자신을 속이며 현실을 피하는 일은 없어야 할걸세. 자신을 속이며 현실을 피하는 일은 없어야 할걸세. 자신을 속이며 현실을 피하는 일은 없어야 할걸세. 준비를 잘 해둔다면 쉽게 넘어갈 수 있는 운이 함께 있으니 꼭 기억하시게나.','이번 주 로또에 당첨될 수 있을까?','2OnaAL7xm8RIzmtZhkqr8aElinp1'),(481,'신년운세','개인에게 소소한 보상을 하며 작은 행복들을 느껴보시게나 남을 배려하며 억지를 부리지 않아야 화를 피할 수 있는 시기라 할 수 있다.','이번 주 로또에 당첨될 수 있을까?','2OnaAL7xm8RIzmtZhkqr8aElinp1'),(495,'월별운세','실력은 있지만 이를 인정받지 못하는 시기인 만큼 무엇이든 받아드리기 나름이라는 생각을 가지고 잘 추스르길 바라며, 계획을 잘 세워 위험을 피할 방안들을 미리 준비해야 할걸세.','','2OnaAL7xm8RIzmtZhkqr8aElinp1'),(503,'신년운세','타인의 시선을 의식하지 말고 이를 즐겨보길 바라며,문제의 본질을 모른 채 행동하다 큰 화를 입을 수 있으니 주의를 기울여야 한다.','','2OnaAL7xm8RIzmtZhkqr8aElinp1'),(529,'성공운','','이번 프로젝트가 성공할까?','78bkXsjKviV3aywbswR1nAWNDdI3'),(541,'월별운세','무작정 일하며 스스로 열의나 노력이 부족하다고 생각할 수 있지만 새로운 방법으로 재도전하거나 실패에서 배우는 자세가 필요할 것이며 자신을 속이며 현실을 피하는 일은 없어야 할걸세.','','78bkXsjKviV3aywbswR1nAWNDdI3'),(549,'월별운세','희망을 가지고 희망을 가지고 스스로를 믿으며 긍정적으로 지내시며 미련을 가져서는 안되며 금전적인 문제가 생길 수 있으니 돈과 관련 없는 일들에 관심을 가지는 것도 중요해 보인다.','','kWlR3JzzTafyMiaiYcFNuusX8hr2'),(557,'성공운','희망을 가지고 희망을 가지고 스스로를 믿으며 긍정적으로 지내시며 미련을 가져서는 안되며 금전적인 문제가 생길 수 있으니 돈과 관련 없는 일들에 관심을 가지는 것도 중요해 보인다.','성공하고 싶은데 뭘 해야 할까','kWlR3JzzTafyMiaiYcFNuusX8hr2'),(569,'월별운세','행여 이를 놓쳐 미련을 가진다면 더 큰 재앙이 올 것이니 이를 꼭 기억해야 하며 이를 놓쳐 미련을 가진다면 더 큰 재앙이 올 것이니 이를 꼭 기억해야 한다.','','2OnaAL7xm8RIzmtZhkqr8aElinp1'),(577,'사랑운','','사랑운 봐줘','2OnaAL7xm8RIzmtZhkqr8aElinp1'),(589,'월별운세','행운을 바라기 보단 사소한 것도 차근차근 신경 쓰며 나아가야 할 때이며, 다툼이 일어날 수 있으니 마음의 준비를 하는 게 좋을 것이며 자만하지 말고 현재 자산 상태를 다시 점검하는 것이 좋아 보인다.','','2786819089'),(597,'신년운세','기운이 넘치는 시기이니 서두르다 일을 그르치는 일이 없도록 하세. 중요한 것을 잃을 수 있는 시기라 이를 지키고자 부정을 저지르면 더 큰 화를 불러일으킬 것이니 조심해야 하며 금전적인 문제가 생길 수 있으니 금전적인 문제가 생길 수 있으니 돈과 관련 없는 일들에 관심을 가지는 것도 중요해 보인다.','','2785185456'),(611,'월별운세','모든 준비는 끝났으나 망설임에 나아가지 못하는 시기인만큼 초조해하지 말고 차분하게 나아가 좋은 시기를 놓치지 말게나','','78bkXsjKviV3aywbswR1nAWNDdI3'),(619,'신년운세','과거에서 벗어나 새로움을 향해 나아가기 좋은 시기라 하겠으나 과하면 독이요 적당하면 복이 올 수 있으니 자신감과 엄격함이 동시에 필요한 시기이다.','','78bkXsjKviV3aywbswR1nAWNDdI3'),(633,'월별운세','그동안의 실패가 성공을 향한 열쇠로 전환되는 시기라 생각하며 새로운 마음으로 도전해보시게나','','78bkXsjKviV3aywbswR1nAWNDdI3'),(641,'사랑운','','좋아하는 사람에게 고백해도 될까요','2OnaAL7xm8RIzmtZhkqr8aElinp1'),(665,'신년운세','남에게 잘 보이기 위해 거짓된 행동을 해서는 안되는데 이러한 행동은 자네에게 큰 독이 되어 돌아올 것이므로 조금만 쉬면서 작은 변화를 준다면 극복할 수 있을 터이니 끝까지 힘내시게나','이 사람과의 관계가 지속될 수 있을까요?','2OnaAL7xm8RIzmtZhkqr8aElinp1'),(679,'사랑운','','그 사람을 좋아해도 될까요?','2OnaAL7xm8RIzmtZhkqr8aElinp1'),(703,'재물운','','일확천금 하고싶어','kWlR3JzzTafyMiaiYcFNuusX8hr2'),(715,'사랑운','','짝사랑 중인 여사친에게 고백해도 될까요?','2OnaAL7xm8RIzmtZhkqr8aElinp1'),(727,'사랑운','','짝사랑 중인 여사친에게 고백해도 될까요..?','2OnaAL7xm8RIzmtZhkqr8aElinp1'),(739,'사랑운','','짝사랑 중인 여사친에게 고백해도 될까요?','2OnaAL7xm8RIzmtZhkqr8aElinp1'),(751,'사랑운','','짝사랑 중인 여사친에게 고백해도 될까요..?','2OnaAL7xm8RIzmtZhkqr8aElinp1'),(763,'사랑운','','짝사랑 중인 여사친에게 고백해도 될까?','2OnaAL7xm8RIzmtZhkqr8aElinp1'),(775,'사랑운','','짝사랑 중인 여사친에게 고백해도 될까요?','2OnaAL7xm8RIzmtZhkqr8aElinp1'),(787,'사랑운','','짝사랑 중인 여사친에게 고백해도 될까?','2OnaAL7xm8RIzmtZhkqr8aElinp1'),(799,'사랑운','','짝사랑 중인 여사친에게 고백해도 될까요?','2OnaAL7xm8RIzmtZhkqr8aElinp1'),(811,'사랑운','','짝사랑 중인 여사친에게 고백해도 될까요?','2OnaAL7xm8RIzmtZhkqr8aElinp1'),(823,'사랑운','','짝사랑 중인 여사친에게 고백해도 될까요?','2OnaAL7xm8RIzmtZhkqr8aElinp1'),(835,'사랑운','','서로 호감이 있는 여사친에게 고백해도 될까요?','2OnaAL7xm8RIzmtZhkqr8aElinp1'),(847,'사랑운','','서로 호감이 있는 여사친에게 고백해도 될까요?','2OnaAL7xm8RIzmtZhkqr8aElinp1'),(859,'사랑운','','서로 호감이 있는 여사친에게 고백해도 될까?','2OnaAL7xm8RIzmtZhkqr8aElinp1'),(871,'사랑운','','오늘 사랑하는 그 사람에게 고백해도 될까?','2785185456'),(883,'신년운세','마음이 불편해 성과에 매달리다 건강을 잃을 수 있는 시기인 만큼 현실을 받아들이고 일을 마무리 짓는 것이 좋아 보인다.','오늘 사랑하는 그 사람에게 고백해도 될까?','2785185456'),(897,'사랑운','','사랑운 봐줘','2OnaAL7xm8RIzmtZhkqr8aElinp1'),(909,'성공운','마음이 불편해 성과에 매달리다 건강을 잃을 수 있는 시기인 만큼 현실을 받아들이고 일을 마무리 짓는 것이 좋아 보인다.','지난 금요일에 진행한 면접에서 좋은 결과를 기대해도 될까?','2785185456'),(921,'사랑운','마음이 불편해 성과에 매달리다 건강을 잃을 수 있는 시기인 만큼 현실을 받아들이고 일을 마무리 짓는 것이 좋아 보인다.','좋아하는 그 사람에게 고백해도 될까요','2785185456'),(933,'재물운','','로또 1068회에 당첨 될 수 있을까요?','78bkXsjKviV3aywbswR1nAWNDdI3'),(945,'월별운세','삶이 균형을 균형이 깨져 상황이 좋지 않을 수 있으므로 우선순위를 정해 준비한 것을 모두 발휘할 수 있도록 노력해야 하며 약한 마음을 숨기고 교활한 지혜도 필요해 보인다.','로또 1068회에 당첨 될 수 있을까요?','78bkXsjKviV3aywbswR1nAWNDdI3'),(953,'성공운','','이번주 토요일에 칙칙이가 안양에 오는데 성공 할 수 있을까?','78bkXsjKviV3aywbswR1nAWNDdI3'),(965,'사랑운','','남자친구가 안 놀아줘','kWlR3JzzTafyMiaiYcFNuusX8hr2');
/*!40000 ALTER TABLE `report_question` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-19  9:27:01
