const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const sequelize = require('./config/database');
const authRoutes = require('./routes/auth');
const regionalesRoutes = require('./routes/regionales');
const centroFormacionRoutes = require('./routes/centroFormacion');
const fuenteFinanciacionRoutes = require('./routes/fuenteFinanciacion');
const giraTecnicaRoutes = require('./routes/giraTecnica');
const participantesRoutes = require('./routes/participantes');
const usuariosRoutes = require('./routes/usuarios');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/regionales', regionalesRoutes);
app.use('/api/centro-formacion', centroFormacionRoutes);
app.use('/api/fuente-financiacion', fuenteFinanciacionRoutes);
app.use('/api/gira-tecnica', giraTecnicaRoutes);
app.use('/api/participantes', participantesRoutes);
app.use('/api/usuarios', usuariosRoutes);

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Servidor corriendo en http://localhost:${port}`);
    });
});
