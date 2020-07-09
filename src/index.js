const app = require('./app');
const { port } = require('./config/security/dotenv');
const { logger } = require('./config/logger/pino');

app.listen(port, function () {
	logger.info('Escuchando a los gatos en:', port);
});
