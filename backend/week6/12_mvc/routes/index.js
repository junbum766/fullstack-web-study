const express = require("express");
const controller = require('../controller/Cmain')
const router = express.Router();
// controller = {
//     main : () => {} //함수,
//     comments : () => {} //함수
// }

// const app = express();
// app.get();

router.get("/", controller.main);
router.get("/comments", controller.comments);
router.get('/comment/:id', controller.comment);

module.exports = router;

// router.post();
