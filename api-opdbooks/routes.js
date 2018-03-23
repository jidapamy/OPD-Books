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

router.get('/', async (req, res) => {
    var data = await knex.table('PateintRecords')
        .select()
    res.send(data);
})

router.post('/addPateint', async function (req, res) {
    console.log(req.body)
    var data = await knex.table('PateintRecords')
        .insert({
            hospitalNumber: req.body.hospitalNumber,
            nameTitleTH: req.body.nameTitleTH,
            firstnameTH: req.body.firstnameTH,
            lastnameTH: req.body.lastnameTH,
            nameTitleEN: req.body.nameTitleEN,
            firstnameEN: req.body.firstnameEN,
            lastnameEN: req.body.lastnameEN,
            gender: req.body.gender,
            dob: req.body.dob,
            occupartion: req.body.occupartion,
            idcard: req.body.idcard,
            bloodGroup: req.body.bloodGroup,
            nationality: req.body.nationality,
            religion: req.body.religion,
            status: req.body.status,
            homePhonenumber: req.body.homePhonenumber,
            mobileNumber: req.body.mobileNumber,
            nameFather: req.body.nameFather,
            nameMother: req.body.nameMother,
            typeofHouse: req.body.typeofHouse,
            address: req.body.address,
            province: req.body.province,
            district: req.body.district,
            subDistrict: req.body.subDistrict,
            zipcode: req.body.zipcode,
            emerName: req.body.emerName,
            emerRelationship: req.body.emerRelationship,
            emerHomePhonenumber: req.body.emerHomePhonenumber,
            emerMobileNumber: req.body.emerMobileNumber,
            emerAddress: req.body.emerAddress,
            privilege: req.body.privilege,
            allergy: req.body.allergy,
            congenitalDisease: req.body.congenitalDisease,
        })

    res.end('ADD Success');
});

// router.get('/province', async (req, res) => {
//     var data = await knex.table('province')
//         .select()
//     res.send(data);
// })

// router.get('/amphurDB', async (req, res) => {
//     var data = await knex.table('amphur')
//         .select()
//     res.send(data);
// })

// router.get('/districtDB', async (req, res) => {
//     var data = await knex.table('district')
//         .select()
//     res.send(data);
// })

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

const provinces = require('./Thailand/Province.json')
const amphors = require('./Thailand/Amphur.json')
const districts = require('./Thailand/District.json')
const zipcodes = require('./Thailand/Zipcode.json')

router.get('/comblie', (req, res) => {
    const data = provinces
        .map(province => ({
            key: province.PROVINCE_ID,
            text: province.PROVINCE_NAME,
            value: province.PROVINCE_NAME,
            amphurs: amphors
                .filter(amphor => amphor.PROVINCE_ID === province.PROVINCE_ID)
                .map(amphor => ({
                    key: amphor.AMPHUR_ID,
                    text: amphor.AMPHUR_NAME,
                    value: amphor.AMPHUR_NAME,
                    districts: districts
                        .filter(district => district.AMPHUR_ID === amphor.AMPHUR_ID)
                        .map(district => ({
                            key: district.DISTRICT_ID,
                            text: district.DISTRICT_NAME,
                            value: district.DISTRICT_NAME,
                            zipcode : zipcodes
                                .filter(zipcode => zipcode.DISTRICT_CODE === district.DISTRICT_CODE)
                                .map(zipcode => (
                                    zipcode.ZIPCODE
                                ))[0] || ''
                        }))
                }))
        }))
        .sort((a, b) => a.text.localeCompare(b.text))
    res.send(data)
})


const thailand = require('./Thailand.json')
router.get('/province', async (req, res) => {
    const data = provinces
        .map(province => ({
            key: province.PROVINCE_ID,
            text: province.PROVINCE_NAME,
            value: province.PROVINCE_NAME
        }))
        .sort((a, b) => a.text.localeCompare(b.text))
    res.send(data);
})


router.get('/amphur', async (req, res) => {
    const data = amphors
        .map(amphor => ({
            key: amphor.AMPHUR_ID,
            text: amphor.AMPHUR_NAME,
            value: amphor.AMPHUR_NAME,
            provinceid: amphor.PROVINCE_ID,
        }))
        .sort((a, b) => a.text.localeCompare(b.text))
    res.send(data);
})

router.get('/district', async (req, res) => {
    const data = districts
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
        .sort((a, b) => a.text.localeCompare(b.text))
    res.send(data);
})

module.exports = router