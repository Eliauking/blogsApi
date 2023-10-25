module.exports = async (ctx, next) => {
  ctx.success = ({ data = "", message = "" }) => {
    ctx.status = 200;
    ctx.body = {
      success: true,
      code: 1,
      message,
      data,
    };
  };
  ctx.error = ({ error, code, data, message = "" }) => {
    ctx.status = 201;
    ctx.body = {
      error,
      code,
      message,
      data,
    };
  };
  await next();
};
