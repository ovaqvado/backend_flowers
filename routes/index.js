const Router = require("express");
const router = new Router();
const flowerRouter = require("./flowerRouter");
const typeRouter = require("./typeRouter");
const userRouter = require("./userRouter");

router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/flower", flowerRouter);

module.exports = router;
