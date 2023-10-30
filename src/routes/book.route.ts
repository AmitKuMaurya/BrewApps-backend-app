import {Router} from "express";
import { createBook, deleteBook, getABookDetails, getBookList, updateBook } from "../controller/book.controller";
export const bookRouter = Router();

bookRouter.get("list",getBookList);
bookRouter.get("view",getABookDetails);
bookRouter.post("create",createBook);
bookRouter.delete("delete",deleteBook);
bookRouter.delete("update",updateBook);

