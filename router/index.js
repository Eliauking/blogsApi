// route/api.ts
const Router = require("koa-router");
const user = require("../api/user/index");
const routes = require("../api/routes/index");
const router = new Router();
router.use("/user", user.routes(), user.allowedMethods());
router.use("/routes", routes.routes(), routes.allowedMethods());
module.exports = router;
