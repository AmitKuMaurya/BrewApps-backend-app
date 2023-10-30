import express,{Request, Response, Express} from "express";

const app : Express = express();
const PORT = 5959;

app.get("/home",(req : Request, res : Response)=>{
    res.send("Welcome home.")
})

app.listen(PORT,()=>{
    console.log({msg : `Server is Listing on Port ${PORT}`})
})

