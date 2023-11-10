const JWT_SECRET = "Crazy Thursday V Me 50"; //密钥
const JWT_EXPIRESIN = "5d"; //过期时间
const JWT_WHITELIST = ["/user/login", "/user/register", "/routes/list"]; //白名单
module.exports = {
  JWT_SECRET,
  JWT_EXPIRESIN,
  JWT_WHITELIST,
};
