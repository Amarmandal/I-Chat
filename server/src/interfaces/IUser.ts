import { PassportLocalDocument } from "mongoose";
import { Request } from "express";

export interface User extends PassportLocalDocument {
  name: string;
  email: string;
  password: string;
  avatar?: string;
  googleId?: string;
  facebookId?: string;
}

export interface IGetUserAuthInfo extends Request {
    user?: {
        [k: string]: any;
    }
}

