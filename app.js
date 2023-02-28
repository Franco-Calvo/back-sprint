import createError from "http-errors";
import express from "express";
import path from "path";
import "dotenv/config.js";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { __dirname } from "./utils.js";
import indexRouter from "./routes/index.js";
import cors from "cors";
import axios from "axios";
import "./config/database.js"; //requiero la configuracion de la db
import { create } from "domain";
import { errorHandler } from "./middleware/error.js";
let app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");



//middlewars
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

//routes

app.use("/", indexRouter);

function errorNotFound(req, res, next){
  next(createError(404, 'La ruta no existe'))
}

app.use(errorNotFound)

app.use(errorHandler)


export default app;
