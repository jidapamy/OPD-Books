# Senior Project : OPD Books 
ระบบจัดการเวชระเบียนใบการรักษาของผู้ป่วยที่เคยรับการรักษา โดยระบบเราจะเป็น การจัดการใบการรักษา ของแต่คลินิก โดยเป็นผู้ให้ Service ในการเรียกใช้งาน 
โดยข้อมูลต่างๆของผู้ป่วยจะเก็บอยู่บน Block Chain 

# Connect Database
- Create schema and run script in DbService/SQLScript.sql
- Create config.js and module.exports = {
    host: ${YOUR DATABASE SERVER},
    user: ${USERNAME},
    password: ${PASSWORD},
    database: ${DATABASE SCHEMA},
}