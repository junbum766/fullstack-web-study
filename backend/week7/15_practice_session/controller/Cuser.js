// TODO: 컨트롤러 코드
const models = require("../models");

exports.user = (req, res) => {
  console.log('user Id >>> ', req.query.userid);
  req.session.name = req.query.userid;
  console.log('session >>>', req.session.name)
  res.render("index", {id: req.session.name});
};

exports.signUp = (req, res) => {
  res.render("signup");
};

exports.createUser = (req, res) => {
  console.log(req.body.id);
  models.User.create({
    userid: req.body.id,
    pw: req.body.pw,
    name: req.body.name,
  }).then((result) => {
    console.log("create : ", result);
    res.send(result);
  });
};

exports.signIn = (req, res) => {
  res.render("signin");
};

exports.searchUser = (req, res) => {
  models.User.findAll({
    where: {
      userid: req.body.id,
      pw: req.body.pw,
    },
  }).then((result) => {
    console.log("findAll : ", result);
    if (result.length == 0) {
      res.send(false);
    } else {
      res.send(true);
    }
  });
};

// exports.session = (req, res) => {
//   models.User.findOne({
//     where: { userid: req.body.userid },
//   }).then((result) => {
//     console.log("findOne : ", result);
//     res.render("profile", { result: result });
//   });
// };
// exports.session = (req, res) => {
//   console.log("findOne : ", req.body.userid);
//   res.render("index", { id: req.body.userid });
// };
