export const apiData = [
    {
        system: "Manage Patient Profile",
        method: [
            {

                //1
                method: "POST",
                path: "/patients/insert",
                title: "Insert Patient",
                titleDes: "ใช้สมัครสมาชิกสำหรับผู้ป่วย",
                attrReq: [
                    { name: "address", type: "String", des: "ที่อยู่ของผู้ป่วย" },
                    { name: "allergy", type: "String", des: "อาการ/สิ่งที่ผู้ป่วยแพ้" },
                    { name: "bloodgroup", type: "String", des: "กรุ๊ปเลือดของผู้ป่วย" },
                    { name: "citizenId", type: "String", des: "เลขบัตรประจำตัวประชาชนของผู้ป่วย" },
                    { name: "congenitalDisease", type: "String", des: "โรคประจำตัวของผู้ป่วย" },
                    { name: "country", type: "String", des: "ประเทศที่ผู้ป่วยอาศัยอยู่" },
                    { name: "district", type: "String", des: "อำเภอที่ผู้ป่วยอาศัยอยู่" },
                    { name: "dob", type: "String", des: "วันเกิดของผู้ป่วย" },
                    { name: "email", type: "String", des: "E-mail ของผู้ป่วย" },
                    { name: "emerAddress", type: "String", des: "บ้านเลขที่ของผู้เกี่ยวข้องกับผู้ป่วย (กรณีติดต่อฉุกเฉิน)" },
                    { name: "emerDistrict", type: "String", des: "อำเภอของผู้เกี่ยวข้องกับผู้ป่วย (กรณีติดต่อฉุกเฉิน)" },
                    { name: "emerFirstname", type: "String", des: "ชื่อของผู้เกี่ยวข้องกับผู้ป่วย (กรณีติดต่อฉุกเฉิน)" },
                    { name: "emerHomePhonenumber", type: "String", des: "เบอร์โทรศัพท์บ้าน (กรณีติดต่อฉุกเฉิน)" },
                    { name: "emerLastname", type: "String", des: "นามสกุลของผู้เกี่ยวข้องกับผู้ป่วย (กรณีติดต่อฉุกเฉิน)" },
                    { name: "emerMobileNumber", type: "String", des: "เบอร์โทรศัพท์มือถือ (กรณีติดต่อฉุกเฉิน)" },
                    { name: "emerProvince", type: "String", des: "จังหวัด (กรณีติดต่อฉุกเฉิน)" },
                    { name: "emerRelationship", type: "String", des: "ความเกี่ยวข้องกับผู้ป่วย (กรณีติดต่อฉุกเฉิน)" },
                    { name: "emerSubDistrict", type: "String", des: "ตำบลของผู้เกี่ยวข้องกับผู้ป่วย (กรณีติดต่อฉุกเฉิน)" },
                    { name: "emerTitle", type: "String", des: "คำนำหน้าของผู้เกี่ยวข้องกับผู้ป่วย (กรณีติดต่อฉุกเฉิน)" },
                    { name: "emerTypeofHouse", type: "String", des: "ประเภทที่อยู่อาศัย (กรณีติดต่อฉุกเฉิน)" },
                    { name: "emerZipcode", type: "String", des: "รหัสไปรษณีย์ที่อยู่ (กรณีติดต่อฉุกเฉิน)" },
                    { name: "fatherFirstname", type: "String", des: "ชื่อบิดา (กรณีผู้ป่วยอายุน้อยกว่า 15 ปี)" },
                    { name: "fatherLastname", type: "String", des: "นามสกุลบิดา (กรณีผู้ป่วยอายุน้อยกว่า 15 ปี)" },
                    { name: "firstname", type: "String", des: "ชื่อของผู้ป่วย" },
                    { name: "gender", type: "String", des: "เพศของผู้ป่วย" },
                    { name: "homePhonenumber", type: "String", des: "เบอร์โทรศัพท์บ้านของผู้ป่วย" },
                    { name: "hospitalNumber", type: "String", des: "หมายเลขบัตรประจำตัวผู้ป่วย (ของโรงพยาบาล)" },
                    { name: "lastname", type: "String", des: "นามสกุลของผู้ป่วย" },
                    { name: "mobileNumber", type: "String", des: "เบอร์โทรศัพท์มือถือของผู้ป่วย" },
                    { name: "motherFirstname", type: "String", des: "ชื่อมารดา (กรณีผู้ป่วยอายุน้อยกว่า 15 ปี)" },
                    { name: "motherLastname", type: "String", des: "นามสกุลมารดา (กรณีผู้ป่วยอายุน้อยกว่า 15 ปี)" },
                    { name: "nameTitle", type: "String", des: "คำนำหน้าของผู้ป่วย" },
                    { name: "nationality", type: "String", des: "สัญชาติของผู้ป่วย" },
                    { name: "occupartion", type: "String", des: "อาชีพของผู้ป่วย" },
                    { name: "password", type: "String", des: "พลาสเวิร์สสำหรับเข้าระบบ" },
                    { name: "privilege", type: "String", des: "สิทธิการรักษาของผู้ป่วย" },
                    { name: "province", type: "String", des: "จังหวัดที่ผู้ป่วยอาศัยอยู่" },
                    { name: "religion", type: "String", des: "ศาสนาของผู้ป่วย" },
                    { name: "status", type: "Boolean", des: "สถานะภาพของผู้ป่วย" },
                    { name: "subDistrict", type: "String", des: "ตำบลที่ผู้ป่วยอาศัยอยู่" },
                    { name: "typeofHouse", type: "String", des: "ประเทศที่ผู้ป่วยอาศัยอยู่" },
                    { name: "zipcode", type: "String", des: "รหัสไปรษณีย์ที่อยู่ที่ผู้ป่วยอาศัยอยู่" },
                    { name: "date", type: "String", des: "วันที่ ณ เวลาปัจจุบัน" },
                ],
                attrRes: [
                    { name: "status", type: "Boolean", des: "สถานะของการตอบสนองของข้อมูล" },
                    { name: "message", type: "String", des: "ข้อความ" },
                ],

                reqJson:
                {
                    address: "23",
                    allergy: "not have",
                    bloodgroup: "AB",
                    citizenId: "1234567890101",
                    congenitalDisease: "-",
                    country: "Thai",
                    district: "Sai Yok",
                    dob: "31/08/2000",
                    email: "test01@gmail.com",
                    emerAddress: "",
                    emerDistrict: "",
                    emerFirstname: "",
                    emerHomePhonenumber: "",
                    emerLastname: "",
                    emerMobileNumber: "",
                    emerProvince: "",
                    emerRelationship: "",
                    emerSubDistrict: "",
                    emerTitle: "",
                    emerTypeofHouse: "",
                    emerZipcode: "",
                    fatherFirstname: "",
                    fatherLastname: "",
                    firstname: "Aleeza",
                    gender: "F",
                    homePhonenumber: "029293939",
                    hospitalNumber: "",
                    lastname: "Sharp",
                    mobileNumber: "0829392939",
                    motherFirstname: "",
                    motherLastname: "",
                    nameTitle: "Miss.",
                    nationality: "Thai",
                    occupartion: "-",
                    password: "12345678!!",
                    privilege: "-",
                    province: "Kanchanaburi",
                    religion: "Buddhism",
                    status: "Broke up with bf/gf",
                    subDistrict: "Wang Krachae",
                    typeofHouse: "Townhouse",
                    zipcode: "71150",
                    date: "09/02/2018"
                },

                resJson:
                {
                    status: true,
                    message: "SUCCESS"
                }

            },
            {
                //3
                method: "GET",
                path: "/patients/get/:citizenId",
                title: "Fetch Patient Information",
                titleDes: "ดึงข้อมูลของผู้ป่วย",
                attrReq: [
                    { name: "citizenId", type: "String", des: "เลขบัตรประจำตัวประชาชนของผู้ป่วย" },
                ],
                attrRes: [
                    { name: "status", type: "Boolean", des: "สถานะของการตอบกลับ" },
                    { name: "message", type: "String", des: "ข้อความ" },
                    { name: "data", type: "String", des: "ข้อมูลที่เรียกออกมา" },
                    { name: "registerDate", type: "String", des: "วันที่ทำการสมัคร" },
                    { name: "hospitalNumber", type: "String", des: "หมายเลขบัตรประจำตัวผู้ป่วย (ของโรงพยาบาล)" },
                    { name: "citizenId", type: "String", des: "เลขบัตรประจำตัวประชาชนของผู้ป่วย" },
                    { name: "dob", type: "String", des: "วันเกิดของผู้ป่วย" },
                    { name: "nameTitle", type: "String", des: "คำนำหน้าของผู้ป่วย" },
                    { name: "firstname", type: "String", des: "ชื่อของผู้ป่วย" },
                    { name: "lastname", type: "String", des: "นามสกุลของผู้ป่วย" },
                    { name: "gender", type: "String", des: "เพศของผู้ป่วย" },
                    { name: "congenitalDisease", type: "String", des: "โรคประจำตัวของผู้ป่วย" },
                    { name: "bloodgroup", type: "String", des: "กรุ๊ปเลือดของผู้ป่วย" },
                    { name: "religion", type: "String", des: "ศาสนาของผู้ป่วย" },
                    { name: "nationality", type: "String", des: "สัญชาติของผู้ป่วย" },
                    { name: "country", type: "String", des: "ประเทศที่ผู้ป่วยอาศัยอยู่" },
                    { name: "status", type: "Boolean", des: "สถานะภาพของผู้ป่วย" },
                    { name: "occupartion", type: "String", des: "อาชีพของผู้ป่วย" },
                    { name: "homePhonenumber", type: "String", des: "เบอร์โทรศัพท์บ้านของผู้ป่วย" },
                    { name: "mobileNumber", type: "String", des: "เบอร์โทรศัพท์มือถือของผู้ป่วย" },
                    { name: "email", type: "String", des: "E-mail ของผู้ป่วย" },
                    { name: "typeofHouse", type: "String", des: "ประเทศที่ผู้ป่วยอาศัยอยู่" },
                    { name: "address", type: "String", des: "ที่อยู่ของผู้ป่วย" },
                    { name: "province", type: "String", des: "จังหวัดที่ผู้ป่วยอาศัยอยู่" },
                    { name: "district", type: "String", des: "อำเภอที่ผู้ป่วยอาศัยอยู่" },
                    { name: "subDistrict", type: "String", des: "ตำบลที่ผู้ป่วยอาศัยอยู่" },
                    { name: "zipcode", type: "String", des: "รหัสไปรษณีย์ที่อยู่ที่ผู้ป่วยอาศัยอยู่" },
                    { name: "emerTitle", type: "String", des: "คำนำหน้าของผู้เกี่ยวข้องกับผู้ป่วย (กรณีติดต่อฉุกเฉิน)" },
                    { name: "emerFirstname", type: "String", des: "ชื่อของผู้เกี่ยวข้องกับผู้ป่วย (กรณีติดต่อฉุกเฉิน)" },
                    { name: "emerLastname", type: "String", des: "นามสกุลของผู้เกี่ยวข้องกับผู้ป่วย (กรณีติดต่อฉุกเฉิน)" },
                    { name: "emerRelationship", type: "String", des: "ความเกี่ยวข้องกับผู้ป่วย (กรณีติดต่อฉุกเฉิน)" },
                    { name: "emerHomePhonenumber", type: "String", des: "เบอร์โทรศัพท์บ้าน (กรณีติดต่อฉุกเฉิน)" },
                    { name: "emerMobileNumber", type: "String", des: "เบอร์โทรศัพท์มือถือ (กรณีติดต่อฉุกเฉิน)" },
                    { name: "emerTypeofHouse", type: "String", des: "ประเภทที่อยู่อาศัย (กรณีติดต่อฉุกเฉิน)" },
                    { name: "emerAddress", type: "String", des: "บ้านเลขที่ของผู้เกี่ยวข้องกับผู้ป่วย (กรณีติดต่อฉุกเฉิน)" },
                    { name: "emerProvince", type: "String", des: "จังหวัด (กรณีติดต่อฉุกเฉิน)" },
                    { name: "emerDistrict", type: "String", des: "อำเภอของผู้เกี่ยวข้องกับผู้ป่วย (กรณีติดต่อฉุกเฉิน)" },
                    { name: "emerSubDistrict", type: "String", des: "ตำบลของผู้เกี่ยวข้องกับผู้ป่วย (กรณีติดต่อฉุกเฉิน)" },
                    { name: "emerZipcode", type: "String", des: "รหัสไปรษณีย์ที่อยู่ (กรณีติดต่อฉุกเฉิน)" },
                    { name: "fatherFirstname", type: "String", des: "ชื่อบิดา (กรณีผู้ป่วยอายุน้อยกว่า 15 ปี)" },
                    { name: "fatherLastname", type: "String", des: "นามสกุลบิดา (กรณีผู้ป่วยอายุน้อยกว่า 15 ปี)" },
                    { name: "motherFirstname", type: "String", des: "ชื่อมารดา (กรณีผู้ป่วยอายุน้อยกว่า 15 ปี)" },
                    { name: "motherLastname", type: "String", des: "นามสกุลมารดา (กรณีผู้ป่วยอายุน้อยกว่า 15 ปี)" },
                    { name: "allergy", type: "String", des: "อาการ/สิ่งที่ผู้ป่วยแพ้" },
                    { name: "privilege", type: "String", des: "สิทธิการรักษาของผู้ป่วย" },
                    { name: "age", type: "String", des: "อายุของผู้ป่วย" },
                ],
                reqJson: {


                },

                resJson:
                {
                    status: true,
                    message: "SUCCESS",
                    data: {
                        registerDate: "09/02/2018",
                        hospitalNumber: "01/61",
                        citizenId: "1234567890101",
                        dob: "31/08/2000",
                        nameTitle: "Miss.",
                        firstname: "Aleeza",
                        lastname: "Sharp",
                        gender: "F",
                        congenitalDisease: "-",
                        bloodgroup: "AB",
                        religion: "Buddhism",
                        nationality: "Thai",
                        country: "Thai",
                        status: "Broke up with bf/gf",
                        occupartion: "-",
                        homePhonenumber: "029293939",
                        mobileNumber: "0829392939",
                        email: "test01@gmail.com",
                        typeofHouse: "Townhouse",
                        address: "23",
                        province: "Kanchanaburi",
                        district: "Sai Yok",
                        subDistrict: "Wang Krachae",
                        zipcode: "71150",
                        emerTitle: "",
                        emerFirstname: "",
                        emerLastname: "",
                        emerRelationship: "",
                        emerHomePhonenumber: "",
                        emerMobileNumber: "",
                        emerTypeofHouse: "",
                        emerAddress: "",
                        emerProvince: "",
                        emerDistrict: "",
                        emerSubDistrict: "",
                        emerZipcode: "",
                        fatherFirstname: "",
                        fatherLastname: "",
                        motherFirstname: "",
                        motherLastname: "",
                        allergy: "not have",
                        privilege: "-",
                        age: "18 Years old"
                    }
                }
            }
        ]
    },
    {
        system: "Authentication",
        method: [
            {
                //2
                method: "POST",
                path: "/auth/login",
                title: "Patient Login",
                titleDes: "การเข้าสู่ระบบสำหรับผู้ป่วย",
                attrReq: [
                    { name: "citizenId", type: "String", des: "เลขบัตรประจำตัวประชาชนของผู้ป่วย" },
                    { name: "password", type: "String", des: "พลาสเวิร์สสำหรับเข้าระบบ" },
                ],
                attrRes: [
                    { name: "status", type: "Boolean", des: "สถานะของการตอบกลับ" },
                    { name: "message", type: "String", des: "ข้อความ" },
                ],
                reqJson: {
                    citizenId: "1234567890101",
                    password: "12345678!!"
                },

                resJson:
                {
                    status: true,
                    message: "SUCCESS"
                }

            }
        ]
    },

    {
        system: "Manage OPD Cards",
        method: [
            {
                //4
                method: "POST",
                path: "/medicalRecords/setMedicalRecordForNurse",
                title: "Nurse Record OPD Cards",
                titleDes: "บันทึกข้อมูลใบการรักษาผู้ป่วย (สำหรับพยาบาล)",
                attrReq: [
                    { name: "BP1", type: "String", des: "ความดันโลหิต" },
                    { name: "BP2", type: "String", des: "ความดันโลหิต" },
                    { name: "BP3", type: "String", des: "ความดันโลหิต" },
                    { name: "bmi", type: "String", des: "ดัชนีมวลร่างกาย หรือ อัตราส่วนระหว่างน้ำหนักต่อส่วนสูง" },
                    { name: "bodyWeight", type: "String", des: "น้ำหนักของผู้ป่วย" },
                    { name: "chiefComplaint", type: "String", des: "อาการของผู้ป่วย" },
                    { name: "clinic", type: "String", des: "ชื่อคลินิคที่ผู้ป่วยเข้ารับการรักษา" },
                    { name: "date", type: "String", des: "วันที่ที่ผู้ป่วยเข้ารับการรักษา" },
                    { name: "height", type: "String", des: "ส่วนสูงของผู้ป่วย" },
                    { name: "nurseName", type: "String", des: "ชื่อพยาบาลที่ทำการรักษาผู้ป่วย" },
                    { name: "patientCitizenId", type: "String", des: "เลขบัตรประจำตัวประชาชนของผู้ป่วย" },
                    { name: "pulseRate", type: "String", des: "อัตราการเต้นของหัวใจของผู้ป่วย" },
                    { name: "respiratoryRate", type: "String", des: "อัตราการหายใจเข้าออกของผู้ป่วย" },
                    { name: "temperature", type: "String", des: "อุณหภูมิร่างกายของผู้ป่วย" },
                    { name: "time", type: "String", des: "เวลาที่ผู้ป่วยเข้ารับการรักษา" },
                ],
                attrRes: [
                    { name: "status", type: "Boolean", des: "สถานะของการตอบกลับ" },
                    { name: "message", type: "String", des: "ข้อความ" },
                    { name: "data", type: "String", des: "ข้อมูลที่เรียกออกมา" },
                    { name: "medicalRecordId", type: "String", des: "รหัสใบการรักษา" },
                ],
                reqJson: {
                    BP1: "123/76",
                    BP2: "-/-",
                    BP3: "-/-",
                    bmi: "22.10",
                    bodyWeight: "58.0",
                    chiefComplaint: "Sore throat, cough with yellow sputum. Pain in the body is 5 days.",
                    clinic: "Medical Development Clinic",
                    date: "September 2, 2018",
                    height: "162.0",
                    nurseName: "Miss Lilith Beltran",
                    patientCitizenId: "1234567890101",
                    pulseRate: "104",
                    respiratoryRate: "18",
                    temperature: "37.8",
                    time: "9:14 PM"
                },

                resJson:
                {
                    status: true,
                    message: "SUCCESS",
                    data: {
                        medicalRecordId: "1"
                    }
                }
            },

            {
                //5
                method: "POST",
                path: "/medicalRecords/setMedicalRecordForDoctor",
                title: "Doctor Record OPD Cards",
                titleDes: "บันทึกข้อมูลใบการรักษาผู้ป่วย (สำหรับแพทย์)",
                attrReq: [
                    { name: "appointment", type: "String", des: "วันนัดพบแพทย์" },
                    { name: "diagnosis", type: "String", des: "การวินิจฉัยโรค" },
                    { name: "doctorName", type: "String", des: "ชื่อแพทย์ที่ทำการรักษาผู้ป่วย" },
                    { name: "physicalExem", type: "String", des: "ผลการตรวจ/ทดสอบร่างกาย" },
                    { name: "patientCitizenId", type: "String", des: "เลขบัตรประจำตัวประชาชนของผู้ป่วย" },
                    { name: "presentIllness", type: "String", des: "อาการเบื้องต้นของผู้ป่วย" },
                    { name: "recommendation", type: "String", des: "คำแนะนำการรักษา" },
                    { name: "treatment", type: "String", des: "การรักษา" },
                    { name: "medicalRecordId", type: "String", des: "รหัสใบการรักษา" },
                ],
                attrRes: [
                    { name: "status", type: "Boolean", des: "สถานะของการตอบกลับ" },
                    { name: "message", type: "String", des: "ข้อความ" },
                ],
                reqJson: {
                    appointment: "Sep 2, 2018",
                    diagnosis: "Common cold",
                    doctorName: "Dr. Kirstin Hibbert",
                    physicalExem: "The patient has a stuffy nose. Runny nose Yellow mucus, sneezing, sore throat, hoarseness, low fever and slight headache.",
                    patientCitizenId: "1234567890101",
                    presentIllness: "Nasal congestion, runny nose, sputum, dizziness.",
                    recommendation: "Drink plenty of water, Avoid sneezing or severe nasal irritation.",
                    treatment: "Brompheniramine 1, Ambroxol 1,Paracetamol 1,Pseudoephedrine 1",
                    medicalRecordId: "1"
                },

                resJson:
                {
                    status: true,
                    message: "SUCCESS"
                }
            },

            {
                //6
                method: "GET",
                path: "/medicalRecords/getMedicalRecordForNurse/:medicalRecordId",
                title: "Nurse Fetch OPD Cards",
                titleDes: "ดึงใบการรักษาผู้ป่วย (สำหรับพยาบาล)",
                attrReq: [
                    { name: "medicalRecordId", type: "String", des: "รหัสใบการรักษา" },
                ],
                attrRes: [
                    { name: "status", type: "Boolean", des: "สถานะของการตอบกลับ" },
                    { name: "message", type: "String", des: "ข้อความ" },
                    { name: "data", type: "String", des: "ข้อมูลที่เรียกออกมา" },
                    { name: "clinic", type: "String", des: "ชื่อคลินิคที่ผู้ป่วยเข้ารับการรักษา" },
                    { name: "height", type: "String", des: "ส่วนสูงของผู้ป่วย" },
                    { name: "bodyWeight", type: "String", des: "น้ำหนักของผู้ป่วย" },
                    { name: "bmi", type: "String", des: "ดัชนีมวลร่างกาย หรือ อัตราส่วนระหว่างน้ำหนักต่อส่วนสูง" },
                    { name: "temperature", type: "String", des: "อุณหภูมิร่างกายของผู้ป่วย" },
                    { name: "date", type: "String", des: "วันที่ที่ผู้ป่วยเข้ารับการรักษา" },
                    { name: "time", type: "String", des: "เวลาที่ผู้ป่วยเข้ารับการรักษา" },
                    { name: "medicalRecordId", type: "String", des: "รหัสใบการรักษา" },
                    { name: "pulseRate", type: "String", des: "อัตราการเต้นของหัวใจของผู้ป่วย" },
                    { name: "respiratoryRate", type: "String", des: "อัตราการหายใจเข้าออกของผู้ป่วย" },
                    { name: "BP1", type: "String", des: "ความดันโลหิต" },
                    { name: "BP2", type: "String", des: "ความดันโลหิต" },
                    { name: "BP3", type: "String", des: "ความดันโลหิต" },
                    { name: "chiefComplaint", type: "String", des: "อาการของผู้ป่วย" },
                    { name: "nurseId", type: "String", des: "รหัสประจำตัวพยาบาล" },
                    { name: "patientCitizenId", type: "String", des: "เลขบัตรประจำตัวประชาชนของผู้ป่วย" },
                ],
                reqJson: {

                },

                resJson:
                {
                    status: true,
                    message: "SUCCESS",
                    data: {
                        clinic: "Medical Development Clinic",
                        height: 162,
                        bodyWeight: 58,
                        bmi: 22.1,
                        temperature: 37.8,
                        date: "September 2, 2018",
                        time: "9:14 PM",
                        medicalRecordId: "5",
                        pulseRate: 104,
                        respiratoryRate: 18,
                        BP1: "123/76",
                        BP2: "-/-",
                        BP3: "-/-",
                        chiefComplaint: "Sore throat, cough with yellow sputum. Pain in the body is 5 days.",
                        nurseId: "Miss Lilith Beltran",
                        patientCitizenId: "1234567890103"
                    }
                }
            },

            {
                //7
                method: "GET",
                path: "/medicalRecords/getMedicalRecordForDoctor/:medicalRecordId",
                title: "Doctor Fetch OPD Cards",
                titleDes: "ดึงใบการรักษาผู้ป่วย  (สำหรับแพทย์)",
                attrReq: [
                    { name: "medicalRecordId", type: "String", des: "รหัสใบการรักษา" },
                ],
                attrRes: [
                    { name: "status", type: "Boolean", des: "สถานะของการตอบกลับ" },
                    { name: "message", type: "String", des: "ข้อความ" },
                    { name: "data", type: "String", des: "ข้อมูลที่เรียกออกมา" },
                    { name: "presentIllness", type: "String", des: "อาการเบื้องต้นของผู้ป่วย" },
                    { name: "physicalExem", type: "String", des: "ผลการตรวจ/ทดสอบร่างกาย" },
                    { name: "diagnosis", type: "String", des: "การวินิจฉัยโรค" },
                    { name: "treatment", type: "String", des: "การรักษา" },
                    { name: "recommendation", type: "String", des: "คำแนะนำการรักษา" },
                    { name: "appointment", type: "String", des: "วันนัดพบแพทย์" },
                    { name: "medicalRecordId", type: "String", des: "รหัสใบการรักษา" },
                    { name: "doctorName", type: "String", des: "ชื่อแพทย์ที่ทำการรักษาผู้ป่วย" },
                    { name: "patientCitizenId", type: "String", des: "เลขบัตรประจำตัวประชาชนของผู้ป่วย" },

                ],
                reqJson: {


                },

                resJson:
                {
                    status: true,
                    message: "SUCCESS",
                    data: {
                        presentIllness: "Nasal congestion, runny nose, sputum, dizziness.",
                        physicalExem: "The patient has a stuffy nose. Runny nose Yellow mucus, sneezing, sore throat, hoarseness, low fever and slight headache.",
                        diagnosis: "Common cold",
                        treatment: "Brompheniramine 1, Ambroxol 1,Paracetamol 1,Pseudoephedrine 1",
                        recommendation: "Drink plenty of water, Avoid sneezing or severe nasal irritation.",
                        appointment: "Sep 2, 2018",
                        medicalRecordId: "1",
                        doctorName: "Dr. Kirstin Hibbert",
                        patientCitizenId: "1234567890101"
                    }
                }
            },

            {
                //8
                method: "GET",
                path: "/medicalRecords/getMedicalRecord/:medicalRecordId",
                title: "Fetch OPD Cards",
                titleDes: "ดึงใบการรักษาผู้ป่วย (โดยไม่แยกพยาบาลและหมอ)",
                attrReq: [
                    { name: "medicalRecordId", type: "String", des: "รหัสใบการรักษา" },
                ],
                attrRes: [
                    { name: "status", type: "Boolean", des: "สถานะของการตอบกลับ" },
                    { name: "message", type: "String", des: "ข้อความ" },
                    { name: "data", type: "String", des: "ข้อมูลที่เรียกออกมา" },
                    { name: "clinic", type: "String", des: "ชื่อคลินิคที่ผู้ป่วยเข้ารับการรักษา" },
                    { name: "height", type: "String", des: "ส่วนสูงของผู้ป่วย" },
                    { name: "bodyWeight", type: "String", des: "น้ำหนักของผู้ป่วย" },
                    { name: "bmi", type: "String", des: "ดัชนีมวลร่างกาย หรือ อัตราส่วนระหว่างน้ำหนักต่อส่วนสูง" },
                    { name: "temperature", type: "String", des: "อุณหภูมิร่างกายของผู้ป่วย" },
                    { name: "date", type: "String", des: "วันที่ที่ผู้ป่วยเข้ารับการรักษา" },
                    { name: "time", type: "String", des: "เวลาที่ผู้ป่วยเข้ารับการรักษา" },
                    { name: "medicalRecordId", type: "String", des: "รหัสใบการรักษา" },
                    { name: "pulseRate", type: "String", des: "อัตราการเต้นของหัวใจของผู้ป่วย" },
                    { name: "respiratoryRate", type: "String", des: "อัตราการหายใจเข้าออกของผู้ป่วย" },
                    { name: "BP1", type: "String", des: "ความดันโลหิต" },
                    { name: "BP2", type: "String", des: "ความดันโลหิต" },
                    { name: "BP3", type: "String", des: "ความดันโลหิต" },
                    { name: "chiefComplaint", type: "String", des: "อาการของผู้ป่วย" },
                    { name: "nurseId", type: "String", des: "รหัสประจำตัวพยาบาล" },
                    { name: "patientCitizenId", type: "String", des: "เลขบัตรประจำตัวประชาชนของผู้ป่วย" },
                    { name: "presentIllness", type: "String", des: "อาการเบื้องต้นของผู้ป่วย" },
                    { name: "physicalExem", type: "String", des: "ผลการตรวจ/ทดสอบร่างกาย" },
                    { name: "diagnosis", type: "String", des: "การวินิจฉัยโรค" },
                    { name: "treatment", type: "String", des: "การรักษา" },
                    { name: "recommendation", type: "String", des: "คำแนะนำการรักษา" },
                    { name: "appointment", type: "String", des: "วันนัดพบแพทย์" },
                    { name: "doctorName", type: "String", des: "ชื่อแพทย์ที่ทำการรักษาผู้ป่วย" },
                ],
                reqJson: {

                },

                resJson:
                {
                    status: true,
                    message: "SUCCESS",
                    data: {
                        clinic: "Medical Development Clinic",
                        height: 162,
                        bodyWeight: 58,
                        bmi: 22.1,
                        temperature: 37.8,
                        date: "September 2, 2018",
                        time: "9:14 PM",
                        medicalRecordId: "1",
                        pulseRate: 104,
                        respiratoryRate: 18,
                        BP1: "123/76",
                        BP2: "-/-",
                        BP3: "-/-",
                        chiefComplaint: "Sore throat, cough with yellow sputum. Pain in the body is 5 days.",
                        nurseId: "Miss Lilith Beltran",
                        patientCitizenId: "1234567890101",
                        presentIllness: "Nasal congestion, runny nose, sputum, dizziness.",
                        physicalExem: "The patient has a stuffy nose. Runny nose Yellow mucus, sneezing, sore throat, hoarseness, low fever and slight headache.",
                        diagnosis: "Common cold",
                        treatment: "Brompheniramine 1, Ambroxol 1,Paracetamol 1,Pseudoephedrine 1",
                        recommendation: "Drink plenty of water, Avoid sneezing or severe nasal irritation.",
                        appointment: "Sep 2, 2018",
                        doctorName: "Dr. Kirstin Hibbert"
                    }
                }
            },

            {
                //10
                method: "POST",
                path: "/medicalRecords/getHistoryMedicalRecord/:patientCitizenId",
                title: "Fetch OPD Cards History",
                titleDes: "ดึงประวัติการรักษาของผู้ป่วยคนนั้นๆ",
                attrReq: [
                    { name: "patientCitizenId", type: "String", des: "เลขบัตรประจำตัวประชาชนของผู้ป่วย" },
                ],
                attrRes: [
                    { name: "status", type: "Boolean", des: "สถานะของการตอบกลับ" },
                    { name: "message", type: "String", des: "ข้อความ" },
                    { name: "data", type: "String", des: "ข้อมูลที่เรียกออกมา" },
                    { name: "medicalRecordId", type: "String", des: "รหัสใบการรักษา" },
                    { name: "clinic", type: "String", des: "ชื่อคลินิคที่ผู้ป่วยเข้ารับการรักษา" },
                    { name: "height", type: "String", des: "ส่วนสูงของผู้ป่วย" },
                    { name: "bodyWeight", type: "String", des: "น้ำหนักของผู้ป่วย" },
                    { name: "bmi", type: "String", des: "ดัชนีมวลร่างกาย หรือ อัตราส่วนระหว่างน้ำหนักต่อส่วนสูง" },
                    { name: "temperature", type: "String", des: "อุณหภูมิร่างกายของผู้ป่วย" },
                    { name: "date", type: "String", des: "วันที่ที่ผู้ป่วยเข้ารับการรักษา" },
                    { name: "time", type: "String", des: "เวลาที่ผู้ป่วยเข้ารับการรักษา" },
                    { name: "pulseRate", type: "String", des: "อัตราการเต้นของหัวใจของผู้ป่วย" },
                    { name: "respiratoryRate", type: "String", des: "อัตราการหายใจเข้าออกของผู้ป่วย" },
                    { name: "BP1", type: "String", des: "ความดันโลหิต" },
                    { name: "BP2", type: "String", des: "ความดันโลหิต" },
                    { name: "BP3", type: "String", des: "ความดันโลหิต" },
                    { name: "chiefComplaint", type: "String", des: "อาการของผู้ป่วย" },
                    { name: "nurseId", type: "String", des: "รหัสประจำตัวพยาบาล" },
                    { name: "patientCitizenId", type: "String", des: "เลขบัตรประจำตัวประชาชนของผู้ป่วย" },
                    { name: "presentIllness", type: "String", des: "อาการเบื้องต้นของผู้ป่วย" },
                    { name: "physicalExem", type: "String", des: "ผลการตรวจ/ทดสอบร่างกาย" },
                    { name: "diagnosis", type: "String", des: "การวินิจฉัยโรค" },
                    { name: "treatment", type: "String", des: "การรักษา" },
                    { name: "recommendation", type: "String", des: "คำแนะนำการรักษา" },
                    { name: "appointment", type: "String", des: "วันนัดพบแพทย์" },
                    { name: "doctorName", type: "String", des: "ชื่อแพทย์ที่ทำการรักษาผู้ป่วย" },
                ],
                reqJson: {

                },

                resJson:
                {
                    status: true,
                    message: "SUCCESS",
                    data: [
                        {
                            medicalRecordId: "1",
                            clinic: "Medical Development Clinic",
                            height: 162,
                            bodyWeight: 58,
                            bmi: 22.1,
                            temperature: 37.8,
                            date: "September 2, 2018",
                            time: "9:14 PM",
                            pulseRate: 104,
                            respiratoryRate: 18,
                            BP1: "123/76",
                            BP2: "-/-",
                            BP3: "-/-",
                            chiefComplaint: "Sore throat, cough with yellow sputum. Pain in the body is 5 days.",
                            nurseId: "Miss Lilith Beltran",
                            patientCitizenId: "1234567890101",
                            presentIllness: "Nasal congestion, runny nose, sputum, dizziness.",
                            physicalExem: "The patient has a stuffy nose. Runny nose Yellow mucus, sneezing, sore throat, hoarseness, low fever and slight headache.",
                            diagnosis: "Common cold",
                            treatment: "Brompheniramine 1, Ambroxol 1,Paracetamol 1,Pseudoephedrine 1",
                            recommendation: "Drink plenty of water, Avoid sneezing or severe nasal irritation.",
                            appointment: "Sep 2, 2018",
                            doctorName: "Dr. Kirstin Hibbert"
                        }
                    ]
                }
            }
        ]

    },

]
