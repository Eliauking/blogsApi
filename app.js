const koa2 = require("koa2");
const app = new koa2();
const router = require("./router/index");
const { koaBody } = require("koa-body");
require("./config/sequelize");

// 解析 request body:
app.use(koaBody());
// 统一处理response
app.use(require("./middlewares/response"));
// 注册路由中间件
app.use(router.routes());
app.use(router.allowedMethods());
// 监听端口
app.listen(3000, () => {
  console.log("The project starts and runs on port 3000");
});
