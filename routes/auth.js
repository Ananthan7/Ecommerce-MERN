var express = require("express");
var router = express.Router();
const { signout, signup, signin } = require("../controllers/auth");
const { check, validationResult } = require("express-validator");

/* signup route */
router.post(
  "/signup",
  [
    check("name", "name should be at least 3 char").isLength({ min: 3 }),
    check("email", "email is required").isEmail(),
    check("password", "password should be at least 3 char").isLength({
      min: 3,
    }),
  ],
  signup
);

/* signin route */
router.post("/signin",[
    check("email","email is required to signin").isEmail(),
    check("password", "password is required").isLength({ min: 1 })
], signin)

/* signout route */
router.get("/signout", signout);

module.exports = router;
