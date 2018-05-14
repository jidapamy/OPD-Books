-- -----------------------------------------------------
-- CREATE SCHEMA `OPDBooks`
-- -----------------------------------------------------
DROP DATABASE IF EXISTS `OPDBooks`;
CREATE SCHEMA IF NOT EXISTS `OPDBooks` DEFAULT CHARACTER SET utf8 ;
USE `OPDBooks` ;

-- -----------------------------------------------------
-- Table structure for table `OPDBooks`.`PatientRecords`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `OPDBooks`.`PatientRecords`;
CREATE TABLE IF NOT EXISTS `OPDBooks`.`PatientRecords` (
 `citizenId` varchar(20) NOT NULL,
 `hospitalNumber` varchar(20) NOT NULL,
 `nameTitle` varchar(20) NOT NULL,
 `firstname` varchar(50) NOT NULL,
 `lastname` varchar(50) NOT NULL,
 `email` varchar(30) NOT NULL,
 `password` varchar(30) NOT NULL,
 `gender` char(2) NOT NULL,
 `dob` varchar(10) NOT NULL,
 `bloodgroup` char(2) NOT NULL,
 `nationality` varchar(20) NOT NULL,
 `religion` varchar(20) NOT NULL,
 `status` varchar(20) NOT NULL,
 `occupation` varchar(20) NOT NULL,
 `country` varchar(20) NOT NULL,
 `congenitalDisease` varchar(100) NOT NULL,
 `homePhonenumber` varchar(20) NOT NULL,
 `mobileNumber` varchar(20) NOT NULL,
 `typeofHouse` varchar(20) NOT NULL,
 `address` varchar(100) NOT NULL,
 `province` varchar(100) NOT NULL,
 `district` varchar(100) NOT NULL,
 `subDistrict` varchar(100) NOT NULL,
 `zipcode` varchar(20) NOT NULL,
 `emerTitile` varchar(20) NOT NULL,
 `emerFirstname` varchar(50) NOT NULL,
 `emerLastname` varchar(50) NOT NULL,
 `emerRelationship` varchar(50) NOT NULL,
 `emerHomePhonenumber` varchar(20) NOT NULL,
 `emerMobileNumber` varchar(20) NOT NULL,
 `emerTypeofHouse` varchar(20) NOT NULL,
 `emerAddress` varchar(100) NOT NULL,
 `emerProvince` varchar(100) NOT NULL,
 `emerDistrict` varchar(100) NOT NULL,
 `emerSubDistrict` varchar(100) NOT NULL,
 `emerZipcode` varchar(20) NOT NULL,
 `fatherFirstname` varchar(100) NOT NULL,
 `fatherLastname` varchar(100) NOT NULL,
 `motherFirstname` varchar(100) NOT NULL,
 `motherLastname` varchar(100) NOT NULL,
 `allergy` varchar(100) NOT NULL,
 `privilege` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
ALTER TABLE `OPDBooks`.`PatientRecords`
ADD PRIMARY KEY (`citizenId`);

-- -----------------------------------------------------
-- Table structure for table `OPDBooks`.`MedicalRecords`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `OPDBooks`.`MedicalRecords`;
CREATE TABLE IF NOT EXISTS `OPDBooks`.`MedicalRecords` (
 `visitNumber` varchar(50) NOT NULL,
 `patient` varchar(100) NOT NULL,
 `pharmacist` varchar(100) NOT NULL,
 `doctor` varchar(100) NOT NULL,
 `nurse` varchar(100) NOT NULL,
 `clinic` varchar(100) NOT NULL,
 `height` int(11) NOT NULL,
 `bodyWeight` int(11) NOT NULL,
 `bmi` int(11) NOT NULL,
 `temperature` int(11) NOT NULL,
 `pulseRate` int(11) NOT NULL,
 `respiratoryRate` int(11) NOT NULL,
 `BP1` varchar(20) NOT NULL,
 `BP2` varchar(20) NOT NULL,
 `BP3` varchar(20) NOT NULL,
 `chiefComplaint` varchar(20) NOT NULL,
 `dateTimeOfNurse` varchar(50) NOT NULL,
 `presentIllness` varchar(150) NOT NULL,
 `physicalExem` varchar(150) NOT NULL,
 `diagnosis` varchar(150) NOT NULL,
 `treatment` varchar(150) NOT NULL,
 `recommendation` varchar(150) NOT NULL,
 `appointment` varchar(150) NOT NULL,
 `dateTimeOfDoctor` varchar(50) NOT NULL,
 `medicines` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
ALTER TABLE `OPDBooks`.`MedicalRecords`
 	ADD PRIMARY KEY (`visitNumber`);

