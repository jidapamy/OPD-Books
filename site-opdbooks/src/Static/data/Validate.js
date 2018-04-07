export const validateTextTh = {
    idcard: {
        errorPattern: '//รหัสประชาชนต้องเป็นตัวเลขเท่านั้น  ',
        errorLength: '//รหัสประชาชนต้องมี 13 หลัก!  ',
        duplicated: 'เลขบัตรประชาชนนี้มีใช้แล้ว'
    },
    mobileNumber: '//เบอร์โทรศัพท์ไม่ถูกต้อง ex. 08xxxxxxxx หรือ 08x-xxx-xxxx  ',
    emerMobileNumber: '//เบอร์โทรศัพท์(กรณีฉุกเฉิน) ไม่ถูกต้อง ex. 08xxxxxxxx หรือ 08x-xxx-xxxx  ',
    homePhonenumber: '//เบอร์โทรศัพท์บ้านไม่ถูกต้อง ex. 0xxxxxxxx หรือ 0x-xxx-xxxx   ',
    emerHomePhonenumber: '//เบอร์โทรศัพท์บ้าน(กรณีฉุกเฉิน) ไม่ถูกต้อง ex. 0xxxxxxxx หรือ 0x-xxx-xxxx   '
}

export const validateTextEn = {
    idcard: {
        errorPattern: '//Passport number pattern missing.  ',
        errorLength: '//Passport number exactly 9 characters.  ',
        duplicated: 'The passport number is duplicated'
    },
    mobileNumber: '//Moblie Number incorrect ex. (+66)xxxxxxxxx or +66xxxxxxxxx  ',
    emerMobileNumber: '//Moblie Number (In case of emergency contact) incorrect ex. (+66)xxxxxxxxx or +66xxxxxxxxx  ',
    homePhonenumber: '//Home Phone Number incorrect ex. (+66)xxxxxxxx or +66xxxxxxxx  ',
    emerHomePhonenumber: '//Home Phone Number (In case of emergency contact) incorrect ex. (+66)xxxxxxxx or +66xxxxxxxx  '
}
