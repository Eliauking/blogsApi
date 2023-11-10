require("./config/sequelize");
const koa2 = require("koa2");
const app = new koa2();
const jwt = require("koa-jwt");
const router = require("./router/index");
const { JWT_SECRET, JWT_WHITELIST } = require("./config/jwt");
const { koaBody } = require("koa-body");

// 解析 request body:
app.use(koaBody());

// 响应处理
app.use(require("./middlewares/response"));
// 注册路由中间件
app.use(router.routes());
app.use(router.allowedMethods());
app.use(jwt({ secret: JWT_SECRET }).unless(JWT_WHITELIST));
// 监听端口
app.listen(3000, () => {
  console.log("The project starts and runs on port 3000");
});
