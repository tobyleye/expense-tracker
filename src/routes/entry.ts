import Entry, { IEntry } from "../models/entry"
import { Request, Response, NextFunction } from "express"

 
export default {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const entry: IEntry = new Entry(req.body);
            await entry.save()
            res.json({ data: entry.toJSON() })
        } catch (err) {  
            next(err)
        }
    },
    async get(req: Request, res: Response, next: NextFunction) {
        try {
            const entry = await Entry.findById(req.params.id);
            if (!entry) return next()
            res.json({ data: entry})
        } catch (err) {
            next(err)
        }
    },
    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const entry = await Entry.findOne({ _id: req.params.id})
            if (!entry) {return next()}
            await entry.deleteOne();
            res.send('OK')
        } catch (err) {
            next(err);
        }
    }
}

