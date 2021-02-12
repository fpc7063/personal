import express from "express"
//import cors from "cors"
//import helmet from "helmet"
import morgan from "morgan"
import defaultRouter from './routes/default_router'
import Logger from './log/logger'
const logger = new Logger()
import HttpErrorMiddleware from './middleware/httpError'
const httpErrorMiddleware = new HttpErrorMiddleware()


require('dotenv').config()
const port = process.env.PORT || "3001"




const app = express()

//app.use(helmet())
app.use(morgan('dev'))
//app.use(cors())
app.use(express.json())
app.use(httpErrorMiddleware.defaultError)
app.use(defaultRouter)


app.use('*', httpErrorMiddleware.error404)


app.listen(port, () => {
    logger.debug("Server started on PORT:", port)
})