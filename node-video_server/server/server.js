const http = require("http");
const App = require("./App");
const config = require("./configs/default");
const app = require("./App");

const port = config.port;

const server = http.createServer(app);
server.listen(port);

console.log("server is running on 127.0.0.1:" + port);