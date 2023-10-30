import {Router} from "express";
import { createBook, deleteBook, getABookDetails, getBookList, updateBook } from "../controller/book.controller";
import { validate } from "../middleware/validation";
import { BookSchema } from "../joi/book.schema";
export const bookRouter = Router();

bookRouter.get("/list",getBookList);
bookRouter.get("/view/:id",getABookDetails);
bookRouter.post("/create",validate(BookSchema),createBook);
bookRouter.delete("/delete/:id",deleteBook);
bookRouter.patch("/update/:id",updateBook);

