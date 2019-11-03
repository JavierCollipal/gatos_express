const app = require('./app');
const { server_port } = require("./src/config/dotenv");

app.listen(server_port, function(){
    console.log('Escuchando a los gatos en:',server_port);
  });