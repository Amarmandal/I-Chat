import { Schema, model } from "mongoose";

interface User {
    name: string;
    email: string;
    password: string;
    avatar?: string;
}

const UserSchema = new Schema<User>({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    avatar: String
})

const UserModel = model<User>('User', UserSchema);

export default UserModel;