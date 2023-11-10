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

  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = {
      code: err.code || 500,
      message: err.message || "Internal Server Error",
    };
  }
};
