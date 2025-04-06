import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app=express()




app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// as we know that we will get data from anywhere but it doesnot mean that we have to receive unlimited data and all for this
// we need to make setting for how much data we can allow to take in json or any 

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))

app.use(express.static("public"))
app.use(cookieParser())

export {app}