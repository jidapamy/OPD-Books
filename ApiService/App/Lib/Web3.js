const Web3 = require('web3');
let web3 = new Web3();

// web3 = new Web3(new Web3.providers.HttpProvider("http://13.250.32.62:8545"));
web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
web3.eth.defaultAccount = web3.eth.accounts[0];
const PatientRecordContract = web3.eth.contract(
	[
		{
			"constant": true,
			"inputs": [
				{
					"name": "_citizenId",
					"type": "bytes32"
				},
				{
					"name": "_email",
					"type": "bytes32"
				}
			],
			"name": "ForgetPassword",
			"outputs": [
				{
					"name": "",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "_citizenId",
					"type": "bytes32"
				}
			],
			"name": "getInfoPatientPart3",
			"outputs": [
				{
					"name": "congenitalDisease",
					"type": "bytes32"
				},
				{
					"name": "bloodGroup",
					"type": "bytes32"
				},
				{
					"name": "religion",
					"type": "bytes32"
				},
				{
					"name": "nationality",
					"type": "bytes32"
				},
				{
					"name": "country",
					"type": "bytes32"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"name": "patientAccounts",
			"outputs": [
				{
					"name": "",
					"type": "bytes32"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"name": "medicalRecordList",
			"outputs": [
				{
					"name": "",
					"type": "bytes32"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "_citizenId",
					"type": "bytes32"
				}
			],
			"name": "getInfoPatientPart2",
			"outputs": [
				{
					"name": "dob",
					"type": "bytes32"
				},
				{
					"name": "nameTitle",
					"type": "bytes32"
				},
				{
					"name": "firstname",
					"type": "bytes32"
				},
				{
					"name": "lastname",
					"type": "bytes32"
				},
				{
					"name": "gender",
					"type": "bytes32"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "_medicalRecordId",
					"type": "bytes32"
				}
			],
			"name": "haveMedicalRecords",
			"outputs": [
				{
					"name": "",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "_patientCitizenId",
					"type": "bytes32"
				},
				{
					"name": "_medicalRecordId",
					"type": "bytes32"
				}
			],
			"name": "haveHistoryOfPatient",
			"outputs": [
				{
					"name": "",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "_email",
					"type": "bytes32"
				}
			],
			"name": "haveEmail",
			"outputs": [
				{
					"name": "",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "_citizenId",
					"type": "bytes32"
				}
			],
			"name": "haveCitizenId",
			"outputs": [
				{
					"name": "",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "_citizenId",
					"type": "bytes32"
				}
			],
			"name": "getPatientParent",
			"outputs": [
				{
					"name": "fatherFirstname",
					"type": "bytes32"
				},
				{
					"name": "fatherLastname",
					"type": "bytes32"
				},
				{
					"name": "motherFirstname",
					"type": "bytes32"
				},
				{
					"name": "motherLastname",
					"type": "bytes32"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "_citizenId",
					"type": "bytes32"
				}
			],
			"name": "getInfoPatientPart1",
			"outputs": [
				{
					"name": "registerDate",
					"type": "bytes32"
				},
				{
					"name": "patientCitizenId",
					"type": "bytes32"
				},
				{
					"name": "password",
					"type": "bytes32"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "_medicalRecordId",
					"type": "bytes32"
				}
			],
			"name": "getPatientIdFormMDR",
			"outputs": [
				{
					"name": "",
					"type": "bytes32"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "id",
					"type": "bytes32"
				},
				{
					"name": "index",
					"type": "uint256"
				}
			],
			"name": "getHistoryMedicalRecordPatient",
			"outputs": [
				{
					"name": "",
					"type": "bytes32"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "_citizenId",
					"type": "bytes32"
				}
			],
			"name": "getInfoPatientPart4",
			"outputs": [
				{
					"name": "status",
					"type": "bytes32"
				},
				{
					"name": "occupartion",
					"type": "bytes32"
				},
				{
					"name": "homePhonenumber",
					"type": "bytes32"
				},
				{
					"name": "mobileNumber",
					"type": "bytes32"
				},
				{
					"name": "email",
					"type": "bytes32"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "_citizenId",
					"type": "bytes32"
				}
			],
			"name": "getEmergencyContactPart2",
			"outputs": [
				{
					"name": "emerTypeofHouse",
					"type": "bytes32"
				},
				{
					"name": "emerAddress",
					"type": "string"
				},
				{
					"name": "emerProvince",
					"type": "bytes32"
				},
				{
					"name": "emerDistrict",
					"type": "bytes32"
				},
				{
					"name": "emerSubDistrict",
					"type": "bytes32"
				},
				{
					"name": "emerZipcode",
					"type": "bytes32"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "_medicalRecordId",
					"type": "bytes32"
				}
			],
			"name": "getMedicalRecordForShowHistory",
			"outputs": [
				{
					"name": "",
					"type": "bytes32"
				},
				{
					"name": "",
					"type": "bytes32"
				},
				{
					"name": "",
					"type": "string"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "_citizenId",
					"type": "bytes32"
				}
			],
			"name": "getEmergencyContactPart1",
			"outputs": [
				{
					"name": "emerTitle",
					"type": "bytes32"
				},
				{
					"name": "emerFirstname",
					"type": "bytes32"
				},
				{
					"name": "emerLastname",
					"type": "bytes32"
				},
				{
					"name": "emerRelationship",
					"type": "bytes32"
				},
				{
					"name": "emerHomePhonenumber",
					"type": "bytes32"
				},
				{
					"name": "emerMobileNumber",
					"type": "bytes32"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "_medicalRecordId",
					"type": "bytes32"
				}
			],
			"name": "getMedicalRecordForPharmacy",
			"outputs": [
				{
					"name": "",
					"type": "string"
				},
				{
					"name": "",
					"type": "string"
				},
				{
					"name": "",
					"type": "string"
				},
				{
					"name": "",
					"type": "bytes32"
				},
				{
					"name": "",
					"type": "bytes32"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "_citizenId",
					"type": "bytes32"
				}
			],
			"name": "getDetailPatient",
			"outputs": [
				{
					"name": "",
					"type": "bytes32"
				},
				{
					"name": "",
					"type": "bytes32"
				},
				{
					"name": "",
					"type": "bytes32"
				},
				{
					"name": "",
					"type": "bytes32"
				},
				{
					"name": "",
					"type": "bytes32"
				},
				{
					"name": "",
					"type": "bytes32"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "_medicalRecordId",
					"type": "bytes32"
				}
			],
			"name": "getMedicalRecordForNursePart2",
			"outputs": [
				{
					"name": "",
					"type": "bytes32"
				},
				{
					"name": "",
					"type": "bytes32"
				},
				{
					"name": "",
					"type": "bytes32"
				},
				{
					"name": "",
					"type": "bytes32"
				},
				{
					"name": "",
					"type": "bytes32"
				},
				{
					"name": "",
					"type": "string"
				},
				{
					"name": "",
					"type": "bytes32"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "_citizenId",
					"type": "bytes32"
				}
			],
			"name": "getAddressPatient",
			"outputs": [
				{
					"name": "typeofHouse",
					"type": "bytes32"
				},
				{
					"name": "patientAddress",
					"type": "string"
				},
				{
					"name": "province",
					"type": "bytes32"
				},
				{
					"name": "district",
					"type": "bytes32"
				},
				{
					"name": "subDistrict",
					"type": "bytes32"
				},
				{
					"name": "zipcode",
					"type": "bytes32"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "_medicalRecordId",
					"type": "bytes32"
				}
			],
			"name": "getMedicalRecordForNursePart1",
			"outputs": [
				{
					"name": "",
					"type": "string"
				},
				{
					"name": "",
					"type": "bytes32"
				},
				{
					"name": "",
					"type": "bytes32"
				},
				{
					"name": "",
					"type": "bytes32"
				},
				{
					"name": "",
					"type": "bytes32"
				},
				{
					"name": "",
					"type": "bytes32"
				},
				{
					"name": "",
					"type": "bytes32"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "_patientCitizenId",
					"type": "bytes32"
				}
			],
			"name": "countHistoryMedicalRecordForPatient",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "_medicalRecordId",
					"type": "bytes32"
				}
			],
			"name": "getMedicalRecordForDocter",
			"outputs": [
				{
					"name": "",
					"type": "string"
				},
				{
					"name": "",
					"type": "string"
				},
				{
					"name": "",
					"type": "string"
				},
				{
					"name": "",
					"type": "string"
				},
				{
					"name": "",
					"type": "string"
				},
				{
					"name": "",
					"type": "string"
				},
				{
					"name": "",
					"type": "bytes32"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "_medicalRecordId",
					"type": "bytes32"
				}
			],
			"name": "alreadyDataInMedicalRecordsId",
			"outputs": [
				{
					"name": "",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "getLengthPatientAccounts",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "_citizenId",
					"type": "bytes32"
				},
				{
					"name": "_password",
					"type": "bytes32"
				}
			],
			"name": "Login",
			"outputs": [
				{
					"name": "",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "getLengthMedicalRecords",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "_patientCitizenId",
					"type": "bytes32"
				},
				{
					"name": "_medicalRecordId",
					"type": "bytes32"
				}
			],
			"name": "haveMedicalRecordsOfPatient",
			"outputs": [
				{
					"name": "",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "_citizenId",
					"type": "bytes32"
				}
			],
			"name": "getPatientAllergy",
			"outputs": [
				{
					"name": "allergy",
					"type": "bytes32"
				},
				{
					"name": "privilege",
					"type": "bytes32"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_citizenId",
					"type": "bytes32"
				},
				{
					"name": "_congenitaldisease",
					"type": "bytes32"
				},
				{
					"name": "_bloodgroup",
					"type": "bytes32"
				},
				{
					"name": "_religion",
					"type": "bytes32"
				},
				{
					"name": "_nationality",
					"type": "bytes32"
				},
				{
					"name": "_country",
					"type": "bytes32"
				}
			],
			"name": "setInfoPatientPart3",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_citizenId",
					"type": "bytes32"
				},
				{
					"name": "_fatherFirstname",
					"type": "bytes32"
				},
				{
					"name": "_fatherLastname",
					"type": "bytes32"
				},
				{
					"name": "_motherFirstname",
					"type": "bytes32"
				},
				{
					"name": "_motherLastname",
					"type": "bytes32"
				}
			],
			"name": "setPatientParent",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_citizenId",
					"type": "bytes32"
				},
				{
					"name": "_status",
					"type": "bytes32"
				},
				{
					"name": "_occupartion",
					"type": "bytes32"
				},
				{
					"name": "_homephonenumber",
					"type": "bytes32"
				},
				{
					"name": "_mobilenumber",
					"type": "bytes32"
				},
				{
					"name": "_email",
					"type": "bytes32"
				}
			],
			"name": "setInfoPatientPart4",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_citizenId",
					"type": "bytes32"
				},
				{
					"name": "_allergy",
					"type": "bytes32"
				},
				{
					"name": "_privilege",
					"type": "bytes32"
				}
			],
			"name": "setPatientAllergy",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_emails",
					"type": "bytes32"
				}
			],
			"name": "setEmail",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_medicalRecordId",
					"type": "bytes32"
				},
				{
					"name": "_pulseRate",
					"type": "bytes32"
				},
				{
					"name": "_respiratoryRate",
					"type": "bytes32"
				},
				{
					"name": "_BP1",
					"type": "bytes32"
				},
				{
					"name": "_BP2",
					"type": "bytes32"
				},
				{
					"name": "_BP3",
					"type": "bytes32"
				},
				{
					"name": "_chiefComplaint",
					"type": "string"
				},
				{
					"name": "_nurseName",
					"type": "bytes32"
				}
			],
			"name": "setMedicalRecordForNursePart2",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_patientCitizenId",
					"type": "bytes32"
				},
				{
					"name": "_medicalRecordId",
					"type": "bytes32"
				}
			],
			"name": "addHistoryMedicalRecord",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_patientCitizenId",
					"type": "bytes32"
				},
				{
					"name": "_medicalRecordId",
					"type": "bytes32"
				},
				{
					"name": "_clinic",
					"type": "string"
				},
				{
					"name": "_bodyHeight",
					"type": "bytes32"
				},
				{
					"name": "_bodyWeight",
					"type": "bytes32"
				},
				{
					"name": "_bmi",
					"type": "bytes32"
				},
				{
					"name": "_temperature",
					"type": "bytes32"
				},
				{
					"name": "_date",
					"type": "bytes32"
				},
				{
					"name": "_time",
					"type": "bytes32"
				}
			],
			"name": "setMedicalRecordForNursePart1",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_medicalRecordId",
					"type": "bytes32"
				},
				{
					"name": "_presentIllness",
					"type": "string"
				},
				{
					"name": "_physicalExem",
					"type": "string"
				},
				{
					"name": "_diagnosis",
					"type": "string"
				},
				{
					"name": "_treatment",
					"type": "string"
				},
				{
					"name": "_recommendation",
					"type": "string"
				},
				{
					"name": "_appointment",
					"type": "string"
				},
				{
					"name": "_doctorName",
					"type": "bytes32"
				}
			],
			"name": "setMedicalRecordForDocter",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_citizenId",
					"type": "bytes32"
				},
				{
					"name": "_emerTitle",
					"type": "bytes32"
				},
				{
					"name": "_emerFirstname",
					"type": "bytes32"
				},
				{
					"name": "_emerLastname",
					"type": "bytes32"
				},
				{
					"name": "_emerRelationship",
					"type": "bytes32"
				},
				{
					"name": "_emerHomePhonenumber",
					"type": "bytes32"
				},
				{
					"name": "_emerMobileNumber",
					"type": "bytes32"
				}
			],
			"name": "setEmergencyContactPart1",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_citizenId",
					"type": "bytes32"
				},
				{
					"name": "_typeofHouse",
					"type": "bytes32"
				},
				{
					"name": "_patienaddress",
					"type": "string"
				},
				{
					"name": "_province",
					"type": "bytes32"
				},
				{
					"name": "_district",
					"type": "bytes32"
				},
				{
					"name": "_subDistrict",
					"type": "bytes32"
				},
				{
					"name": "_zipcode",
					"type": "bytes32"
				}
			],
			"name": "setAddressPatient",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_citizenId",
					"type": "bytes32"
				},
				{
					"name": "_dob",
					"type": "bytes32"
				},
				{
					"name": "_titlename",
					"type": "bytes32"
				},
				{
					"name": "_firstname",
					"type": "bytes32"
				},
				{
					"name": "_lastname",
					"type": "bytes32"
				},
				{
					"name": "_gender",
					"type": "bytes32"
				}
			],
			"name": "setInfoPatientPart2",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_citizenId",
					"type": "bytes32"
				},
				{
					"name": "_registerDate",
					"type": "bytes32"
				},
				{
					"name": "_password",
					"type": "bytes32"
				}
			],
			"name": "setInfoPatientPart1",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_citizenId",
					"type": "bytes32"
				},
				{
					"name": "_emerTypeofHouse",
					"type": "bytes32"
				},
				{
					"name": "_emerAddress",
					"type": "string"
				},
				{
					"name": "_emerProvince",
					"type": "bytes32"
				},
				{
					"name": "_emerDistrict",
					"type": "bytes32"
				},
				{
					"name": "_emerSubDistrict",
					"type": "bytes32"
				},
				{
					"name": "_emerZipcode",
					"type": "bytes32"
				}
			],
			"name": "setEmergencyContactPart2",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		}
	]
);


<<<<<<< HEAD:api-service/app/lib/web3.js
const contract = PatientRecordContract.at("0x823680293a140075f8005b7aa8f7205422fb9276");
=======
const contract = PatientRecordContract.at("0xaedeb6a2ced9db32e6c207e1ed9d5fd7202c5edb");
>>>>>>> 1eacbe27d37ccbe913fb4c0c9025790b8ab5b1f0:ApiService/App/Lib/Web3.js

const defaultAccount = { from: web3.eth.accounts[0], gas: 10000000 }

module.exports = {
  web3,
  contract,
  defaultAccount
};
