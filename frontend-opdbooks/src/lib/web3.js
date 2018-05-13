const Web3 = require('web3');
<<<<<<< HEAD
// import abi from './abi'
=======
// import abi from './abi';
>>>>>>> 2b1cd9577c61a67d5f4d79d6d83ee75aef71fc27
export var web3 = new Web3();

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
console.log(web3)

web3.eth.defaultAccount = web3.eth.accounts[0];
const PatientRecordContract = web3.eth.contract(
    [
        {
            "constant": true,
            "inputs": [
                {
<<<<<<< HEAD
                    "name": "_idcard",
                    "type": "string"
                }
            ],
            "name": "getDetailPatient",
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32"
                },
=======
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
                    "name": "_email",
                    "type": "bytes32"
                }
            ],
            "name": "checkDuplicateEmail",
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
            "name": "getAddressPatient",
            "outputs": [
>>>>>>> 2b1cd9577c61a67d5f4d79d6d83ee75aef71fc27
                {
                    "name": "",
                    "type": "bytes32"
                },
                {
                    "name": "",
<<<<<<< HEAD
                    "type": "bytes32"
=======
                    "type": "string"
>>>>>>> 2b1cd9577c61a67d5f4d79d6d83ee75aef71fc27
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
<<<<<<< HEAD
                    "name": "_idcard",
                    "type": "string"
                }
            ],
            "name": "getPatientParent",
=======
                    "name": "_citizenId",
                    "type": "bytes32"
                }
            ],
            "name": "getDetailPatient",
>>>>>>> 2b1cd9577c61a67d5f4d79d6d83ee75aef71fc27
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
<<<<<<< HEAD
=======
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
>>>>>>> 2b1cd9577c61a67d5f4d79d6d83ee75aef71fc27
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
<<<<<<< HEAD
            "constant": false,
            "inputs": [
                {
                    "name": "_idcard",
                    "type": "string"
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
                    "name": "_idcard",
                    "type": "string"
                },
                {
                    "name": "_emerTypeofHouse",
                    "type": "bytes32"
                },
                {
                    "name": "_emerAddress",
                    "type": "bytes32"
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
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_idcard",
                    "type": "string"
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
=======
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
            "name": "checkDuplicateCitizenId",
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
>>>>>>> 2b1cd9577c61a67d5f4d79d6d83ee75aef71fc27
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
<<<<<<< HEAD
                    "name": "_idcard",
                    "type": "string"
                }
            ],
            "name": "getEmergencyContactPart2",
=======
                    "name": "_citizenId",
                    "type": "bytes32"
                }
            ],
            "name": "getInfoPatientPart2",
>>>>>>> 2b1cd9577c61a67d5f4d79d6d83ee75aef71fc27
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
<<<<<<< HEAD
                },
                {
                    "name": "",
                    "type": "bytes32"
=======
>>>>>>> 2b1cd9577c61a67d5f4d79d6d83ee75aef71fc27
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
<<<<<<< HEAD
                    "name": "_idcard",
                    "type": "string"
                }
            ],
            "name": "getCheckstatus",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
=======
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
>>>>>>> 2b1cd9577c61a67d5f4d79d6d83ee75aef71fc27
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
<<<<<<< HEAD
                    "name": "_idcard",
                    "type": "string"
=======
                    "name": "_citizenId",
                    "type": "bytes32"
>>>>>>> 2b1cd9577c61a67d5f4d79d6d83ee75aef71fc27
                },
                {
                    "name": "_password",
                    "type": "bytes32"
                }
            ],
<<<<<<< HEAD
            "name": "getCheckLogin",
=======
            "name": "Login",
>>>>>>> 2b1cd9577c61a67d5f4d79d6d83ee75aef71fc27
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
<<<<<<< HEAD
                    "name": "_idcard",
                    "type": "string"
                }
            ],
            "name": "getInfoPatientPart1",
