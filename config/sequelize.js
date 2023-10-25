const Sequelize = require("sequelize");
// 导入数据库配置
const { db } = require("./db.js");
const sequelize = new Sequelize(db.database, db.user, db.password, {
  logging: function (sql) {
    // logger为log4js的Logger实例
    if (process.env.NODE_ENV.trim() !== "production") {
      console.log(`Sql=======>`, sql);
    }
  },
  port: db.port, //端口
  host: db.host, //主机名
  dialect: "mysql", //数据库类型
  dialectOptions: {
    dateStrings: true, //日期作为字符串返回 并非new Date()对象
    typeCast: true, //允许类型转换
  },
  pool: {
    max: 20, //最大连接数
    min: 1, //最小连接数
    acquire: 60000, //获取连接的超时时间
    idle: 10000, //连接空间超时时间
  },
  timezone: "+08:00", //东八时区
});
sequelize.authenticate().then(() => {
  console.log(`数据库连接成功`);
});
exports.sequelize = sequelize;
