// express
const express = require("express");
const app = new express();
app.listen(3000, () => {
    console.log('API running!')
})

// mysql
const mysql = require('mysql');
const connection = mysql.createConnection({
    user: 'user_blog',
    password: 'vO4elAvoHeN7fA4ox57Iz7zoyoq4ve',
    // host: 'localhost',
    database: 'blog'
})

// routes
app.get("/", (req,res) => {
    // connection.query('SELECT * FROM users', (err, results) => {
    //     if (err){
    //         res.send(err.sqlMessage);
    //     }

    //     if (results.length != 0){
    //         res.send(results);
    //     } else {
    //         res.send('Data not found.')
    //     }
    // })

    // // ------------------------------- add 1 user ------------------------------------
    // let values =  ['teste1', '2030-10-20 18:56:00']

    // connection.query('INSERT INTO users VALUES(0,?,?)', values, (err, results) => {
    //     if (err){
    //         res.send('Error: ' + err.sqlMessage);
    //     } else {
    //         res.send('OK!');
    //     }
    // })

    // // ---------------- ---------- add 2 or more users -------------------------------
    // let values =  [
    //     ['0', 'teste2', '2030-10-20 18:58:00'],
    //     ['0', 'teste3', '2030-10-20 18:59:00'],
    //     ['0', 'teste4', '2030-10-20 19:00:00']
    // ]

    // connection.query('INSERT INTO users VALUES ?', [values], (err, results) => {
    //     if (err){
    //         res.send('Error: ' + err.sqlMessage);
    //     } else {
    //         res.send('OK!');
    //     }
    // })

    res.json(api_response('success', 'success', []));
})

// // ---------------------------- url parameterization ---------------------------------
// app.get("/users/:id", (req,res) => {
//     let id = req.params.id;
//     connection.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
//         if (err){
//             res.json('Error: ' + err.sqlMessage); //  json or send
//         } else {
//             res.json(results);
//         }
//     })
// })

app.get("/users/:id", (req,res) => {
    let id = req.params.id;
    connection.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
        if (err){
            res.json(api_response('error', err.sqlMessage, []));
        } else {
            res.json(api_response('success', 'success', results))
        }
    })
})

function api_response(status, message, data){
    return {
        status: status,
        message: message,
        results: data
    }
}