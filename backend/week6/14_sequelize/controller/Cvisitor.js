// models 변수 값 = models/index.js에서 export 한 db 객체
const models = require("../models"); // 알아서 index.js를 찾아감

// (1) GET / => localhost:PORT/
exports.main = (req, res) => {
  res.render("index");
};

// (2) GET /visitor => localhost:PORT/visitor
exports.getVisitors = (req, res) => {
  // select * from visitor; 수행
  models.Visitor.findAll().then((result) => {
    console.log("findAll >>", result);
    res.render("visitor", { data: result });
  });
};

// (3) POST /visitor/write
exports.postVisitor = (req, res) => {
  models.Visitor.create({
    name: req.body.name,
    comment: req.body.comment,
  }).then((result) => {
    console.log("create >>", result);
    res.send(result);
  });
};

// (4) DELETE /visitor/delete
exports.deleteVisitor = (req, res) => {
  // delete from visitor where id=${id}
  models.Visitor.destroy({
    where: { id: req.body.id },
  }).then(() => {
    res.end();
  });
};

// (5) GET /visitor/get
exports.getVisitor = (req, res) => {
  models.Visitor.findOne({
    where: { id : req.query.id },
  }).then((result) => {
    res.send(result);
  })
};

// (6) EDIT /visitor/edit
exports.patchVisitor = (req, res) => {
  models.Visitor.update({
    name: req.body.name,
    comment: req.body.comment,
  },
  {
    where: {
      id: req.body.id,
    }
  }).then((result) => {
    console.log('update >>', result);
  })
};
