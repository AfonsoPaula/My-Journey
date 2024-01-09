const express = require('express');
const app = express();
app.listen(3000);

// -------------------------- routes with parameters --------------------------
app.get("/", (req,res) => {
    res.send('Hello World!');
})

// clients
app.get("/clients/:shop-:city", (req,res) => {

    let shops = [
        "Street a",
        "Street b",
        "Street c",
        "Street d",
        "Street e",
    ]

    res.send(`The shop chosen was the one in the city of: ${req.params.city}, located on ${shops[req.params.shop]}. `);
})

app.get("/clients/:id_client", (req,res) =>{
    // res.send(req.params);
    res.send(`The selected client was ${req.params.id_client}`)
})

app.get("/clients/:id/comments/:id_comment", (req,res) => {
    res.send(req.params);
})

app.get("/sum/:value1/:value2", (req,res) => {
    res.send(`The sum of the values is: ${+req.params.value1 + +req.params.value2}`);
})

// ----------------------------------------------------------------------------

// routes with regular expressions:
// '+' => Ex: ab+cd => acd abcd
// '?' => Ex: ab?cd => abcd abbcd abbbcd
// '*' => Ex: a*x => acx abcx ajkdsfnanlkfnasdnfasdlfx