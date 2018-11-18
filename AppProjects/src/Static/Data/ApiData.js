export const apiData = [
    {
        system: "Patient Authentication",
        method: [
            {
                //1
                method: "POST",
                path: "/patients/requestOTP",
                title: "Request OTP",
                titleDes: "ในกรณี requestOTP ผ่านรหัสบัตรประชาชน : ใส่เพียงแค่ citizenId " +
                    "ในกรณี requestOTP ผ่านเบอร์โทรศัพท์ : ใส่เพียงแค่ mobileNumber " + 
                "ในกรณีต้องการ requestOTP again : ต้องใส่ citizenId/mobileNumber ตามสิ่งที่ระบุ และต้องมี requestId",
                attrReq: [
                    { name: "citizenId", type: "String", des: "เลขบัตรประจำตัวประชาชนของผู้ป่วย" },
                    { name: "mobileNumber", type: "String", des: "เบอร์โทรศัพท์มือถือของผู้ป่วย" },
                    { name: "requestId", type: "String", des: "รหัสอ้างอิงคำขอรหัส OTP" },
                ],
                attrRes: [
                    { name: "status", type: "Boolean", des: "สถานะของการตอบสนองของข้อมูล" },
                    { name: "message", type: "String", des: "ข้อความ" },
                    { name: "data", type: "String", des: "ข้อมูลที่เรียกออกมา" },
                    { name: "requestId", type: "String", des: "รหัสอ้างอิงคำขอรหัส OTP" },
                    { name: "mobileNumber", type: "String", des: "เบอร์โทรศัพท์ของผู้ป่วยในระบบ" },
                ],
                reqJson:
                {
                    citizenId: "1234567890100",
                    mobileNumber: null,
                    requestId: null
                },
                resJson:
                {
                    status: true,
                    message: "SUCCESS",
                    data: {
                        requestId: "08d33d8a30484d21af7593295e6c1dfa",
                        mobileNumber: "+6686-xxx-xx99"
                    }
                }

            },
            {
                //2
                method: "GET",
                path: "/patients/getPatientWithOTP",
                title: "GetPatientWithOTP",
                titleDes: "ตรวจสอบรหัส OTP ของผู้ป่วย เพื่อยืนยันการอนุญาตให้เข้าถึงข้อมูลของผู้ป่วยที่อยู่บน Blockchain",
                attrReq: [
                    { name: "pin", type: "string", des: "รหัส OTP ที่ได้จาก SMS" },
                    { name: "citizenId", type: "String", des: "เลขบัตรประจำตัวประชาชนของผู้ป่วย" },
                    { name: "requestId", type: "String", des: "รหัสอ้างอิงคำขอรหัส OTP" },
                ],
                attrRes: [
                    { name: "status", type: "Boolean", des: "สถานะของการตอบสนองของข้อมูล" },
                    { name: "message", type: "String", des: "ข้อความ" },
                    { name: "data", type: "String", des: "ข้อมูลที่เรียกออกมา" },
                    { name: "registerDate", type: "String", des: "วันที่ของการเข้ารับการรักษา" },
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
                    { name: "emerHomePhone number", type: "String", des: "เบอร์โทรศัพท์บ้าน (กรณีติดต่อฉุกเฉิน)" },
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
                    { name: "lastname", type: "String", des: "นามสกุลของผู้ป่วย" },
                    { name: "mobileNumber", type: "String", des: "เบอร์โทรศัพท์มือถือของผู้ป่วย" },
                    { name: "motherFirstname", type: "String", des: "ชื่อมารดา (กรณีผู้ป่วยอายุน้อยกว่า 15 ปี)" },
                    { name: "motherLastname", type: "String", des: "นามสกุลมารดา (กรณีผู้ป่วยอายุน้อยกว่า 15 ปี)" },
                    { name: "nametitle", type: "String", des: "คำนำหน้าของผู้ป่วย" },
                    { name: "nationality", type: "String", des: "สัญชาติของผู้ป่วย" },
                    { name: "occupartion", type: "String", des: "อาชีพของผู้ป่วย" },
                    { name: "privilege", type: "String", des: "สิทธิการรักษาของผู้ป่วย" },
                    { name: "province", type: "String", des: "จังหวัดที่ผู้ป่วยอาศัยอยู่" },
                    { name: "religion", type: "String", des: "ศาสนาของผู้ป่วย" },
                    { name: "status", type: "String", des: "สถานะภาพของผู้ป่วย" },
                    { name: "subDistrict", type: "String", des: "ตำบลที่ผู้ป่วยอาศัยอยู่" },
                    { name: "typeofHouse", type: "String", des: "ประเทศที่ผู้ป่วยอาศัยอยู่" },
                    { name: "zipcode", type: "String", des: "รหัสไปรษณีย์ที่อยู่ที่ผู้ป่วยอาศัยอยู่" },
                ],
                reqJson: {
                        pin: '4392',
                        requestId: 'f76d6b249ef44762b7c6b59c78aa1813',
                        citizenId: '1234567890101'
                },
                resJson: {
                    status: true,
                    message: 'SUCCESS',
                    data:
                    {
                        registerDate: '11/18/2018',
                        citizenId: '1234567890101',
                        dob: '10/11/1999',
                        nametitle: 'Miss',
                        firstname: 'Alya',
                        lastname: 'Bowler',
                        gender: 'Female',
                        congenitalDisease: 'heart',
                        bloodgroup: 'O',
                        religion: 'Buddhism',
                        nationality: 'Thai',
                        country: 'Thailand',
                        status: 'Single',
                        occupartion: '-',
                        homePhonenumber: '-',
                        mobileNumber: '+66810000000',
                        email: 'test01@hotmail.com',
                        typeofHouse: 'Flat',
                        address: '23',
                        province: 'Krabi',
                        district: 'Ko Lanta',
                        subDistrict: 'Ko Klang',
                        zipcode: '81120',
                        allergy: 'not have',
                        privilege: 'Government officer',
                        emerTitle: '-',
                        emerFirstname: '-',
                        emerLastname: '-',
                        emerRelationship: '-',
                        emerHomePhonenumber: '-',
                        emerMobileNumber: '-',
                        emerTypeofHouse: '-',
                        emerAddress: '-',
                        emerProvince: '-',
                        emerDistrict: '-',
                        emerSubDistrict: '-',
                        emerZipcode: '-',
                        fatherFirstname: '-',
                        fatherLastname: '-',
                        motherFirstname: '-',
                        motherLastname: '-'
                    }
                }
            },
            {
                //3
                method: "POST",
                path: "/patients/isCitizenId",
                title: "Validate Citizen Id",
                titleDes: "ใตรวจสอบบัตรประชาชน/passport นั้นๆว่ามีในระบบ Blockchain หรือไม่ และ response ออกมาเป็น boolean " +
                    "return TRUE : มีบัตรประชาชนนี้ในระบบ Blockchain" +
                    "return FALSE : ไม่มีบัตรประชาชนนี้ในระบบ Blockchain",
                attrReq: [
                    { name: "citizenId", type: "String", des: "เลขบัตรประจำตัวประชาชนของผู้ป่วย" },
                ],
                attrRes: [
                    
                ],
                reqJson:
                {
                    citizenId: "1234567890101"
                },

                resJson: {}

            },
            {
                //4
                method: "POST",
                path: "/patients/cancelRequestOTP",
                title: "Cancel SMS Verify",
                titleDes: "ยกเลิกการ request OTP",
                attrReq: [
                    { name: "requestId", type: "String", des: "รหัสอ้างอิงคำขอรหัส OTP" },
                ],
                attrRes: [
                    { name: "status", type: "Boolean", des: "สถานะของการตอบสนองของข้อมูล" },
                    { name: "message", type: "String", des: "ข้อความ" },
                ],
                reqJson:
                {
                    requestId: "107353f3cb904773a9a1858861316f0a"
                },
                resJson:
                {
                    status: true,
                    message: "SUCCESS"
                }

            },
        ]
    },
    
    {
        system: "Medical Record",
        method: [
            {
                //1
                method: "POST",
                path: "/medicalRecords/insertMDR",
                title: "Insert Medical Record",
                titleDes: "เพิ่มประวัติการรักษาของผู้ป่วยขึ้นบน blockchain โดยจะประกอบด้วยข้อมูลการตรวจอาการเบื้องต้นจากพยาบาลและการวินิจฉัยโรคจากแพทย์",
                attrReq: [
                    { name: "BP1", type: "String", des: "ความดันโลหิตครั้งที่ 1" },
                    { name: "BP2", type: "String", des: "ความดันโลหิตครั้งที่ 2" },
                    { name: "BP3", type: "String", des: "ความดันโลหิตครั้งที่ 3" },
                    { name: "bmi", type: "String", des: "ดัชนีมวลร่างกาย หรือ อัตราส่วนระหว่างน้ำหนักต่อส่วนสูง" },
                    { name: "bodyWeight", type: "String", des: "น้ำหนักของผู้ป่วย" },
                    { name: "chiefComplaint", type: "String", des: "อาการของผู้ป่วย" },
                    { name: "clinic", type: "String", des: "ชื่อคลินิกที่ผู้ป่วยเข้ารับการรักษา" },
                    { name: "date", type: "String", des: "วันที่ที่ผู้ป่วยเข้ารับการรักษา" },
                    { name: "height", type: "String", des: "ส่วนสูงของผู้ป่วย" },
                    { name: "nurseName", type: "String", des: "ชื่อพยาบาลที่ทำการรักษาผู้ป่วย" },
                    { name: "patientCitizenId", type: "String", des: "เลขบัตรประจำตัวประชาชนของผู้ป่วย" },
                    { name: "pulseRate", type: "String", des: "อัตราการเต้นของหัวใจของผู้ป่วย" },
                    { name: "respiratoryRate", type: "String", des: "อัตราการหายใจเข้าออกของผู้ป่วย" },
                    { name: "temperature", type: "String", des: "อุณหภูมิร่างกายของผู้ป่วย" },
                    { name: "time", type: "String", des: "เวลาที่ผู้ป่วยเข้ารับการรักษา" },
                    { name: "treatmentYear", type: "Number", des: "ปีของการรักษา" },
                    { name: "appointment", type: "String", des: "วันนัดตรวจ" },
                    { name: "diagnosis", type: "String", des: "การวินิจฉัยโรค" },
                    { name: "doctorName", type: "String", des: "ชื่อแพทย์ที่ทำการรักษาผู้ป่วย" },
                    { name: "physicalExem", type: "String", des: "ผลการตรวจ/ทดสอบร่างกาย" },
                    { name: "presentIllness", type: "String", des: "อาการเบื้องต้นของผู้ป่วย" },
                    { name: "recommendation", type: "String", des: "คำแนะนำการรักษา" },
                    { name: "treatment", type: "String", des: "การรักษา" },

                ],
                attrRes: [
                    { name: "status", type: "Boolean", des: "สถานะของการตอบสนองของข้อมูล" },
                    { name: "message", type: "String", des: "ข้อความ" },
                    { name: "data", type: "String", des: "ข้อมูลที่เรียกออกมา" },
                    { name: "medicalRecordId", type: "String", des: "รหัสใบการรักษาบน Blockchain" },
                    { name: "transaction", type: "String", des: "เลข hash transaction บน Blockchain" },
                ],
                reqJson: {
                    BP1: "123/76",
                    BP2: "-/-",
                    BP3: "-/-",
                    bmi: "22.10",
                    bodyWeight: "58.0",
                    chiefComplaint: "Sore throat, cough with yellow sputum. Pain in the body is 5 days.",
                    clinic: "Medical Development Clinic",
                    date: "22/10/2018",
                    height: "162.0",
                    nurseName: "Miss Ezra Barber",
                    patientCitizenId: "1234567890101",
                    pulseRate: "104",
                    respiratoryRate: "18",
                    temperature: "37.8",
                    time: "03:10 PM",
                    treatmentYear: 2018,
                    appointment: "01/11/2018",
                    diagnosis: "Common cold",
                    doctorName: "Dr. Alesha Bryant",
                    physicalExem: "The patient has a stuffy nose. Runny nose Yellow mucus, sneezing, sore throat, hoarseness, low fever and slight headache.",
                    presentIllness: "Nasal congestion, runny nose, sputum, dizziness.",
                    recommendation: "Drink plenty of water, Avoid sneezing or severe nasal irritation.",
                    treatment: "Brompheniramine 1, Ambroxol 1,Paracetamol 1,Pseudoephedrine 1"
                },

                resJson:
                {
                    "status": true,
                    "message": "SUCCESS",
                    "data": {
                        "medicalRecordId": "7",
                        "transaction": [
                            "0x4299c20fb5202baaaaf80b24bf368b5797dd9e23431e7f8bd0a727e05d3ad7ad",
                            "0x8b1a03e46e755949a666a6823b31317529deb946167efaa97018e3e8c070d95c",
                            "0x7a5ffa3959059dfdd3586417636446c89a2f7094f5a85e74833b76e2ac534496",
                            "0x35f1b99e643c856d6eb7ac16461da6da5014e9e2b51c83457d0096c5d3f0a55c"
                        ]
                    }
                }
            },
            {
                //2
                method: "POST",
                path: "/medicalRecords/getHistoryMedicalRecord",
                title: "getHistoryMedicalRecord",
                titleDes: "เรียกดูประวัติการรักษาทั้งหมดของผู้ป่วยคนนั้นๆ โดยเรียงจากล่าสุด",
                attrReq: [
                    { name: "citizenId", type: "String", des: "เลขบัตรประจำตัวประชาชนของผู้ป่วย" },
                ],
                attrRes: [
                    { name: "status", type: "Boolean", des: "สถานะของการตอบสนองของข้อมูล" },
                    { name: "message", type: "String", des: "ข้อความ" },
                    { name: "data", type: "String", des: "ข้อมูลที่เรียกออกมา" },
                    { name: "date", type: "String", des: "วันที่ที่ผู้ป่วยเข้ารับการรักษา" },
                    { name: "doctorName", type: "String", des: "ชื่อแพทย์ที่ทำการรักษาผู้ป่วย" },
                    { name: "clinic", type: "String", des: "ชื่อคลินิกที่ผู้ป่วยเข้ารับการรักษา" },
                    { name: "medicalRecordId", type: "String", des: "รหัสใบการรักษาบน Blockchain" },
                ],
                reqJson: {
                    patientCitizenId: "1234567890101"
                },

                resJson:
                {
                    "status": true,
                    "message": "SUCCESS",
                    "data": [
                        {
                            "date": "22/10/2018",
                            "doctorName": "Dr. Alesha Bryant",
                            "clinic": "Medical Development Clinic",
                            "medicalRecordId": "7"
                        },
                        {
                            "date": "22/10/2018",
                            "doctorName": "Dr. Alesha Bryant",
                            "clinic": "Medical Development Clinic",
                            "medicalRecordId": "6"
                        }
                    ]
                }
            },
            {
                //3
                method: "POST",
                path: "/medicalRecords/getMedicalRecord",
                title: "Get Medical Record",
                titleDes: "เรียกดูใบการรักษาของผู้ป่วยใบนั้นๆบน Blockchain เพื่อให้แพทย์นำมาประกอบการวินิจฉัยโรค",
                attrReq: [
                    { name: "medicalRecordId", type: "String", des: "รหัสใบการรักษาบน Blockchain" },
                ],
                attrRes: [
                    { name: "status", type: "Boolean", des: "สถานะของการตอบสนองของข้อมูล" },
                    { name: "message", type: "String", des: "ข้อความ" },
                    { name: "data", type: "String", des: "ข้อมูลที่เรียกออกมา" },
                    { name: "clinic", type: "String", des: "ชื่อคลินิกที่ผู้ป่วยเข้ารับการรักษา" },
                    { name: "height", type: "String", des: "ส่วนสูงของผู้ป่วย" },
                    { name: "bodyWeight", type: "String", des: "น้ำหนักของผู้ป่วย" },
                    { name: "bmi", type: "String", des: "ดัชนีมวลร่างกาย หรือ อัตราส่วนระหว่างน้ำหนักต่อส่วนสูง" },
                    { name: "temperature", type: "String", des: "อุณหภูมิร่างกายของผู้ป่วย" },
                    { name: "date", type: "String", des: "วันที่ที่ผู้ป่วยเข้ารับการรักษา" },
                    { name: "time", type: "String", des: "เวลาที่ผู้ป่วยเข้ารับการรักษา" },
                    { name: "pulseRate", type: "String", des: "อัตราการเต้นของหัวใจของผู้ป่วย" },
                    { name: "respiratoryRate", type: "String", des: "อัตราการหายใจเข้าออกของผู้ป่วย" },
                    { name: "BP1", type: "String", des: "ความดันโลหิตครั้งที่ 1" },
                    { name: "BP2", type: "String", des: "ความดันโลหิตครั้งที่ 2" },
                    { name: "BP3", type: "String", des: "ความดันโลหิตครั้งที่ 3" },
                    { name: "chiefComplaint", type: "String", des: "อาการของผู้ป่วย" },
                    { name: "nurseName", type: "String", des: "ชื่อพยาบาลที่ทำการรักษาผู้ป่วย" },
                    { name: "patientCitizenId", type: "String", des: "เลขบัตรประจำตัวประชาชนของผู้ป่วย" },
                    { name: "treatmentYear", type: "Number", des: "ปีของการรักษา" },
                    { name: "medicalRecordId", type: "String", des: "รหัสใบการรักษาบน Blockchain" },
                    { name: "presentIllness", type: "String", des: "อาการเบื้องต้นของผู้ป่วย" },
                    { name: "physicalExem", type: "String", des: "ผลการตรวจ/ทดสอบร่างกาย" },
                    { name: "diagnosis", type: "String", des: "การวินิจฉัยโรค" },
                    { name: "treatment", type: "String", des: "การรักษา" },
                    { name: "recommendation", type: "String", des: "คำแนะนำการรักษา" },
                    { name: "appointment", type: "String", des: "วันนัดตรวจ" },
                    { name: "doctorName", type: "String", des: "ชื่อแพทย์ที่ทำการรักษาผู้ป่วย" },
                ],
                reqJson: {
                    "medicalRecordId": "5"
                },

                resJson:
                {
                    "status": true,
                    "message": "SUCCESS",
                    "data": {
                        "clinic": "Medical Development Clinic",
                        "height": "162.0",
                        "bodyWeight": "58.0",
                        "bmi": "22.10",
                        "temperature": "37.8",
                        "date": "22/10/2018",
                        "time": "03:10 PM",
                        "pulseRate": "104",
                        "respiratoryRate": "18",
                        "BP1": "123/76",
                        "BP2": "-/-",
                        "BP3": "-/-",
                        "chiefComplaint": "Sore throat, cough with yellow sputum. Pain in the body is 5 days.",
                        "nurseName": "Miss Ezra Barber",
                        "patientCitizenId": "1234567890101",
                        "treatmentYear": "2018",
                        "medicalRecordId": "5",
                        "presentIllness": "Nasal congestion, runny nose, sputum, dizziness.",
                        "physicalExem": "The patient has a stuffy nose. Runny nose Yellow mucus, sneezing, sore throat, hoarseness, low fever and slight headache.",
                        "diagnosis": "Common cold",
                        "treatment": "Brompheniramine 1, Ambroxol 1,Paracetamol 1,Pseudoephedrine 1",
                        "recommendation": "Drink plenty of water, Avoid sneezing or severe nasal irritation.",
                        "appointment": "01/11/2018",
                        "doctorName": "Dr. Alesha Bryant"
                    }
                }
            }
        ]
    }

]
