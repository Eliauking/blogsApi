module.exports = async (ctx, next) => {
  ctx.success = ({ data = "", message = "" }) => {
    ctx.body = {
      success: true,
      code: 200,
      message,
      data,
    };
  };

  ctx.error = ({ error, code, data, message = "" }) => {
    ctx.body = {
      success: false,
      error,
      code,
      message,
      data,
    };
  };

  console.log(`ctx=========>`, ctx.status);
  await next();
};
