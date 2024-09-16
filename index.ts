import express from 'express'
import cors from 'cors'
import { corsOptions } from './utils/cors'
import helmet from 'helmet'
import { limiter } from './utils/limiter'
import 'dotenv/config'
import router from './routes'

const app = express()

app.use(cors(corsOptions))
app.use(helmet())
app.use(limiter)
app.listen(process.env.PORT, () =>
    console.log(`Running on port ${process.env.PORT}`)
)

app.use('/', express.json(), router)
