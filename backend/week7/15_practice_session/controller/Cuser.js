// TODO: 컨트롤러 코드
const models = require("../models");

exports.user = (req, res) => {
  res.render("index", { id: req.session.name });
};

exports.signinToUser = (req, res) => {
  console.log("userId >>> ", req.body.userid);
  req.session.name = req.body.userid;
  console.log("session >>>", req.session.name);
  res.render("index", { id: req.session.name });
};

exports.signUp = (req, res) => {
  res.render("signup");
};

exports.createUser = (req, res) => {
  console.log(req.body.id);
  models.User.findAll({
    where: {
      userid: req.body.id,
    },
  }).then((result) => {
    console.log("중복 확인", result);
    if (result.length == 0) {
      models.User.create({
        userid: req.body.id,
        pw: req.body.pw,
        name: req.body.name,
      }).then((result) => {
        console.log("create : ", result);
        res.send(result);
      });
    } else {
      res.send("exist");
    }
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

exports.destroySession = (req, res) => {
  const userSession = req.session.name;
  if (userSession !== undefined) {
    req.session.destroy((err) => {
      if (err) {
        throw err;
      }
      console.log("...", req.query.des);
      res.redirect("/user");
    });
  } else {
    res.send(
      `<script>alert('잘못된 접근입니다.');document.location.href = '/user'</script>`
    );
  }
};

exports.toIndex = (res, req) => {
  console.log(req.session);
  res.redirect("/user");

  // res.render("index", { id: undefined });
};
