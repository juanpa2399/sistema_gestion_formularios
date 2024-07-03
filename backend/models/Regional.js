const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Regional = sequelize.define('Regional', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING, allowNull: false }
}, {
    tableName: 'Regional',
    timestamps: false
});

module.exports = Regional;
