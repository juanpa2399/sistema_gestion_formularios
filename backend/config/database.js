const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME || "sitema_gestion_formularios", 
    process.env.DB_USER || "root", 
    process.env.DB_PASSWORD || "", 
    {
    host: process.env.DB_HOST || "3306",
    dialect: 'mysql',
});

module.exports = sequelize;
