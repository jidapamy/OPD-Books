const express = require('express')
var router = express.Router();

var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '13.229.116.222',
        user: 'opdbooks',
        password: '12345',
        database: 'OPDBooks'
    }
});

router.post('/addPateint', async function (req, res) {
    var idCards = await knex.table('PateintRecords')
        .select('idcard')
        .where('idcard', req.body.idCard)
    if (idCards === null || idCards.length === 0) {
        var maxHN = await knex.table('PateintRecords')
            .select()
            .max('hospitalNumber as maxHN')
        var hospitalNumber = (maxHN[0].maxHN) + 1
        var data = await knex.table('PateintRecords')
            .insert({
                hospitalNumber: hospitalNumber,
                registerDate: req.body.registerDate,
                idCard: req.body.idCard,
                nameTitle: req.body.nameTitle,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                gender: req.body.gender,
                dob: req.body.dob,
                bloodgroup: req.body.bloodgroup,
                country: req.body.country,
                nationality: req.body.nationality,
                religion: req.body.religion,
                status: req.body.status,
                occupartion: req.body.occupartion,
                homePhonenumber: req.body.homePhonenumber,
                mobileNumber: req.body.mobileNumber,
                congenitalDisease: req.body.congenitalDisease,
                typeofHouse: req.body.typeofHouse,
                address: req.body.address,
                province: req.body.province,
                district: req.body.district,
                subDistrict: req.body.subDistrict,
                zipcode: req.body.zipcode,
                emerTitle: req.body.emerTitle,
                emerFirstname: req.body.emerFirstname,
                emerLastname: req.body.emerLastname,
                emerRelationship: req.body.emerRelationship,
                emerHomePhonenumber: req.body.emerHomePhonenumber,
                emerMobileNumber: req.body.emerMobileNumber,
                emerTypeofHouse: req.body.emerTypeofHouse,
                emerAddress: req.body.emerAddress,
                emerProvince: req.body.emerProvince,
                emerDistrict: req.body.emerDistrict,
                emerSubDistrict: req.body.emerSubDistrict,
                emerZipcode: req.body.emerZipcode,
                statusSameAddress: req.body.statusSameAddress,
                fatherFirstname: req.body.fatherFirstname,
                fatherLastname: req.body.fatherLastname,
                motherFirstname: req.body.motherFirstname,
                motherLastname: req.body.motherLastname,
                allergy: req.body.allergy,
                privilege: req.body.privilege,
                statusSameAddress: req.body.statusSameAddress
            })
        console.log(data)
        console.log('Success')
        res.end('ADD Success');
    } else {
        res.end('ซ้ำ');
    }
});

router.get('/checkidcard/:id', async (req, res) => {
    var idCards = await knex.table('PateintRecords')
        .select('idCard')
        .where('idCard', req.params.id)
    console.log(idCards)
    if (idCards === null || idCards.length === 0) {
        console.log(idCards.length)
        res.send(true); // หาไม่เจอ (ผ่าน)
    } else {
        res.send(false); // หาเจอ (ไม่ผ่าน)
    }
})

router.get('/provinceDB', async (req, res) => {
    var data = await knex.table('province')
        .select()
    res.send(data);
})

router.get('/amphurDB', async (req, res) => {
    var data = await knex.table('amphur')
        .select()
    res.send(data);
})

router.get('/amphurDB/:id', async (req, res) => {
    var data = await knex.table('amphur')
        .where('PROVINCE_ID', req.params.id)
        .select()
    res.send(data);
})

router.get('/districtDB', async (req, res) => {
    var data = await knex.table('district')
        .select()
    res.send(data);
})

// router.get('/zipcode', async (req, res) => {
//     var data = await knex.table('zipcode')
//         .select()
//     res.send(data);
// })

// router.get('/province/:id', async (req, res) => {
//     var data = await knex.table('province').innerJoin('amphur', 'province.PROVINCE_ID', 'amphur.PROVINCE_ID')
//         .select()
//         .where('province.PROVINCE_ID', req.params.id)
//     res.send(data);
// })



router.get('/amphurTest', async (req, res) => {
    var provinceDB = await knex.table('province').select()
    var provinceJSON = await provinceDB.map(province => ({
        key: province.PROVINCE_ID,
        text: province.PROVINCE_NAME,
        value: province.PROVINCE_NAME
    }))
    var amphurDB = await knex.table('amphur').select()
    var amphurJSON = amphurDB
        .map(amphor => ({
            key: amphor.AMPHUR_ID,
            text: amphor.AMPHUR_NAME ,
            value: amphor.AMPHUR_NAME ,
            provinceid: amphor.PROVINCE_ID,
        }))
        // .sort((a, b) => a.provinceid-b.provinceid)

    let arr =[]
    for (let i = 0; i < provinceJSON.length; i++){
        let tmp =[]
        for (let j = 0; j < amphurJSON.length;j++){
            if (amphurJSON[j].provinceid === provinceJSON[i].key){
                tmp.push(amphurJSON[j])
            }
        }
        arr[provinceJSON[i].key] = tmp.sort((a, b) => a.text.localeCompare(b.text))
    }

    res.send(arr);
})

