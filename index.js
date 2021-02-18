const express = require('express');
const app = express();

// Estou falando para o express usar o ejs como view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("index");
});

app.listen(8888, () =>{
    console.log("app rodando!")
});