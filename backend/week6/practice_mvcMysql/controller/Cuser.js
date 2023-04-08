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

exports.toProfile = (req, res) => {
  console.log('profile 정보: ', req.body);

  User.toProfile(req.body.userid, (result) => {
    res.render("profile", {result: result[0]});
  })
};

exports.infoEdit = (req, res) => {
  User.infoEdit(req.body, (result) => {
    res.send(result); // true
    // res.end(); // 딱히 보낼 데이터가 없으면 이렇게 끝내도 된다.
  });
};

exports.infoDelete = (req, res) => {
  User.infoDelete(req.body.id, (result) => {
    res.send(result); // true
  });
};

exports.signIn = (req, res) => {
  res.render("signin");
};

exports.searchUser = (req, res) => {
  console.log("로그인 정보: ", req.body);

  User.searchUser(req.body, (result) => {
    console.log("모든 회원 정보: ", result);

    let login = false;
    for (let i = 0; i < result.length; i++) {
      if (req.body.id == result[i].userid && req.body.pw == result[i].pw) {
        login = true;
        res.send(login);
        return;
      } 
    }
    res.send(login);
  });
};
