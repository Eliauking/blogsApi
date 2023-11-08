module.exports = async (ctx, next) => {
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
