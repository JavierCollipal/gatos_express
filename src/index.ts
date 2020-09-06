import app from './app'
import { port } from './config/security/dotenv'

app.listen(port, function () {
  console.info('Escuchando a los gatos en:', port)
})
