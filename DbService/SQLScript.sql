DROP TABLE IF EXISTS `Patients`;
CREATE TABLE `Patients` (
  `citizenId` varchar(45) NOT NULL,
  `dob` varchar(45) NOT NULL,
  `nametitle` varchar(45) NOT NULL,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `gender` varchar(45) NOT NULL,
  `congenitalDisease` varchar(45) NOT NULL,
  `bloodgroup` varchar(45) NOT NULL,
  `religion` varchar(45) NOT NULL,
  `nationality` varchar(45) NOT NULL,
  `country` varchar(45) NOT NULL,
  `status` varchar(45) NOT NULL,
  `occupartion` varchar(45) NOT NULL,
  `homePhonenumber` varchar(45) DEFAULT NULL,
  `mobileNumber` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `allergy` varchar(45) NOT NULL,
  `privilege` varchar(45) NOT NULL,
  `typeofHouse` varchar(45) NOT NULL,
  `address` varchar(100) NOT NULL,
  `province` varchar(45) NOT NULL,
  `district` varchar(45) NOT NULL,
  `subDistrict` varchar(45) NOT NULL,
  `zipcode` varchar(45) NOT NULL,
  `emerTitle` varchar(45) DEFAULT NULL,
  `emerFirstname` varchar(45) DEFAULT NULL,
  `emerLastname` varchar(45) DEFAULT NULL,
  `emerRelationship` varchar(45) DEFAULT NULL,
  `emerHomePhonenumber` varchar(45) DEFAULT NULL,
  `emerMobileNumber` varchar(45) DEFAULT NULL,
  `emerTypeofHouse` varchar(45) DEFAULT NULL,
  `emerAddress` varchar(45) DEFAULT NULL,
  `emerProvince` varchar(45) DEFAULT NULL,
  `emerDistrict` varchar(45) DEFAULT NULL,
  `emerSubDistrict` varchar(45) DEFAULT NULL,
  `emerZipcode` varchar(45) DEFAULT NULL,
  `fatherFirstname` varchar(45) DEFAULT NULL,
  `fatherLastname` varchar(45) DEFAULT NULL,
  `motherFirstname` varchar(45) DEFAULT NULL,
  `motherLastname` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`citizenId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `Diagnosis`;
CREATE TABLE `Diagnosis` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `presentIllness` varchar(255) NOT NULL,
  `physicalExem` varchar(255) NOT NULL,
  `diagnosis` varchar(255) NOT NULL,
  `treatment` varchar(255) NOT NULL,
  `recommendation` varchar(255) NOT NULL,
  `appointment` varchar(45) DEFAULT NULL,
  `doctorName` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `InitialTreatment`;
CREATE TABLE `InitialTreatment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `height` varchar(45) NOT NULL,
  `bodyWeight` varchar(45) NOT NULL,
  `bmi` varchar(45) NOT NULL,
  `temperature` varchar(45) NOT NULL,
  `date` varchar(45) NOT NULL,
  `time` varchar(45) NOT NULL,
  `pulseRate` varchar(45) NOT NULL,
  `respiratoryRate` varchar(45) NOT NULL,
  `BP1` varchar(45) DEFAULT NULL,
  `BP2` varchar(45) DEFAULT NULL,
  `BP3` varchar(45) DEFAULT NULL,
  `chiefComplaint` varchar(45) DEFAULT NULL,
  `nurseName` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `MedicalRecords`;
CREATE TABLE `MedicalRecords` (
  `mdrId` int(11) NOT NULL AUTO_INCREMENT,
  `visitNumber` varchar(45) NOT NULL,
  `citizenId` varchar(45) NOT NULL,
  `initialTreatmentId` int(11) DEFAULT NULL,
  `diagnosisId` int(11) DEFAULT NULL,
  PRIMARY KEY (`mdrId`),
  KEY `medicalrecords_ibfk_1` (`citizenId`),
  KEY `id_idx` (`diagnosisId`),
  KEY `id_idx1` (`initialTreatmentId`),
  CONSTRAINT `diagnosisId_fk` FOREIGN KEY (`diagnosisId`) REFERENCES `Diagnosis` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `initialTreatmentId_fk` FOREIGN KEY (`initialTreatmentId`) REFERENCES `InitialTreatment` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `medicalrecords_ibfk_1` FOREIGN KEY (`citizenId`) REFERENCES `Patients` (`citizenId`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `Queues`;
CREATE TABLE `Queues` (
  `queueId` int(11) NOT NULL AUTO_INCREMENT,
  `status` int(11) NOT NULL DEFAULT '2',
  `visitNumber` varchar(45) NOT NULL,
  `citizenId` varchar(45) NOT NULL,
  `mdrId` int(11) DEFAULT NULL,
  PRIMARY KEY (`queueId`),
  KEY `queues_ibfk_1` (`citizenId`),
  CONSTRAINT `queues_ibfk_1` FOREIGN KEY (`citizenId`) REFERENCES `Patients` (`citizenId`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;