const express = require('express')
var router = express.Router();

var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '1212312121',
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

module.exports = router