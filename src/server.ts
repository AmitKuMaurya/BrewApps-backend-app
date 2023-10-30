import express,{Response, Application} from "express";
import { dbConnection } from "./config/database";
import { Server } from "http";

const app : Application = express();
const PORT = 5050;

app.get("/home",(res : Response)=>{
    res.send("Welcome home.")
})

const server : Server = app.listen(PORT, async()=>{
    await dbConnection();
    console.log({msg : `Server is Listing on Port ${PORT}`})
})

