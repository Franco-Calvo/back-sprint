import userRouter from "./users.js";
import authorRouter from "./authors.js"
import createError from "http-errors";

import express from "express";
let router = express.Router();

function authorIsActive(req, res, next) {
  //Esto viene de passport
  req.user = {
    is_author: true,
    is_active: true,
  };

  //Tener otro middleware o dentro del mismo verificar si es author
  if (req.user.is_author) {
    if (req.user.is_active) {
      next();
    }
  }

  function isAuthor(req, res, next) {
    req.user = {
      is_author: true,
      is_active: true,
    };

    if (req.user.is_author) {
      next();
    }

    return res.status(400).json({
      message: "Bad request",
    });
  }
}

/* GET home page. */
router.get(
  "/",
  /*passport.authenticate()*/ authorIsActive,
  function (req, res, next) {
    // try {
    //   let user;

    //   if(user){
    //     return res.status(200).json({
    //       user: user
    //     })
    //   }
    //   return next(createError(404, 'Usuario no encontrado'))
    // } catch (err){
    //   next(createError(500, 'Algo salió mal'))
    // }

    res.status(200).json({
      message: "Llegaste hasta el controlador",
    });
  }
);

router.use("/users", userRouter);
router.use("/api/authors", authorRouter);

export default router;