=======
                    "name": "_citizenId",
                    "type": "bytes32"
                }
            ],
            "name": "getInfoPatientPart3",
>>>>>>> 2b1cd9577c61a67d5f4d79d6d83ee75aef71fc27
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
<<<<<<< HEAD
                    "type": "string"
=======
                    "type": "bytes32"
>>>>>>> 2b1cd9577c61a67d5f4d79d6d83ee75aef71fc27
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
<<<<<<< HEAD
                    "name": "_idcard",
                    "type": "string"
                }
            ],
            "name": "getAddressPatient",
=======
                    "name": "_citizenId",
                    "type": "bytes32"
                }
            ],
            "name": "getEmergencyContactPart2",
>>>>>>> 2b1cd9577c61a67d5f4d79d6d83ee75aef71fc27
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32"
                },
                {
                    "name": "",
<<<<<<< HEAD
=======
                    "type": "string"
                },
                {
                    "name": "",
>>>>>>> 2b1cd9577c61a67d5f4d79d6d83ee75aef71fc27
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
<<<<<<< HEAD
=======
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
>>>>>>> 2b1cd9577c61a67d5f4d79d6d83ee75aef71fc27
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
<<<<<<< HEAD
                    "name": "_idcard",
                    "type": "string"
=======
                    "name": "_citizenId",
                    "type": "bytes32"
>>>>>>> 2b1cd9577c61a67d5f4d79d6d83ee75aef71fc27
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
<<<<<<< HEAD
            "constant": true,
            "inputs": [
                {
                    "name": "_idcard",
                    "type": "string"
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
                    "name": "_idcard",
                    "type": "string"
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
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "patientAccounts",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
=======
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
>>>>>>> 2b1cd9577c61a67d5f4d79d6d83ee75aef71fc27
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
<<<<<<< HEAD
                    "name": "_idcard",
                    "type": "string"
                },
                {
                    "name": "_typeofHouse",
                    "type": "bytes32"
                },
                {
                    "name": "_patienaddress",
                    "type": "bytes32"
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
=======
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
>>>>>>> 2b1cd9577c61a67d5f4d79d6d83ee75aef71fc27
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
<<<<<<< HEAD
            "constant": true,
            "inputs": [
                {
                    "name": "_idcard",
                    "type": "string"
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
=======
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
>>>>>>> 2b1cd9577c61a67d5f4d79d6d83ee75aef71fc27
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
<<<<<<< HEAD
                    "name": "_idcard",
                    "type": "string"
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
=======
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
>>>>>>> 2b1cd9577c61a67d5f4d79d6d83ee75aef71fc27
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
<<<<<<< HEAD
                    "name": "_idcard",
                    "type": "string"
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
=======
                    "name": "_emails",
                    "type": "bytes32"
                }
            ],
            "name": "setEmail",
>>>>>>> 2b1cd9577c61a67d5f4d79d6d83ee75aef71fc27
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
<<<<<<< HEAD
                    "name": "_idcard",
                    "type": "string"
                },
                {
                    "name": "_statuspatient",
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
=======
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
>>>>>>> 2b1cd9577c61a67d5f4d79d6d83ee75aef71fc27
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
<<<<<<< HEAD
            "constant": true,
            "inputs": [
                {
                    "name": "_idcard",
                    "type": "string"
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
=======
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
>>>>>>> 2b1cd9577c61a67d5f4d79d6d83ee75aef71fc27
            "type": "function"
        }
    ]
);

<<<<<<< HEAD
export const contract = PatientRecordContract.at('0xc4c42267734b1cf356282fdd126e782f87242912');
=======
    
export const contract = PatientRecordContract.at('0x38b1b588a6cebbb3afee0b28226f6f3a71d2322c');
>>>>>>> 2b1cd9577c61a67d5f4d79d6d83ee75aef71fc27

export const defaultAccount = { from: web3.eth.accounts[0], gas: 4000000 }
