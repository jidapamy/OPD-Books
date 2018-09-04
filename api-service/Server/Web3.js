const Web3 = require('web3');
var web3 = new Web3();

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
		"name": "getInfoPatientPart1",
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
				"name": "_citizenId",
				"type": "bytes32"
			}
		],
		"name": "getEmergencyContactPart2",
		"outputs": [
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
				"name": "_citizenId",
				"type": "bytes32"
			}
		],
		"name": "getEmergencyContactPart1",
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
				"name": "_citizenId",
				"type": "bytes32"
			}
		],
		"name": "getInfoPatientPart2",
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
		"name": "checkTxCompleteForNurse",
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
				"name": "_medicalRecordId",
				"type": "bytes32"
			},
			{
				"name": "_doctorName",
				"type": "bytes32"
			}
		],
		"name": "checkTxCompleteForDoctor",
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
		"inputs": [
			{
				"name": "_citizenId",
				"type": "bytes32"
			}
		],
		"name": "getInfoPatientPart4",
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
		"inputs": [
			{
				"name": "_citizenId",
				"type": "bytes32"
			}
		],
		"name": "getInfoPatientPart3",
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
				"name": "_hospitalnumber",
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


const contract = PatientRecordContract.at("0x5480bc3cb9ac1a8acf4036044e0951a510cd0e46");

const defaultAccount = { from: web3.eth.accounts[0], gas: 6000000 }

module.exports = {
  web3: web3,
  contract: contract,
  defaultAccount:defaultAccount
};
