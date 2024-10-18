import { log } from 'console';
import mysql2 from 'mysql2/promise';
import "dotenv/config"

let con = await mysql2.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PWD,
    database: process.env.MYSQL_DB
})


console.log('--> Conexão com BD realizada');

export default con;