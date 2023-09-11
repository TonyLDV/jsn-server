const jsonServer = require("json-server json-server-auth");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults({ static: "./build" });
const port = process.env.PORT || 3001;
server.use(middlewares);
server.use(router);
server.listen(port);

