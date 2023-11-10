const { routesList } = require("../../controller/routes/index");
const router = require("koa-router")();
// 用户注册
const List = async (ctx, next) => {
  const res = await routesList({ ...ctx.request.body });

  console.log(res);
  ctx.success({
    code: 200,
    success: true,
    message: "获取成功",
    data: res,
  });
};
router.get("/list", List);
module.exports = router;
