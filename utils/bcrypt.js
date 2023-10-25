const bcrypt = require("bcrypt");
const saltRounds = 10; // 加密轮数，可以根据实际需求进行调整

// 封装密码加密函数
const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (error) {
    throw new Error("Error hashing password");
  }
};

// 封装密码验证函数
const comparePassword = async (password, hash) => {
  try {
    return await bcrypt.compare(password, hash);
  } catch (error) {
    throw new Error("Error comparing passwords");
  }
};

module.exports = {
  hashPassword,
  comparePassword,
};
