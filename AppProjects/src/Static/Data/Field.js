export const groupInfoPatientField = {
    info: { label: "Personal Information"},
    address: { label: "Home Address" },
    emerContact: { label: "Emergency Contact" },
    parent: { label: "Parent's Patient" },
    descriptionParent: { label: "This group required fill for patient under 15 years old" },
    allergyNPrivilege: { label: "Allergy & Privilege" },
    allergy: { label: "Allergy history" },
    privilege: { label: "Privilege" },
    fatherName : { label : "Father's name" },
    motherName: { label: "Mother's name" },
    emerName: { label: "Name" }
}


export const patientField = {
    address: { label: "Address", variable: "address" },
    age: { label: "Age", variable: "age" },
    allergy: { label: "Allergy", variable: "allergy" },
    bloodgroup: { label: "Blood Group", variable: "bloodgroup" },
    citizenId: { label: "Citizen Id/Passport", variable: "citizenId" },
    congenitalDisease: { label: "Congenital Disease", variable: "congenitalDisease" },
    country: { label: "Country", variable: "country" },
    district: { label: "District", variable: "district" },
    dob: { label: "Date of Birth", variable: "dob" },
    email: { label: "Email", variable: "email" },
    emerAddress: { label: "Address", variable: "emerAddress" },
    emerDistrict: { label: "District", variable: "emerDistrict" },
    emerFirstname: { label: "First name", variable: "emerFirstname" },
    emerHomePhonenumber: { label: "Home phone number", variable: "emerHomePhonenumber" },
    emerLastname: { label: "Last name", variable: "emerLastname" },
    emerMobileNumber: { label: "Phone number", variable: "emerMobileNumber" },
    emerProvince: { label: "Province", variable: "emerProvince" },
    emerRelationship: { label: "Relationship", variable: "emerRelationship" },
    emerSubDistrict: { label: "Sub-District", variable: "emerSubDistrict" },
    emerTitle: { label: "Name Title", variable: "emerTitle" },
    emerTypeofHouse: { label: "Type of house", variable: "emerTypeofHouse" },
    emerZipcode: { label: "Zipcode", variable: "emerZipcode" },
    fatherFirstname: { label: "Father's first name", variable: "fatherFirstname" },
    fatherLastname: { label: "Father's last name", variable: "fatherLastname" },
    firstname: { label: "First name", variable: "firstname" },
    gender: { label: "Gender", variable: "gender" },
    homePhonenumber: { label: "Home phone number", variable: "homePhonenumber" },
    lastname: { label: "Last name", variable: "lastname" },
    mobileNumber: { label: "Phone number", variable: "mobileNumber" },
    motherFirstname: { label: "Mother's first name", variable: "motherFirstname" },
    motherLastname: { label: "Mother's first name", variable: "motherLastname" },
    nametitle: { label: "Name Title", variable: "nametitle" },
    nationality: { label: "Nationality", variable: "nationality" },
    occupartion: { label: "Occupartion", variable: "occupartion" },
    password: { label: "Password", variable: "password" },
    privilege: { label: "Privilege", variable: "privilege" },
    province: { label: "Province", variable: "province" },
    registerDate: { label: "Register Date", variable: "registerDate" },
    religion: { label: "Religion", variable: "religion" },
    status: { label: "Status", variable: "status" },
    subDistrict: { label: "Sub-District", variable: "subDistrict" },
    typeofHouse: { label: "Type of house", variable: "typeofHouse" },
    zipcode: { label: "Zipcode", variable: "zipcode" },
}

export const mdrField = {
    clinic: { label: "Clinic", variable: "clinic" },
    height: { label: "Height (HT)", variable: "height" , unit: "cm."},
    bodyWeight: { label: "Body Weight (BW)", variable: "bodyWeight" , unit: "Kg."},
    bmi: { label: "BMI", variable: "bmi" },
    temperature: { label: "Temperature (T)", variable: "temperature" , unit: "C."},
    date: { label: "Date", variable: "date" },
    time: { label: "Time", variable: "time" },
    pulseRate: { label: "Pulse Rate (PR)", variable: "pulseRate" , unit: "/min"},
    respiratoryRate: { label: "Respiratory Rate (RR)", variable: "respiratoryRate" , unit: "/min"},
    BP1: { label: "BP1", variable: "BP1" , unit: "mm/Hg"},
    BP2: { label: "BP2", variable: "BP2" , unit: "mm/Hg"},
    BP3: { label: "BP3", variable: "BP3" , unit: "mm/Hg"},
    chiefComplaint: { label: "Chief Complaint", variable: "chiefComplaint" },
    nurseName: { label: "Nurse Name", variable: "nurseName" },

    medicalRecordId: { label: "Medical Record Id", variable: "medicalRecordId" },
    patientCitizenId: { label: "Citizen Id", variable: "patientCitizenId" },
    presentIllness: { label: "Present Illness", variable: "presentIllness" },
    physicalExem: { label: "Physical Exem", variable: "physicalExem" },
    diagnosis: { label: "Diagnosis", variable: "diagnosis" },
    treatment: { label: "Treatment", variable: "treatment" },
    recommendation: { label: "Recommendation", variable: "recommendation" },
    appointment: { label: "F/D Date", variable: "appointment" },
    doctorName: { label: "Doctor Name", variable: "doctorName" },
}

export const pattern = {
    email: {
        pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/,
        label: "Please include an '@' and enter the part following '@' in the email address."
    },
    password: {
        pattern: /^(?=.*[A-Za-z$@$!%*#?&])+(?=.*[0-9_\W]){8,20}.+$/,
        label: "Password must be 8-20 characters long, including a number, and a letter."
    }
}