const express = require("express");
const router = express.Router();
const authconroller = require("../controller/auth-controller");
const {signupSchema,loginSchema}=require('../validation/auth-validation');
const validate=require('../middlewares/validate-middleware');
const authMiddleware=require('../middlewares/authMiddleware')
router.route("/").get(authconroller.home);

router.route("/register").post(validate(signupSchema),authconroller.register);
router.route("/login").post(validate(loginSchema),authconroller.login);

router.route("/user").get(authMiddleware,authconroller.user);

module.exports = router;
