const catRoutes = require("./cat");
const apiVersion = "/api/v1";

module.exports = (app) => {
    app.use(apiVersion+'/cat',catRoutes);
};