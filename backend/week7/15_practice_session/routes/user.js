// TODO: 라우트 설정
const express = require('express');
const controller = require('../controller/Cuser')
const router = express.Router();

router.get('/', controller.user);

router.get('/signup', controller.signUp);

router.post('/signup', controller.createUser);

router.get('/signin', controller.signIn);

router.post('/signin', controller.searchUser);


module.exports = router;