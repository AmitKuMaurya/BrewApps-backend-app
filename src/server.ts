import express,{Response, Express} from "express";
import { dbConnection } from "./config/database";

const app : Express = express();
const PORT = 5050;

app.get("/home",(res : Response)=>{
    res.send("Welcome home.")
})

app.listen(PORT, async()=>{
    await dbConnection();
    console.log({msg : `Server is Listing on Port ${PORT}`})
})

