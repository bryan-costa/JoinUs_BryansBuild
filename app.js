var { connection } = require('./connection.js')
var mysql = require('mysql');
const { internet, date } = require('faker')

var person = {
    email: internet.email(),
    created_at: date.past()
};
let q = 'SELECT * FROM users ORDER BY created_at DESC'

var end_result = connection.query('INSERT INTO users SET ?', person, function (err, result) {
    if (err) throw err;
    console.log(result);
});

connection.query(q, function (err, result) {
    if (err) throw err;
    console.log(result);
});

connection.end();
