const jwt = require("jsonwebtoken");
const { JWT_EXPIRESIN, JWT_SECRET } = require("../config/jwt");
// 生成 JWT 函数
const generateToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRESIN });
};
module.exports = {
  generateToken,
};
