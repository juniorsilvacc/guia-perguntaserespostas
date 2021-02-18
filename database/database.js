const Sequerize = require('sequelize');

const connection = new Sequerize('guiaperguntas', 'root', 'coremas32', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;