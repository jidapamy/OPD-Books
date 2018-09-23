const patientScheme = {
    info: [
        {
            registerDate: 'byte',
            citizenId: 'byte',
            // hospitalNumber: 'byte',
            password: 'byte'
        },
        {
            dob: 'byte',
            nametitle: 'byte',
            firstname: 'byte',
            lastname: 'byte',
            gender: 'byte',
        },
        {
            congenitalDisease: 'byte',
            bloodgroup: 'byte',
            religion: 'byte',
            nationality: 'byte',
            country: 'byte',
        },
        {
            status: 'byte',
            occupartion: 'byte',
            homePhonenumber: 'byte',
            mobileNumber: 'byte',
            email: 'byte',
        }
    ],
    address: [
        {
            typeofHouse: 'byte',
            address: 'string',
            province: 'byte',
            district: 'byte',
            subDistrict: 'byte',
            zipcode: 'byte',
        }
    ],
    emerContact: [
        {
            emerTitle: 'byte',
            emerFirstname: 'byte',
            emerLastname: 'byte',
            emerRelationship: 'byte',
            emerHomePhonenumber: 'byte',
            emerMobileNumber: 'byte',
        },
        {
            emerTypeofHouse: 'byte',
            emerAddress: 'string',
            emerProvince: 'byte',
            emerDistrict: 'byte',
            emerSubDistrict: 'byte',
            emerZipcode: 'byte',
        }
    ],
    parent: [
        {
            fatherFirstname: 'byte',
            fatherLastname: 'byte',
            motherFirstname: 'byte',
            motherLastname: 'byte',
        }
    ],
    allery: [
        {
            allergy: 'byte',
            privilege: 'byte',

        }
    ]
}

module.exports = {
    patientScheme
};