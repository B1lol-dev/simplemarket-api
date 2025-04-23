const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

const { PORT } = require("./constants/constants.js");

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
