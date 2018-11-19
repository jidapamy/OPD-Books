const config = require("./config")
// config = {
//     host: ${YOUR DATABASE SERVER},
//     user: ${USERNAME},
//     password: ${PASSWORD},
//     database: ${DATABASE SCHEMA},
// }


var knexSIT = require("knex")({
    client: "mysql",
    connection: config('SIT')
});

var knexKMUTT = require("knex")({
    client: "mysql",
    connection: config('KMUTT')
});
module.exports = {
    knexSIT,
    knexKMUTT
}