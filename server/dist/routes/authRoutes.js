"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const authControllers_1 = require("../controllers/authControllers");
const router = (0, express_1.Router)();
router.get("/auth/google", passport_1.default.authenticate("google", { scope: ["profile", "email"] }));
router.get("/auth/google/callback", passport_1.default.authenticate("google", {
    failureRedirect: "/login",
    session: false,
}), authControllers_1.authenticateWithGoogle);
router.get("/auth/test", (req, res) => {
    res.status(200).json({ userInfo: req.user });
});
exports.default = router;
