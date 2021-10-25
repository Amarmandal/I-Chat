"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadAuthStrategy = void 0;
const UserModel_1 = __importDefault(require("../models/UserModel"));
const passport_1 = __importDefault(require("passport"));
const passport_google_oauth20_1 = require("passport-google-oauth20");
const loadAuthStrategy = () => {
    passport_1.default.use(UserModel_1.default.createStrategy());
    passport_1.default.use(new passport_google_oauth20_1.Strategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRETS,
        callbackURL: "http://localhost:8000/api/auth/google/callback",
    }, (accessToken, refreshToken, profile, cb) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const update = {
            email: profile._json.email,
            username: `${(_a = profile.name) === null || _a === void 0 ? void 0 : _a.familyName}-${profile.id}`,
            avatar: profile._json.picture,
        };
        const options = {
            upsert: true,
            new: true,
            rawResult: true,
        };
        const user = yield UserModel_1.default.findOneAndUpdate({ googleId: profile.id }, update, options);
        if (!user) {
            return cb(new Error("Something went wrong"));
        }
        return cb(null, user);
    })));
};
exports.loadAuthStrategy = loadAuthStrategy;
