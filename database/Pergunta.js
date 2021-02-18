const Sequelize = require('sequelize');
const connection = require('./database');

const Pergunta = connection.define("perguntas", {
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});

// Sincronizando.. Caso não existe a tabela pergunta, crie uma!
Pergunta.sync({force: false}).then(() => {
});

module.exports = Pergunta;