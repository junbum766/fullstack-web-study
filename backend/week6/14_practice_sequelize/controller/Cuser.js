// TODO: 컨트롤러 코드
const models = require("../models");

exports.user = (req, res) => {
  res.render("index");
};

exports.signUp = (req, res) => {
  res.render("signup");
};

exports.createUser = (req, res) => {
  // User.createUser(req.body, (result) => {
  //   res.send(result);
  // });
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

exports.toProfile = (req, res) => {
  // console.log("profile 정보: ", req.body);
  // User.toProfile(req.body.userid, (result) => {
  //   res.render("profile", { result: result[0] });
  // });
  models.User.findOne({
    where: { userid: req.body.userid },
  }).then((result) => {
    console.log("findOne : ", result);
    res.render("profile", { result: result });
  });
};

exports.infoEdit = (req, res) => {
  // User.infoEdit(req.body, (result) => {
  //   res.send(result); // true
  //   // res.end(); // 딱히 보낼 데이터가 없으면 이렇게 끝내도 된다.
  // });
  models.User.update(
    {
      userid: req.body.id,
      pw: req.body.pw,
      name: req.body.name,
    },
    {
      where: {
        userid: req.body.id,
      },
    }
  ).then((result) => {
    console.log("update : ", result);
    res.end();
  });
};

exports.infoDelete = (req, res) => {
  // User.infoDelete(req.body.id, (result) => {
  //   res.send(result); // true
  // });
  models.User.destroy({
    where: { userid: req.body.id },
  }).then(() => {
    res.end();
  });
};

exports.signIn = (req, res) => {
  res.render("signin");
};

exports.searchUser = (req, res) => {
  // console.log("로그인 정보: ", req.body);
  // User.searchUser(req.body, (result) => {
  //   console.log("모든 회원 정보: ", result);
  //   let login = false;
  //   for (let i = 0; i < result.length; i++) {
  //     if (req.body.id == result[i].userid && req.body.pw == result[i].pw) {
  //       login = true;
  //       res.send(login);
  //       return;
  //     }
  //   }
  //   res.send(login);
  // });
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

// 방명록

exports.getVisitors = (req, res) => {
  models.Visitor.findAll().then((result) => {
    console.log("findAll >>", result);
    res.render("visitor", { data: result });
  });
};

// (3) POST user/visitor/write
exports.postVisitor = (req, res) => {
  models.Visitor.create({
    name: req.body.name,
    comment: req.body.comment,
  }).then((result) => {
    console.log("create >>", result);
    res.send(result);
  });
};

// (4) DELETE user/visitor/delete
exports.deleteVisitor = (req, res) => {
  // delete from visitor where id=${id}
  models.Visitor.destroy({
    where: { id: req.body.id },
  }).then(() => {
    res.end();
  });
};

// (5) GET user/visitor/get
exports.getVisitor = (req, res) => {
  models.Visitor.findOne({
    where: { id: req.query.id },
  }).then((result) => {
    console.log("start edit!");
    res.send(result);
  });
};

// (6) EDIT user/visitor/edit
exports.patchVisitor = (req, res) => {
  models.Visitor.update(
    {
      name: req.body.name,
      comment: req.body.comment,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  ).then((result) => {
    console.log("update >>", result);
    res.end();
  });
};
