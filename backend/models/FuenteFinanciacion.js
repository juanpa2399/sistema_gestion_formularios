const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const FuenteFinanciacion = sequelize.define('FuenteFinanciacion', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING, allowNull: false }
}, {
    tableName: 'FuenteFinanciacion',
    timestamps: false
});

module.exports = FuenteFinanciacion;