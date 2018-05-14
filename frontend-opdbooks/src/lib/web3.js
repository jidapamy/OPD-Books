const Web3 = require('web3');
// import abi from './abi'
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
        }
    ]
);


export const contract = PatientRecordContract.at('0xbc0b7b61bb020a2156c0f990db5d35e0f6b8070f');

export const defaultAccount = { from: web3.eth.accounts[0], gas: 4000000 }
