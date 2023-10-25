const commen = require("../common");
const Users = require("../../model/user/users");
const { hashPassword, comparePassword } = require("../../utils/bcrypt");
// 创建用户
const createUser = async ({ account, password }) => {
  // 查询是否存在该用户
  const res = await commen.findOne(Users, { account });
  if (res) {
    return;
  } else {
    const { dataValues } = await commen.create(Users, {
      account,
      password: await hashPassword(password),
    });
    return dataValues;
  }
};
// 登录
const loginUser = async ({ account, password }) => {
  //查询用户是否匹配
  const res = await commen.findOne(Users, { account });
  if (res) {
    //查询密码是否匹配
    const match = await comparePassword(password, res.dataValues.password);
    if (match) {
      return res.dataValues;
    }
  } else {
    return;
  }
};

module.exports = {
  createUser,
  loginUser,
};
