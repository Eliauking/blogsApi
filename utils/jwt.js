const jwt = require("jsonwebtoken");

// 生成 JWT 函数
const generateToken = (payload) => {
  return jwt.sign(payload, "Crazy Thursday V Me 50", { expiresIn: "5d" });
};
module.exports = {
  generateToken,
};
