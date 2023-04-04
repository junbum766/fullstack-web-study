const User = require("../model/UserInfo");

exports.main = (req, res) => {
  res.render("index");
};

exports.axios = (req, res) => {
  let result;
  // for (let i = 0; i < User.getId().length; i++) { // 첨부터 끝까지 서치
  //   if (
  //     req.body.id == User.getId()[i].id &&
  //     req.body.pw == User.getId()[i].pw
  //   ) {
  //     result = true;
  //   }
  // }
  let name;
  const list = User.users.split("\n");
  for (let i = 0; i < list.length; i++) {
    // 첨부터 끝까지 서치
    console.log(list[i].split("//")[0], "aaa", list[i].split("//")[1], "aaa");
    console.log(req.body.id, req.body.pw);
    if (
      req.body.id == list[i].split("//")[0] &&
      req.body.pw == list[i].split("//")[1]
    ) {
      result = true;
      name = list[i].split("//")[2];
    } else {
      console.log("no");
    }
  }

  res.send({ result: result, name: name });
};
