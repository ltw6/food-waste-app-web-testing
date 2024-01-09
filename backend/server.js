const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express()
app.use(cors())

var db = mysql.createConnection({
    host     : 'HOST',
    user     : 'USER',
    password : 'PASSWORD',
    port     : 'PORT',
    database: 'DB'
  });

app.get('/', (re, res) => {
    return res.json("From Backend Side")
})

app.get('/customers', (req, res) => {
    const sql = "SELECT customerID FROM customers"
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get('/ingredients', (req, res) => {
    const sql = "SELECT * FROM ingredient"
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8081, () => {
    console.log('listening')
})
