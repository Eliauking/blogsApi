// const NODE_ENV = process.env.NODE_ENV.trim();
let db = {};
db = {
  database: 'blogs',
  user: 'root',
  password: 'ljl990907',
  port: '3306',
  host: '122.51.53.84'
};
// if (NODE_ENV === "development") {
//   db = {
//     database: "blogs",
//     user: "root",
//     password: "root",
//     port: "3306",
//     host: "122.51.53.84",
//   };
// } else if (NODE_ENV === "production") {
//   db = {
//     database: "blogs",
//     user: "root",
//     password: "root",
//     port: "3306",
//     host: "122.51.53.84",
//   };
// }
module.exports = { db };
