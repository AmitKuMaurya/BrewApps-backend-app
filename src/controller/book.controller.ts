import {NextFunction, Request, Response} from "express";
import { BookModel, IBook } from "../model/book.model";

export const createBook = async(req : Request, res : Response, next : NextFunction) => {

    const {author,title,summary} : IBook = req.body;

    const titleExist = await BookModel.find({ $and : [{title}]});

    if(titleExist) return next("can't use this title, it's been already registered !");

    const book = await BookModel.create(author, title, summary);

    res.status(201).send({
        msg : `Book Created Successfully !`,
        result : book
    })
}

export const getBookList = async(req : Request, res : Response) => {
    // have to implement search, filter and pagination.
    const books = await BookModel.find().lean();
    res.status(200).send({
        msg : `Books Fetched Successfully`,
        result : books
    });
}

export const getABookDetails = async (req: Request, res : Response, next : NextFunction) => {
    const {id} = req.params;
    const doesExist = await BookModel.findOne({_id : id});
    if(!doesExist) return next("This Book Doesn't Exist !");
    const aBook = await BookModel.findById({_id : id});
    
    res.status(200).send({
        msg : `A Book Details Fetched Successfully`,
        result : aBook
    });
}

export const updateBook = async (req: Request, res : Response, next : NextFunction) => {
    const {id} = req.params;
    const {author,summary,title} : IBook = req.body;
    const doesExist = await BookModel.findOne({_id : id});
    if(!doesExist) return next("This Book Doesn't Exist !");
    
    const updateBook = await BookModel.updateOne({_id : id},{$set : {author, title, summary}});

    res.status(200).send({
        msg : `A Book Updated Successfully`,
        result : updateBook
    });
}

export const deleteBook = async (req: Request, res : Response, next : NextFunction) => {
    const {id} = req.params;
    const doesExist = await BookModel.findOne({_id : id});
    if(!doesExist) return next("This Book Doesn't Exist !");

    const deleteBook = await BookModel.deleteOne({_id : id});
    
    res.status(200).send({
        msg : `A Book Deleted Successfully`,
        result : deleteBook
    });
    
}
