import {
  Schema,
  model,
  PassportLocalSchema,
} from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
import { User } from "../interfaces/IUser";

const UserSchema = new Schema<User>({
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

UserSchema.plugin(passportLocalMongoose);

const UserModel = model<User>("User", UserSchema as PassportLocalSchema);

export default UserModel;
