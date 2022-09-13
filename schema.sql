-- -----------------------------------------------------
-- Schema Sport-News-Project
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Sport-News-Project
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Sport-News-Project` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema new_schema1
-- -----------------------------------------------------
USE `Sport-News-Project` ;

-- -----------------------------------------------------
-- Table `Sport-News-Project`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Sport-News-Project`.`users` (
  `idusers` INT NOT NULL,
  `Name` VARCHAR(45) NOT NULL,
  `Nickname` VARCHAR(45) NOT NULL,
  `Email` VARCHAR(45) NOT NULL,
  `Password` VARCHAR(45) NOT NULL,
  `Img` VARCHAR(45) NOT NULL,
  `Status` VARCHAR(5) NOT NULL,
  PRIMARY KEY (`idusers`),
  UNIQUE INDEX `Email_UNIQUE` (`Email` ASC) VISIBLE)



-- -----------------------------------------------------
-- Table `Sport-News-Project`.`Admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Sport-News-Project`.`Admin` (
  `idPosts` INT NOT NULL,
  `Name` VARCHAR(45) NOT NULL,
  `Email` VARCHAR(45) NOT NULL,
  `Password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idPosts`))



-- -----------------------------------------------------
-- Table `Sport-News-Project`.`Posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Sport-News-Project`.`Posts` (
  `idPosts` INT NOT NULL,
  `Content` VARCHAR(45) NULL,
  `Text` VARCHAR(45) NOT NULL,
  `Theme` VARCHAR(45) NULL,
  `users_idusers` INT NOT NULL,
  PRIMARY KEY (`idPosts`, `users_idusers`),
  INDEX `fk_Posts_users_idx` (`users_idusers` ASC) VISIBLE,
  CONSTRAINT `fk_Posts_users`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `Sport-News-Project`.`users` (`idusers`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)



-- -----------------------------------------------------
-- Table `Sport-News-Project`.`Comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Sport-News-Project`.`Comments` (
  `idComments` INT NOT NULL,
  `Author` VARCHAR(45) NOT NULL,
  `Content` MEDIUMTEXT NOT NULL,
  `Posts_idPosts` INT NOT NULL,
  `Posts_users_idusers` INT NOT NULL,
  PRIMARY KEY (`idComments`, `Posts_idPosts`, `Posts_users_idusers`),
  INDEX `fk_Comments_Posts1_idx` (`Posts_idPosts` ASC, `Posts_users_idusers` ASC) VISIBLE,
  CONSTRAINT `fk_Comments_Posts1`
    FOREIGN KEY (`Posts_idPosts` , `Posts_users_idusers`)
    REFERENCES `Sport-News-Project`.`Posts` (`idPosts` , `users_idusers`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
