import express from "express";
import validator from "../middleware/validator.js";
import schema from "../schemas/users.js";
import controller from "../controllers/auth/auth.js";
import accountExistsSignUp from "../middleware/accountExistsSignUp.js";
import accountExistsSignIn from "../middleware/accountExistsSignIn.js";
import accountHasBeenVerified from "../middleware/accountHasBeenVerified.js";
import passwordIsOk from "../middleware/passwordIsOk.js";
import passport from "../middleware/passport.js";
import schema_signin from "../schemas/signin.js";

const { sign_up, sign_in, sign_out, sign_in_token } = controller;

let router = express.Router();

router.post("/signup", validator(schema), accountExistsSignUp, sign_up);
router.post(
  "/signin",
  validator(schema_signin),
  accountExistsSignIn,
  accountHasBeenVerified,
  passwordIsOk,
  sign_in
);
router.post(
  "/signout",
  passport.authenticate("jwt", { session: false }),
  sign_out
);
router.post(
  "/signintoken",
  passport.authenticate("jwt", { session: false }),
  sign_in_token
);

// module.exports = router;
export default router;
