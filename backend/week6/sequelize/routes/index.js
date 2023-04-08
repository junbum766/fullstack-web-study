const express = require("express");
const controller = require('../controller/Cvisitor')
const router = express.Router();


router.get("/", controller.main);

router.get("/visitor", controller.getVisitors); // 전체 조회

// POST /visitor/write
router.post('/visitor/write', controller.postVisitor); // 하나 추가

// DELETE
router.delete('/visitor/delete', controller.deleteVisitor); // 하나 삭제

// GET /visitor/get
router.get('/visitor/get', controller.getVisitor); // 하나 조회

// PATCH /visitor/edit
router.patch('/visitor/edit', controller.patchVisitor); // 하나 조회

module.exports = router;

