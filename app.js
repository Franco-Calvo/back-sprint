import createError from "http-errors";
import express from "express";
import path from "path";
import "dotenv/config.js";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { __dirname } from "./utils.js";
import indexRouter from "./routes/index.js";
import "./config/database.js"; //requiero la configuracion de la db

let app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

export default app;
