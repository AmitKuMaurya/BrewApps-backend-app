import {Router} from "express";
import { createBook, deleteBook, getABookDetails, getBookList, updateBook } from "../controller/book.controller";
import { validate } from "../middleware/validation";
import { BookSchema } from "../joi/book.schema";
export const bookRouter = Router();

bookRouter.get("/books",getBookList);
bookRouter.get("/book/:id",getABookDetails);
bookRouter.post("/book-create",validate(BookSchema),createBook);
bookRouter.delete("/book-delete/:id",deleteBook);
bookRouter.patch("/book-update/:id",updateBook);

