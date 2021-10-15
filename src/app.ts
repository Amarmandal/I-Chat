import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import { connectDB } from "./config/database";

const app = express();
const port = process.env.PORT || 8000;

//connect to the database
connectDB();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App Running on ${port}`);
});
