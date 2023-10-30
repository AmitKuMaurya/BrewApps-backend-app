import express,{Request,Response, Application} from "express";
import { dbConnection } from "./config/database";
import { Server } from "http";
import { bookRouter } from "./routes/book.route";

const app : Application = express();
const PORT = 5050;

app.use(express.json());
app.use('/api/v1/book',bookRouter);

app.get("/",(req : Request, res : Response)=>{
    res.status(200).send(`Welcome to book store 🤑🤑😏 `)
});

const server : Server = app.listen(PORT, async()=>{
    await dbConnection();
    console.log({msg : `Server is Listing on Port ${PORT} 🤙`})
})

