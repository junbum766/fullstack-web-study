// TODO: 라우트 설정
const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

router.get("/", controller.user);

router.post("/", controller.signinToUser);

router.get("/signup", controller.signUp);

router.post("/signup", controller.createUser);

router.get("/signin", controller.signIn);

router.post("/signin", controller.searchUser);

router.get("/toIndex", controller.toIndex);

router.get("/destroy", controller.destroySession);


module.exports = router;
