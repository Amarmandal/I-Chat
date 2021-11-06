"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const passport_local_mongoose_1 = __importDefault(require("passport-local-mongoose"));
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        trim: true,
    },
    avatar: String,
    googleId: {
        type: String,
        trim: true,
    },
    facebookId: {
        type: String,
        trim: true,
    },
});
UserSchema.plugin(passport_local_mongoose_1.default);
const UserModel = (0, mongoose_1.model)("User", UserSchema);
exports.default = UserModel;
