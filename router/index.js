// route/api.ts
const Router = require("koa-router");
const user = require("../api/user/index");
const router = new Router();
router.use("/user", user.routes(), user.allowedMethods());
module.exports = router;