router.get('/districtTest', async (req, res) => {
    var amphurDB = await knex.table('amphur').select()
    var amphurJSON = await amphurDB.map(amphur => ({
        key: amphur.AMPHUR_ID,
    }))
    var districtrDB = await knex.table('district').select()
    var districtJSON = districtrDB
            .map(district => ({
            key: district.DISTRICT_ID,
            text: district.DISTRICT_NAME,
            value: district.DISTRICT_NAME,
            amphurid: district.AMPHUR_ID,
            zipcode: zipcodes
                .filter(zipcode => zipcode.DISTRICT_CODE === district.DISTRICT_CODE)
                .map(zipcode => (
                    zipcode.ZIPCODE
                ))[0] || ''
        }))

    let arr = []
    for (let i = 0; i < amphurJSON.length; i++) {
        let tmp = []
        for (let j = 0; j < districtJSON.length; j++) {
            if (districtJSON[j].amphurid === amphurJSON[i].key) {
                tmp.push(districtJSON[j])
            }
        }
        arr[amphurJSON[i].key] = tmp.sort((a, b) => a.text.localeCompare(b.text))
        // arr.push(tmp.sort((a, b) => a.text.localeCompare(b.text)))
    }

    res.send(arr);
})






const provinces = require('./Thailand/Province.json')
const amphors = require('./Thailand/Amphur.json')
const districts = require('./Thailand/District.json')
const zipcodes = require('./Thailand/Zipcode.json')

// router.get('/comblie', (req, res) => {
//     const data = provinces
//         .map(province => ({
//             key: province.PROVINCE_ID,
//             text: province.PROVINCE_NAME,
//             value: province.PROVINCE_NAME,
//             amphurs: amphors
//                 .filter(amphor => amphor.PROVINCE_ID === province.PROVINCE_ID)
//                 .map(amphor => ({
//                     key: amphor.AMPHUR_ID,
//                     text: amphor.AMPHUR_NAME,
//                     value: amphor.AMPHUR_NAME,
//                     districts: districts
//                         .filter(district => district.AMPHUR_ID === amphor.AMPHUR_ID)
//                         .map(district => ({
//                             key: district.DISTRICT_ID,
//                             text: district.DISTRICT_NAME,
//                             value: district.DISTRICT_NAME,
//                             zipcode: zipcodes
//                                 .filter(zipcode => zipcode.DISTRICT_CODE === district.DISTRICT_CODE)
//                                 .map(zipcode => (
//                                     zipcode.ZIPCODE
//                                 ))[0] || ''
//                         }))
//                 }))
//         }))
//         .sort((a, b) => a.text.localeCompare(b.text))
//     res.send(data)
// })


// const thailand = require('./Thailand.json')
// router.get('/province', async (req, res) => {
//     const data = provinces
//         .map(province => ({
//             key: province.PROVINCE_ID,
//             text: province.PROVINCE_NAME + ' (' + province.PROVINCE_NAME_ENG + ')',
//             value: province.PROVINCE_NAME + ' (' + province.PROVINCE_NAME_ENG + ')'
//         }))
//         .sort((a, b) => a.text.localeCompare(b.text))
//     res.send(data);
// })


router.get('/amphur', async (req, res) => {
    const data = amphors
        .map(amphor => ({
            key: amphor.AMPHUR_ID,
            text: amphor.AMPHUR_NAME + ' (' + amphor.AMPHUR_NAME_ENG + ')',
            value: amphor.AMPHUR_NAME + ' (' + amphor.AMPHUR_NAME_ENG + ')',
            provinceid: amphor.PROVINCE_ID,
        }))
    .sort((a, b) => a.provinceid.localeCompare(b.provinceid))

    res.send(data);
})

router.get('/amphur/:id', async (req, res) => {
    console.log(req.params.id)
    const data = amphors
        .map(amphor => ({
            key: amphor.AMPHUR_ID,
            text: amphor.AMPHUR_NAME + ' (' + amphor.AMPHUR_NAME_ENG + ')',
            value: amphor.AMPHUR_NAME + ' (' + amphor.AMPHUR_NAME_ENG + ')',
            provinceid: amphor.PROVINCE_ID,
        }))
        .filter(amphor => amphor.PROVINCE_ID === req.params.id)
    res.send(data);
})


// router.get('/district', async (req, res) => {
//     const data = districts
//         .map(district => ({
//             key: district.DISTRICT_ID,
//             text: district.DISTRICT_NAME,
//             value: district.DISTRICT_NAME,
//             amphurid: district.AMPHUR_ID,
//             zipcode: zipcodes
//                 .filter(zipcode => zipcode.DISTRICT_CODE === district.DISTRICT_CODE)
//                 .map(zipcode => (
//                     zipcode.ZIPCODE
//                 ))[0] || ''
//         }))
//         .sort((a, b) => a.text.localeCompare(b.text))
//     res.send(data);
// })

router.get('/validateIdcard', async (req, res) => {
    var data = await knex.table('PateintRecords')
        .select('idcard')
    // .where('idcard',idcard)
    res.send(data);
})
router.get('/validateIdcard/:id', async (req, res) => {
    var data = await knex.table('PateintRecords')
        .select('idcard')
        .where('idcard', req.params.id)
    res.send(data);
})



module.exports = router