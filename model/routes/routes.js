// import Sequelize from "sequelize";
const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/sequelize");
// 路由信息表
const Routes = sequelize.define("routes", {
  id: {
    type: DataTypes.INTEGER(),
    // 是否为主键
    primaryKey: true,
    // 自动填充
    autoIncrement: true,
    // 描述
    comment: "自增主键",
  },
  path: {
    type: DataTypes.STRING(),
    // 是否可以为空
    allowNull: false,
    // 默认值
    // defaultValue: 0,
    comment: "路径",
  },
  name: {
    type: DataTypes.STRING(),
    // 是否可以为空
    allowNull: false,
    // 默认值
    // defaultValue: 0,
    comment: "路由名称",
  },
  component: {
    type: DataTypes.STRING(),
    // 是否可以为空
    allowNull: false,
    // 默认值
    // defaultValue: 0,
    comment: "组件地址",
  },
  isDynamic: {
    type: DataTypes.STRING(),
    // 是否可以为空
    allowNull: false,
    // 默认值
    // defaultValue: 0,
    comment: "是否为动态路由",
  },
  parentId: {
    type: DataTypes.STRING(),
    // 是否可以为空
    allowNull: false,
    // 默认值
    // defaultValue: 0,
    comment: "父级路由ID",
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

module.exports = Routes;
