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
    ignoreUndefined: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

//-- assign route
server.get("/", async (req, res) => {
  const {
    search = "react",
    employment_type,
    order_by,
    page = 1,
    limit = 50,
    remote,
  } = req.query;
  const filterOptions = {
    $and: [
      {
        $or: [
          { role: { $regex: search, $options: "i" } },
          { keywords: search },
        ],
      },
      { employment_type },
      { remote },
    ],
  };
  const posts = await Post.find(filterOptions)
    .limit(limit * 1) //limit search result
    .skip((page - 1) * limit) // skip docs
    .sort({ date: order_by === "date" && "asc" }); // sort order
  // count total posts
  const count = await Post.countDocuments(filterOptions);
  // response
  res.status(200).json({
    count: posts.length,
    page,
    totalPages: Math.ceil(count / limit),
    results: posts,
  });
});
server.use("/post/", postRoute);
// `server started on ${chalk.bgYellow.bold("PORT")} ${chalk.bgRed.bold(PORT)}`

// port listener
server.set("port", process.env.PORT || 5000);

server.listen(server.get("port"), function () {
  console.log("Node app is running at localhost:" + server.get("port"));
});
