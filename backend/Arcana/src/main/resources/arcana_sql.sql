drop schema arcanaDB;
CREATE SCHEMA IF NOT EXISTS `arcanaDB` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `arcanaDB` ;

-- -----------------------------------------------------
-- Table `arcanaDB`.`CARD`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `arcanaDB`.`CARD` (

  `card_idx` int NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`card_idx`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `arcanaDB`.`INSTANT`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `arcanaDB`.`INSTANT` (
  `idx` int NOT NULL,
  `card_idx` int NOT NULL,
  `question` VARCHAR(2000) NOT NULL,
  `advice` VARCHAR(2000) NOT NULL,
  PRIMARY KEY (`idx`),
  INDEX `card_idx` (`card_idx` ASC) VISIBLE,
  CONSTRAINT `INSTANT_ibfk_1`
    FOREIGN KEY (`card_idx`)
    REFERENCES `arcanaDB`.`CARD` (`card_idx`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `arcanaDB`.`LUCKY`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `arcanaDB`.`LUCKY` (
  `lucky_idx` int NOT NULL,
  `card_idx` int NOT NULL,
  `luckyment` VARCHAR(2000) NOT NULL,
  PRIMARY KEY (`lucky_idx`),
  INDEX `card_idx` (`card_idx` ASC) VISIBLE,
  CONSTRAINT `LUCKY_ibfk_1`
    FOREIGN KEY (`card_idx`)
    REFERENCES `arcanaDB`.`CARD` (`card_idx`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `arcanaDB`.`TIME`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `arcanaDB`.`TIME` (
  `idx` int NOT NULL,
  `card_idx` int NOT NULL,
  `timement` VARCHAR(2000) NOT NULL,
  PRIMARY KEY (`idx`),
  INDEX `card_idx` (`card_idx` ASC) VISIBLE,
  CONSTRAINT `TIME_ibfk_1`
    FOREIGN KEY (`card_idx`)
    REFERENCES `arcanaDB`.`CARD` (`card_idx`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `arcanaDB`.`USER`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `arcanaDB`.`USER` (
  `uid` VARCHAR(50) NOT NULL,
  `token` VARCHAR(50) NOT NULL,
  `provider` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `nickname` VARCHAR(50) NOT NULL,
  `weekly_count` INT NOT NULL,
  `ticket` INT NOT NULL,
  PRIMARY KEY (`uid`),
  UNIQUE INDEX `nickname` (`nickname` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
