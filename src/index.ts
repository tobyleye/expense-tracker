require('dotenv').config()
import express, { ErrorRequestHandler, Request, Response, NextFunction}  from "express"
import { greetings, bye } from "./routes/greetings"
import { register, login } from "./routes/user"
import http from "http"
import cors from "cors"

const app = express()

app.use(express.json())

// enable cors
app.use(cors())

// add routes
app.get('/hi', greetings)
app.get('/bye', bye)
app.post('/register', register)
app.post('/login', login)

app.listen(process.env.PORT || 3000, () => {
    console.log('App is running...')
})

app.use((req, res) => {
    res.send(http.STATUS_CODES[404])
})

// error handler
app.use((err: Error, req: Request, res: Response) => {
    res.status(500).json({ error: 'internal error '})
})

