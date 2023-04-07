// TODO: 컨트롤러 코드
const User = require("../model/User");

exports.user = (req, res) => {
  res.render("index");
};

exports.signUp = (req, res) => {
  res.render("signup");
};

exports.createUser = (req, res) => {
  User.createUser(req.body, (result) => {
    res.send(result);
  });
};

// exports.toSignin = (req, res) => {};

// exports.infoEdit = (req, res) => {};

// exports.infoDelete = (req, res) => {};

// exports.signIn = (req, res) => {
//   res.render("signin");
// };

// exports.searchUser = (req, res) => {};
