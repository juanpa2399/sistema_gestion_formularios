const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const GiraTecnica = require('./GiraTecnica');

const Participantes = sequelize.define('Participantes', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    gira_tecnica_id: { 
        type: DataTypes.INTEGER, 
        references: {
            model: GiraTecnica,
            key: 'id'
        }
    },
    nombre: { type: DataTypes.STRING, allowNull: false },
    rol: { type: DataTypes.STRING, allowNull: false }
}, {
    tableName: 'Participantes',
    timestamps: false
});

GiraTecnica.hasMany(Participantes, { foreignKey: 'gira_tecnica_id' });
Participantes.belongsTo(GiraTecnica, { foreignKey: 'gira_tecnica_id' });

module.exports = Participantes;
