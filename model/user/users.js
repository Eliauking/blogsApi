// import Sequelize from "sequelize";
const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/sequelize");
// 用户信息表
const Users = sequelize.define("users", {
  id: {
    type: DataTypes.INTEGER(),
    // 是否为主键
    primaryKey: true,
    // 自动填充
    autoIncrement: true,
    // 描述
    comment: "自增主键",
  },
  account: {
    type: DataTypes.STRING(),
    // 是否可以为空
    allowNull: false,
    // 默认值
    // defaultValue: 0,
    comment: "账户",
  },
  password: {
    type: DataTypes.STRING(),
    // 是否可以为空
    allowNull: false,
    // 默认值
    // defaultValue: 0,
    comment: "密码",
  },
  createdAt: {
    type: DataTypes.DATE(),
    // 是否可以为空
    allowNull: true,
    // 默认值
    // defaultValue: 0,
    comment: "创建时间",
    field: "created_at", // 指定列名
  },
  updatedAt: {
    type: DataTypes.DATE(),
    // 是否可以为空
    allowNull: true,
    // 默认值
    // defaultValue: 0,
    comment: "修改时间",
    field: "updated_at", // 指定列名
  },
});

module.exports = Users;
