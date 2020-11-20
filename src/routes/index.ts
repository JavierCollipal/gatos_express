import catRouter from './cat'
const apiVersion = '/api/v1'

export default function (app: any): void {
  app.use(apiVersion, catRouter)
}
