const { createUser, loginUser } = require("../../controller/users/index");
const { generateToken } = require("../../utils/jwt");
const router = require("koa-router")();
// 用户注册
const register = async (ctx, next) => {
  const res = await createUser({ ...ctx.request.body });

  console.log(`res========>`, res);
  if (res) {
    ctx.success({
      code: 200,
      success: true,
      message: "创建成功",
      data: {
        ...res,
      },
    });
  } else {
    ctx.error({
      code: 201,
      success: false,
      message: "该用户已存在",
      data: {
        ...res,
      },
    });
  }
};
// 用户登录
const login = async (ctx, next) => {
  const res = await loginUser({ ...ctx.request.body });

  if (res) {
    const token = generateToken(res);
    ctx.success({
      code: 200,
      success: true,
      message: "欢迎回来",
      data: {
        ...res,
        token,
      },
    });
  } else {
    ctx.error({
      code: 201,
      success: false,
      message: "请检查用户名或密码",
      data: {
        ...res,
      },
    });
  }
};
router.post("/register", register);
router.post("/login", login);
module.exports = router;
