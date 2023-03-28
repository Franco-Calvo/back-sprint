import User from "../../models/User.js";
import Crypto from "crypto";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import transporter from "../../config/verificationMail.js"
import { clearScreenDown } from "readline";

const controller = {
  sign_up: async (req, res, next) => {
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      photo: req.body.photo,
      is_online: false,
      is_admin: false,
      is_author: false,
      is_company: false,
      is_verified: false,
      verify_code: Crypto.randomBytes(10).toString("hex"),
      password: bcryptjs.hashSync(req.body.password, 10),
    }
    try {
      await User.create(user)


      const message = {
        from: process.env.EMAIL_MAILING,
        to: user.email,
        subject: "User Validation",
        text: "Validate your user by clicking on the following link",
        html: `<p><br>Welcome to Minga Project ${user.name} <br>
             <br> Discover a manga, have fun and enjoy <br> 
             Press the following link to validate your user: <a href="https://minga-0gy1.onrender.com/verify-account/${user.verify_code}">Click here</a></p> 
             <p style="color: grey;">--<br>
             Kind regards,<br>
             Minga's team<br>
             mingaproject2023@gmail.com<br>
             www.minga.com.ar<br>
             <br>
             Thanks for using our app! If you have any questions or suggestions, please do not hesitate to contact us.<br>
             <br>
             Minga Project</p>`
      }

      await transporter.sendMail(message)

      req.body.success = true
      req.body.sc = 201
      req.body.data = 'User created'
      return res.status(200).json({ message: "User registered!" });

    } catch (error) {
      next(error)
    }
  },

  verifyCode: async (req, res, next) => {
    const { verify_code } = req.params
    try {
      const user = await User.find({ verify_code: verify_code });
      if (user.length > 0) {
        const userId = user[0]._id;
        await User.findOneAndUpdate(
          { _id: userId },
          { is_verified: true },
          { new: true }
        )
        return res.status(200).json({ message: "User successfully verified!!!" });
      } else {
        return res.status(400).json({ message: "Failed to verify user!!!" });
      }
    } catch (error) {
      next(error)
    }
  },

  sign_in: async (req, res, next) => {
    try {
      let user = await User.findOneAndUpdate(
        { email: req.user.email }, //parametro de busqueda
        { is_online: true }, //parámetro a modificar
        { new: true } //para que devuelva el objeto modificado
      );
      user.password = null; //ProtegerContraseña

      const token = jsonwebtoken.sign({ id: user._id }, process.env.SECRET, {
        expiresIn: 60 * 60 * 24 * 7,
      });
      return res.status(200).json({
        succes: true,
        message: "Logged in user!",
        user,
        token,
      });
    } catch (error) {
      next(error);
    }
  },

  sign_out: async (req, res, next) => {
    const { email } = req.user;

    try {
      await User.findOneAndUpdate(
        { email },
        { is_online: false },
        { new: true }
      );

      return res.status(200).json({
        succes: true,
        message: "Offline user!",
      });
    } catch (error) {
      next(error);
    }
  },

  sign_in_token: async (req, res, next) => {
    try {
      let user = await User.findOneAndUpdate(
        { email: req.user.email }, //parametro de busqueda
        { is_online: true }, //parámetro a modificar
        { new: true } //para que devuelva el objeto modificado
      );
      const token = res.token;
      user.password = null;
      return res.status(200).json({
        succes: true,
        message: "Logged in user!",
      });
    } catch (error) {
      next(error);
    }
  },
  get_user: async (req, res, next) => {
    try {
      let user = await User.findOne(
        { email: req.user.email }
      );
      user.password = null;
      return res.status(200).json({
        succes: true,
        data: user,
      });
    } catch (error) {
      next(error);
    }
  },
};

export default controller;
