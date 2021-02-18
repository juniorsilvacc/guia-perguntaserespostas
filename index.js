const express = require('express');
const app = express();

// Estou falando para o express usar o ejs como view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render("index");
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar");
})

app.listen(8888, () =>{
    console.log("app rodando!")
});