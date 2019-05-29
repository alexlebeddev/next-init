const routes = require("next-routes")();

module.exports = routes;

routes
  .add("test", "/test/:id")
  .add("login", "/login")
  .add("home", "/home");
