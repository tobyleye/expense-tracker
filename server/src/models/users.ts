import db from "../db"
import cuid from "cuid"
import { model, Schema,Model, Document } from "mongoose"

export interface IUser extends Document {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    verified: boolean;
}

const UserSchema = new Schema({
    _id: { type: String, default: cuid},
    firstName: { type: String, required: true },
    password: { type: String, required: true},
    lastName: { type: String, required: true},
    verified: { type: Boolean, default: false},
    createdAt: { type: Date, default: Date.now}
})

const User: Model<IUser> = db.model('User', UserSchema)

export default User;