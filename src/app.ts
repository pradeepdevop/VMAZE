import dotenv from "dotenv";
dotenv.config({});
import express from "express";
import http from "http";
import apirouter from "./controller";
import "./database";
import expresserrorhandler from "./middleware/expresserrorhandler";

const app = express();
app.use(express.json());
app.use("/api", apirouter);
app.use(expresserrorhandler);

export const server: http.Server = http.createServer(app);
