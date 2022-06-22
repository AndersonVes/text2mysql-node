import mysql from 'mysql'

const con = mysql.createConnection({
    host: process.env.HOST_DESAFIO,
    user: process.env.USERNAME_DESAFIO,
    password: process.env.PASSWORD_DESAFIO
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});


export default con;