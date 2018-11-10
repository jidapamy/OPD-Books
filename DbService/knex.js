const config = require("./config")
// config = {
//     host: ${YOUR DATABASE SERVER},
//     user: ${USERNAME},
//     password: ${PASSWORD},
//     database: ${DATABASE SCHEMA},
// }

var knex = require("knex")({
    client: "mysql",
    connection: config
});
module.exports = knex