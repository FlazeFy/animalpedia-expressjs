const fs = require('fs')
const mysql = require('mysql')
const configFile = fs.readFileSync('configs/configs.json', 'utf8')
const conDt = JSON.parse(configFile)

const connection = mysql.createConnection({
    host     : conDt.DB_HOST,
    user     : conDt.DB_USERNAME,
    password : conDt.DB_PASSWORD,
    database : conDt.DB_NAME
})

module.exports = connection
