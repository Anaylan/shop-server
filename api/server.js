// See https://github.com/typicode/json-server#module
const jsonServer = require("json-server");
const auth = require("json-server-auth");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
// const cors = require("cors");
// server.use(cors);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "*");
	res.header("Access-Control-Expose-Headers", "Content-Length,Content-Range");
	next();
});
// server.use((req, _, next) => {
// 	if (req.method === "POST") {
// 		req.body.createdAt = Date.now();
// 	}
// 	// Передаем управление роутеру `JSON Server`
// 	next();
// });
// Add this before server.use(router)
// server.use(
// jsonServer.rewriter({
// 	"/login*": "/users*",
// 	"/register": "/users",
// })
// );
server.use(router);
server.use(auth);
server.listen(3000, () => {
	// console.log();
	console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;
