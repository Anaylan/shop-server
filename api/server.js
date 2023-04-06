// See https://github.com/typicode/json-server#module
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
// const cors = require("cors");
// server.use(cors);
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "*");
	next();
});
// Add this before server.use(router)
server.use(
	jsonServer.rewriter({
		"/api/*": "/$1",
		"/blog/:resource/:id/show": "/:resource/:id",
	})
);
server.use(router);
server.listen(3000, () => {
	console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;
