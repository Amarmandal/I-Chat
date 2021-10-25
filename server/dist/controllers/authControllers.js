"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateWithGoogle = void 0;
const authenticateWithGoogle = (req, res) => {
    var _a;
    if (!req.user) {
        return res.status(404).json({ message: "User not authorize" });
    }
    return res
        .cookie("test", "test", { maxAge: 1000 * 60 * 5 })
        .redirect(`http://localhost:3000/signup?googleId=${(_a = req.user) === null || _a === void 0 ? void 0 : _a.value.googleId}`);
};
exports.authenticateWithGoogle = authenticateWithGoogle;
