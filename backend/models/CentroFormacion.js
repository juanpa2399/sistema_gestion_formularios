const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Regional = require('./Regional');

const CentroFormacion = sequelize.define('CentroFormacion', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING, allowNull: false },
    regional_id: { 
        type: DataTypes.INTEGER, 
        references: {
            model: Regional,
            key: 'id'
        }
    }
}, {
    tableName: 'CentroFormacion',
    timestamps: false
});

Regional.hasMany(CentroFormacion, { foreignKey: 'regional_id' });
CentroFormacion.belongsTo(Regional, { foreignKey: 'regional_id' });

module.exports = CentroFormacion;
