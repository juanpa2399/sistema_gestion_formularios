const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ error: 'Acceso denegado. Token no proporcionado.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ error: 'Token inválido.' });
    }
};

const authorizeRole = (role) => {
    return (req, res, next) => {
        if (req.user.rol !== role) {
            return res.status(403).json({ error: 'Acceso denegado. No tienes permisos suficientes.' });
        }
        next();
    };
};

module.exports = { authenticateJWT, authorizeRole };
