// See https://github.com/typicode/json-server#module
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
// const cors = require("cors");
// server.use(cors);
const middlewares = jsonServer.defaults();
const authMiddle = require("json-server-auth");
server.use(middlewares);

server.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "*");
	next();
});
// Add this before server.use(router)
// server.use(
// 	jsonServer.rewriter({
// 		"/login*": "/users*",
// 		"/register": "/users",
// 	})
// );
server.use(router);
server.use(authMiddle);
server.listen(3000, () => {
	console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;
