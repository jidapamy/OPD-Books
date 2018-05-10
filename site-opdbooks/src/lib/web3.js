const Web3 = require('web3');
<<<<<<< HEAD
// import { abi } from './abi';
export var web3 = new Web3();

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
=======
// import abi from './abi'
export var web3 = new Web3();

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
console.log(web3)
>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8

web3.eth.defaultAccount = web3.eth.accounts[0];
const PatientRecordContract = web3.eth.contract(
    [
        {
<<<<<<< HEAD
            "constant": false,
            "inputs": [
                {
                    "name": "_idcard",
                    "type": "bytes32"
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
                    "name": "_idcard",
                    "type": "bytes32"
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
                    "name": "_photo",
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
=======
            "constant": true,
            "inputs": [
                {
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
                    "name": "_idcard",
                    "type": "string"
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
>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_idcard",
<<<<<<< HEAD
                    "type": "bytes32"
=======
                    "type": "string"
>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8
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
<<<<<<< HEAD
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
                    "name": "_idcard",
                    "type": "bytes32"
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
                }
            ],
            "name": "setInfoPatientPart4",
=======
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
>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8
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
<<<<<<< HEAD
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
                    "name": "_idcard",
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
=======
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
>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_idcard",
<<<<<<< HEAD
                    "type": "bytes32"
                }
            ],
            "name": "getAddressPatient",
=======
                    "type": "string"
                }
            ],
            "name": "getEmergencyContactPart2",
>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8
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
<<<<<<< HEAD
            "inputs": [],
            "name": "getAllPatient",
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32[]"
=======
            "inputs": [
                {
                    "name": "_idcard",
                    "type": "string"
                }
            ],
            "name": "getCheckstatus",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8
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
<<<<<<< HEAD
                    "type": "bytes32"
=======
                    "type": "string"
>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8
                },
                {
                    "name": "_password",
                    "type": "bytes32"
                }
            ],
            "name": "getCheckLogin",
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
                    "name": "_idcard",
<<<<<<< HEAD
                    "type": "bytes32"
                }
            ],
            "name": "getCheckstatus",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
=======
                    "type": "string"
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
                    "type": "string"
                },
                {
                    "name": "",
                    "type": "bytes32"
>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8
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
<<<<<<< HEAD
                    "type": "bytes32"
                }
            ],
            "name": "getDetailPatient",
=======
                    "type": "string"
                }
            ],
            "name": "getAddressPatient",
>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8
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
<<<<<<< HEAD
                },
                {
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "payable": false,
            "stateMutability": "view",
=======
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
                    "name": "_idcard",
                    "type": "string"
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
>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_idcard",
<<<<<<< HEAD
                    "type": "bytes32"
                }
            ],
            "name": "getEmergencyContactPart1",
=======
                    "type": "string"
                }
            ],
            "name": "getPatientAllergy",
>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8
            "outputs": [
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
                    "name": "_idcard",
                    "type": "string"
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
                    "name": "_photo",
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
>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_idcard",
<<<<<<< HEAD
                    "type": "bytes32"
                }
            ],
            "name": "getEmergencyContactPart2",
=======
                    "type": "string"
                }
            ],
            "name": "getInfoPatientPart3",
>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8
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
>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8
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
<<<<<<< HEAD
                    "type": "bytes32"
                }
            ],
            "name": "getInfoPatientPart1",
=======
                    "type": "string"
                }
            ],
            "name": "getInfoPatientPart4",
>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8
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
<<<<<<< HEAD
                    "name": "_idcard",
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
=======
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
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_idcard",
<<<<<<< HEAD
                    "type": "bytes32"
                }
            ],
            "name": "getInfoPatientPart3",
=======
                    "type": "string"
                }
            ],
            "name": "getInfoPatientPart2",
>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8
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
<<<<<<< HEAD
            "constant": true,
            "inputs": [
                {
                    "name": "_idcard",
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
            "constant": true,
            "inputs": [
                {
                    "name": "_idcard",
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
=======
            "constant": false,
            "inputs": [
                {
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
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
<<<<<<< HEAD
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "patientAccounts",
=======
                    "name": "_idcard",
                    "type": "string"
                }
            ],
            "name": "getEmergencyContactPart1",
>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8
            "outputs": [
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
                },
                {
                    "name": "",
                    "type": "bytes32"
                },
                {
                    "name": "",
                    "type": "bytes32"
>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ]
);
<<<<<<< HEAD
export const contract = PatientRecordContract.at('0x1e7f19539ce49dbfbabf983f0ed04edac25ccb00');
=======

export const contract = PatientRecordContract.at('0xc4c42267734b1cf356282fdd126e782f87242912');

>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8
export const defaultAccount = { from: web3.eth.accounts[0], gas: 4000000 }
