require('dotenv').config()
import express, { Request, Response } from "express"
import { greetings, bye } from "./routes/greetings"
import { register, login } from "./routes/user"
import entry from "./routes/entry"
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
app.post('/entries', entry.create)

app.route('/entries/:id')
  .get(entry.get)
  .delete(entry.delete)

app.use((req, res) => {
  res.send(http.STATUS_CODES[404])
})

// error handler
app.use((err: Error, req: Request, res: Response) => {
  res.status(500).json({ error: 'internal error ' })
})

app.listen(process.env.PORT || 3000, () => {
  console.log('App is running...')
})
