const User = require("../model/UserInfo");

exports.main = (req, res) => {
  res.render("index");
};

exports.axios = (req, res) => {
  let result;
  // ################## practice 1 ################## //
  // for (let i = 0; i < User.getId().length; i++) { // 첨부터 끝까지 서치
  //   if (
  //     req.body.id == User.getId()[i].id &&
  //     req.body.pw == User.getId()[i].pw
  //   ) {
  //     result = true;
  //   }
  // }
  
  // ################## practice 2 ################## //
  let name;
  const list = User.users.split("\n");
  for (let i = 0; i < list.length; i++) {
    // 첨부터 끝까지 서치
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
