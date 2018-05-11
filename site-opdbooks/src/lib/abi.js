export const abi = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "_citizenId",
                "type": "string"
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
                "name": "_emails",
                "type": "string"
            },
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
<<<<<<< HEAD
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
=======
                "name": "_citizenId",
                "type": "string"
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
>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8
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
=======
                "name": "_citizenId",
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
>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8
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
=======
                "name": "_citizenId",
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
>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8
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
=======
                "name": "_citizenId",
                "type": "string"
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
                "type": "string"
            },
            {
                "name": "",
>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8
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
        "constant": true,
        "inputs": [
            {
                "name": "_citizenId",
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
>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8
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
=======
                "name": "_citizenId",
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
>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8
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
            },
            {
                "name": "_allergy",
                "type": "bytes32"
            },
            {
                "name": "_privilege",
=======
                "name": "_citizenId",
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
>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8
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
=======
                "name": "_citizenId",
                "type": "string"
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
<<<<<<< HEAD
                "name": "_idcard",
                "type": "bytes32"
=======
                "name": "_citizenId",
                "type": "string"
>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8
            }
        ],
        "name": "getInfoPatientPart3",
        "outputs": [
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
        "inputs": [],
        "name": "getAllPatient",
        "outputs": [
            {
                "name": "",
                "type": "bytes32[]"
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
                "type": "bytes32"
            }
        ],
        "name": "getCheckstatus",
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
=======
>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8
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
=======
                "name": "_citizenId",
                "type": "string"
>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8
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
=======
                "name": "_citizenId",
                "type": "string"
>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8
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
                "name": "_citizenId",
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
>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8
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
<<<<<<< HEAD
                "name": "_idcard",
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
            },
            {
                "name": "",
=======
                "name": "_citizenId",
                "type": "string"
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
>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8
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
=======
                "name": "_citizenId",
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
>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8
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
<<<<<<< HEAD
                "name": "_idcard",
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
=======
                "name": "_citizenId",
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
>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8
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
<<<<<<< HEAD
                "name": "_idcard",
=======
                "name": "_citizenId",
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
                "name": "_password",
>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8
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
<<<<<<< HEAD
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
=======
                "name": "_citizenId",
                "type": "string"
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
>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8
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
<<<<<<< HEAD
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
=======
                "name": "_citizenId",
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
>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8
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
<<<<<<< HEAD
                "name": "_idcard",
                "type": "bytes32"
=======
                "name": "_email",
                "type": "bytes32"
            },
            {
                "name": "_emails",
                "type": "string"
>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8
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
<<<<<<< HEAD
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
=======
                "name": "_citizenId",
                "type": "string"
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
>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8
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
                "type": "string"
            },
            {
<<<<<<< HEAD
                "name": "",
=======
                "name": "_allergy",
                "type": "bytes32"
            },
            {
                "name": "_privilege",
>>>>>>> a8d41b18f79646cf827c325f11af49de0b1b27a8
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