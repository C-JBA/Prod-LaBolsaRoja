-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema la_bolsa_rojadb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `la_bolsa_rojadb` ;

-- -----------------------------------------------------
-- Schema la_bolsa_rojadb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `la_bolsa_rojadb` DEFAULT CHARACTER SET utf8 ;
USE `la_bolsa_rojadb` ;

-- -----------------------------------------------------
-- Table `la_bolsa_rojadb`.`Categoria`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `la_bolsa_rojadb`.`Categoria` ;

CREATE TABLE IF NOT EXISTS `la_bolsa_rojadb`.`Categoria` (
  `idCategoria` INT NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`idCategoria`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `la_bolsa_rojadb`.`Material`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `la_bolsa_rojadb`.`Material` ;

CREATE TABLE IF NOT EXISTS `la_bolsa_rojadb`.`Material` (
  `idMaterial` INT NOT NULL AUTO_INCREMENT,
  `material` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idMaterial`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `la_bolsa_rojadb`.`Producto`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `la_bolsa_rojadb`.`Producto` ;

CREATE TABLE IF NOT EXISTS `la_bolsa_rojadb`.`Producto` (
  `idProducto` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(150) NOT NULL,
  `largo` INT NOT NULL,
  `ancho` INT NOT NULL,
  `fuelle` INT NULL,
  `descripcion` VARCHAR(250) NOT NULL,
  `precio` FLOAT NOT NULL,
  `img` VARCHAR(200) NULL,
  `Categoria_idCategoria` INT NOT NULL,
  `Material_idMaterial` INT NOT NULL,
  PRIMARY KEY (`idProducto`, `Categoria_idCategoria`, `Material_idMaterial`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `la_bolsa_rojadb`.`Usuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `la_bolsa_rojadb`.`Usuario` ;

CREATE TABLE IF NOT EXISTS `la_bolsa_rojadb`.`Usuario` (
  `idUsuarios` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(150) NOT NULL,
  `email` VARCHAR(70) NOT NULL,
  `telefono` VARCHAR(10) NULL,
  `contrasena` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idUsuarios`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `la_bolsa_rojadb`.`Pedido`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `la_bolsa_rojadb`.`Pedido` ;

CREATE TABLE IF NOT EXISTS `la_bolsa_rojadb`.`Pedido` (
  `idPedido` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATE NOT NULL,
  `total` FLOAT NOT NULL,
  `Usuario_idUsuarios` INT NOT NULL,
  PRIMARY KEY (`idPedido`, `Usuario_idUsuarios`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `la_bolsa_rojadb`.`Detalle_pedido`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `la_bolsa_rojadb`.`Detalle_pedido` ;

CREATE TABLE IF NOT EXISTS `la_bolsa_rojadb`.`Detalle_pedido` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cantidad` INT NOT NULL,
  `Pedido_idPedido` INT NOT NULL,
  `Producto_idProducto` INT NOT NULL,
  PRIMARY KEY (`id`, `Pedido_idPedido`, `Producto_idProducto`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
