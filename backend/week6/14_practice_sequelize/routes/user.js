// TODO: 라우트 설정
const express = require('express');
const controller = require('../controller/Cuser')
const router = express.Router();

router.get('/', controller.user);

router.get('/signup', controller.signUp);

router.post('/signup', controller.createUser);

router.post('/profile', controller.toProfile);

router.post('/profile/edit', controller.infoEdit);

router.post('/profile/delete', controller.infoDelete);

router.get('/signin', controller.signIn);

router.post('/signin', controller.searchUser);

// 방명록

router.get('/visitor', controller.getVisitors);

// POST /visitor/write
router.post('/visitor/write', controller.postVisitor); // 하나 추가

// DELETE
router.delete('/visitor/delete', controller.deleteVisitor); // 하나 삭제

// GET /visitor/get
router.get('/visitor/get', controller.getVisitor); // 하나 조회

// PATCH /visitor/edit
router.patch('/visitor/edit', controller.patchVisitor); // 하나 조회

module.exports = router;