import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import cors from "cors";
import { connectDB } from "./config/database";
import passport from "passport";
import cookieParser from "cookie-parser";

//importing routes
import authRoutes from "./routes/authRoutes";
import { loadAuthStrategy } from "./middlewares/authStrategy";


const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use(passport.initialize());
app.use(cookieParser());

//connect to the database
connectDB();

loadAuthStrategy();

//using routes
app.use("/api", authRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// app.get(
//   "/auth/google/secrets",
//   passport.authenticate("google", { failureRedirect: "/login", session: false }),
//   function (req: Request, res: Response) {
//     // Successful authentication, redirect to secrets.
//     //authenticated user details
//     // console.log(req.user);
//     // res.redirect("/secrets");
    
//   }
// );

app.get("/test/cookie", (req: Request, res: Response) => {
  console.log(req.cookies);
})

app.listen(port, () => {
  console.log(`App Running on ${port}`);
});
