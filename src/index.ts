import express  from "express"
import { greetings, bye } from "./routes/greetings"

const app = express()

app.use(express.json())

app.get('/hi', greetings)
app.get('/bye', bye)

app.listen(process.env.PORT || 3000, () => {
    console.log('App is running...')
})

