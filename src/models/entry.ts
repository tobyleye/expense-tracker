import db from "../db"
import cuid from "cuid"
import { model, Schema,Model, Document } from "mongoose"

export interface IEntry extends Document {
    title: string;
    description: string;
    amount: number;  
    type:  'Expense'| 'Income';
}

const EntrySchema = new Schema({
    _id: { type: String, default: cuid},
    userId: { type: String, required: true },
    title: { type: String, required: true},
    description: { type: String, default: null},
    amount: { type: Number, required: true},
    type: { type: String, enum: ['Expense', 'Income'], default: 'Expense'},
    createdAt: { type: Date, default: Date.now}
})

const Entry: Model<IEntry>  = db.model('Entry', EntrySchema)

export default Entry