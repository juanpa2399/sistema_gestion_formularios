const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Regional = require('./Regional');
const CentroFormacion = require('./CentroFormacion');
const FuenteFinanciacion = require('./FuenteFinanciacion');

const GiraTecnica = sequelize.define('GiraTecnica', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    regional_id: { 
        type: DataTypes.INTEGER, 
        references: {
            model: Regional,
            key: 'id'
        }
    },
    centro_formacion_id: { 
        type: DataTypes.INTEGER, 
        references: {
            model: CentroFormacion,
            key: 'id'
        }
    },
    fuente_financiacion_id: { 
        type: DataTypes.INTEGER, 
        references: {
            model: FuenteFinanciacion,
            key: 'id'
        }
    },
    objetivo_general: { type: DataTypes.TEXT, allowNull: false },
    resultado_esperado: { type: DataTypes.TEXT, allowNull: false },
    valor_total: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    observaciones: { type: DataTypes.TEXT, allowNull: true }
}, {
    tableName: 'GiraTecnica',
    timestamps: false
});

Regional.hasMany(GiraTecnica, { foreignKey: 'regional_id' });
CentroFormacion.hasMany(GiraTecnica, { foreignKey: 'centro_formacion_id' });
FuenteFinanciacion.hasMany(GiraTecnica, { foreignKey: 'fuente_financiacion_id' });

GiraTecnica.belongsTo(Regional, { foreignKey: 'regional_id' });
GiraTecnica.belongsTo(CentroFormacion, { foreignKey: 'centro_formacion_id' });
GiraTecnica.belongsTo(FuenteFinanciacion, { foreignKey: 'fuente_financiacion_id' });

module.exports = GiraTecnica;
