import express from "express";
import { createUser } from "../controllers/user.controller";

const router = express();

router.post("/new", createUser);

export default router;
