const app = require('./app');
const { server_port } = require("./src/config/security/dotenv");
const { logger } = require("./src/config/logger/pino");

app.listen(server_port, function(){
    logger.info('Escuchando a los gatos en:',server_port);
  });
