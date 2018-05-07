export const abi = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "_idcard",
                "type": "string"
            },
            {
                "name": "_typeofHouse",
                "type": "string"
            },
            {
                "name": "_patienaddress",
                "type": "string"
            },
            {
                "name": "_province",
                "type": "string"
            },
            {
                "name": "_district",
                "type": "string"
            },
            {
                "name": "_subDistrict",
                "type": "string"
            },
            {
                "name": "_zipcode",
                "type": "string"
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
                "type": "string"
            },
            {
                "name": "_emerTitle",
                "type": "string"
            },
            {
                "name": "_emerFirstname",
                "type": "string"
            },
            {
                "name": "_emerLastname",
                "type": "string"
            },
            {
                "name": "_emerRelationship",
                "type": "string"
            },
            {
                "name": "_emerHomePhonenumber",
                "type": "string"
            },
            {
                "name": "_emerMobileNumber",
                "type": "string"
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
                "type": "string"
            },
            {
                "name": "_emerTypeofHouse",
                "type": "string"
            },
            {
                "name": "_emerAddress",
                "type": "string"
            },
            {
                "name": "_emerProvince",
                "type": "string"
            },
            {
                "name": "_emerDistrict",
                "type": "string"
            },
            {
                "name": "_emerSubDistrict",
                "type": "string"
            },
            {
                "name": "_emerZipcode",
                "type": "string"
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
                "name": "_registerDate",
                "type": "string"
            },
            {
                "name": "_hospitalnumber",
                "type": "string"
            },
            {
                "name": "_photo",
                "type": "string"
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
                "name": "_idcard",
                "type": "string"
            },
            {
                "name": "_dob",
                "type": "string"
            },
            {
                "name": "_titlename",
                "type": "string"
            },
            {
                "name": "_firstname",
                "type": "string"
            },
            {
                "name": "_lastname",
                "type": "string"
            },
            {
                "name": "_gender",
                "type": "string"
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
                "name": "_congenitaldisease",
                "type": "string"
            },
            {
                "name": "_bloodgroup",
                "type": "string"
            },
            {
                "name": "_religion",
                "type": "string"
            },
            {
                "name": "_nationality",
                "type": "string"
            },
            {
                "name": "_country",
                "type": "string"
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
                "name": "_statuspatient",
                "type": "string"
            },
            {
                "name": "_occupartion",
                "type": "string"
            },
            {
                "name": "_homephonenumber",
                "type": "string"
            },
            {
                "name": "_mobilenumber",
                "type": "string"
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
                "name": "_idcard",
                "type": "string"
            },
            {
                "name": "_allergy",
                "type": "string"
            },
            {
                "name": "_privilege",
                "type": "string"
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
                "name": "_fatherFirstname",
                "type": "string"
            },
            {
                "name": "_fatherLastname",
                "type": "string"
            },
            {
                "name": "_motherFirstname",
                "type": "string"
            },
            {
                "name": "_motherLastname",
                "type": "string"
            }
        ],
        "name": "setPatientParent",
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
                "type": "string"
            }
        ],
        "name": "getAddressPatient",
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
        "name": "getEmergencyContactPart1",
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
        "name": "getEmergencyContactPart2",
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
        "name": "getInfoPatientPart1",
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
        "name": "getInfoPatientPart2",
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
        "name": "getInfoPatientPart3",
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
        "name": "getPatientAllergy",
        "outputs": [
            {
                "name": "",
                "type": "string"
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
                "name": "_idcard",
                "type": "string"
            }
        ],
        "name": "getPatientParent",
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
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
]