"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const database_1 = require("./config/database");
const passport_1 = __importDefault(require("passport"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
//importing routes
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const authStrategy_1 = require("./middlewares/authStrategy");
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(passport_1.default.initialize());
app.use((0, cookie_parser_1.default)());
//connect to the database
(0, database_1.connectDB)();
(0, authStrategy_1.loadAuthStrategy)();
//using routes
app.use("/api", authRoutes_1.default);
app.get("/", (req, res) => {
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
app.get("/test/cookie", (req, res) => {
    console.log(req.cookies);
});
app.listen(port, () => {
    console.log(`App Running on ${port}`);
});
