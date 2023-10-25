// import Sequelize from "sequelize";
const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/sequelize");
// 用户信息表
const Users = sequelize.define("users", {
  id: {
    // 整型
    type: DataTypes.INTEGER(),
    // 是否为主键
    primaryKey: true,
    // 自动填充
    autoIncrement: true,
    // 描述
    comment: "自增主键",
  },
  account: {
    // 整型
    type: DataTypes.STRING(),
    // 是否可以为空
    allowNull: false,
    // 默认值
    // defaultValue: 0,
    comment: "账户",
  },
  password: {
    // 整型
    type: DataTypes.STRING(),
    // 是否可以为空
    allowNull: false,
    // 默认值
    // defaultValue: 0,
    comment: "密码",
  },
  createdAt: {
    // 整型
    type: DataTypes.DATE(),
    // 是否可以为空
    allowNull: true,
    // 默认值
    // defaultValue: 0,
    comment: "创建时间",
  },
  updatedAt: {
    // 整型
    type: DataTypes.DATE(),
    // 是否可以为空
    allowNull: true,
    // 默认值
    // defaultValue: 0,
    comment: "修改时间",
  },
});

module.exports = Users;
