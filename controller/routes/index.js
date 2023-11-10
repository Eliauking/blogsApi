const common = require("../common");
const Routes = require("../../model/routes/routes");
// 路由列表
const routesList = async () => {
  const res = await common.findAll(Routes);
  if (res) {
    return res;
  } else {
    return false;
  }
};
module.exports = {
  routesList,
};
