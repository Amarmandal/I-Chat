"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadPassport = void 0;
const UserModel_1 = __importDefault(require("../models/UserModel"));
const passport_1 = __importDefault(require("passport"));
const passport_google_oauth20_1 = require("passport-google-oauth20");
const loadPassport = () => {
    passport_1.default.use(UserModel_1.default.createStrategy());
    passport_1.default.use(new passport_google_oauth20_1.Strategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRETS,
        callbackURL: "http://localhost:8000/auth/google/secrets",
    }, function (accessToken, refreshToken, profile, cb) {
        UserModel_1.default.findOneAndUpdate({ googleId: profile.id }, { email: profile._json.email }, {
            upsert: true,
            new: true,
            rawResult: true,
        }, function (err, user) {
            if (err) {
                return cb(err);
            }
            else {
                if (user) {
                    return cb(null, user);
                }
            }
        });
    }));
};
exports.loadPassport = loadPassport;
