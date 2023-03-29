import "dotenv/config.js";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { __dirname } from "./utils.js";
import indexRouter from "./routes/index.js";
import cors from "cors";
import "./config/database.js";
import { errorHandler } from "./middleware/error.js";
import { errorNotFound } from "./middleware/error.js";
import bodyParser from "body-parser";
import morgan from "morgan";

let app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//middlewars
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(morgan("dev"));

//routes
app.use("/", indexRouter);
app.use(errorNotFound);
app.use(errorHandler);
export default app;
