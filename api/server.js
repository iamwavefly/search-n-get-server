// import packages
import "babel-polyfill";
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import chalk from "chalk";
import dotenv from "dotenv";
import cors from "cors";

import Post from "./models/Post.js";
// -- routes
import postRoute from "./routes/post.js";
// -- private keys
import { mongoURI } from "./config/keys.js";
import axios from "axios";
// init
const server = express();

//middleware
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(morgan("dev"));
server.use(cors());
// -- env
const envConfig = dotenv.config();
if (envConfig.error) {
  throw envConfig.error;
}
//-- connect to MongoDB
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

//-- assign route
server.get("/", async (req, res) => {
  const { search, employment_type, order_by, page } = req.query;
  const response = await axios.get(
    `https://findwork.dev/api/jobs/?search=${
      search || `Java`
    }&employment_type=${employment_type || "full time"}&order_by=${
      order_by || "relevance"
    }&page=${page || "1"}`,
    {
      headers: {
        Authorization: `Token 3df821f44d18aea13176e8be288cd0de2cc0d652`,
      },
    }
  );
  res.json(response.data);
});
server.use("/post/", postRoute);
// `server started on ${chalk.bgYellow.bold("PORT")} ${chalk.bgRed.bold(PORT)}`

// port listener
server.set("port", process.env.PORT || 5000);

server.listen(server.get("port"), function () {
  console.log("Node app is running at localhost:" + server.get("port"));
});
