import { Request, Response } from "express"

function getNameFromQuery(req: Request): string {
    const name = (req.query.name as string)?.trim() || 'John doe';
    return name;
}

export const greetings = function (req: Request, res: Response) {
    const name = getNameFromQuery(req)
    res.json({
        message: `Hello, ${name}`
    })
}

export const bye = function(req: Request, res: Response) {
    const name = getNameFromQuery(req)
    res.json({
        message: `Bye, ${name}. Hate to see you go`
    })
}
