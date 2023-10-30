import {NextFunction, Request, Response} from "express";
import { BookModel, IBook } from "../model/book.model";

exports.createBook = async(req : Request, res : Response, next : NextFunction) => {

    const {author,title,summary} : IBook = req.body;

    const titleExist = await BookModel.find({ $and : [{title}]});

    if(titleExist) return next("can't use this title, it's been already registered !");

    const book = await BookModel.create(author, title, summary);

    res.status(201).send({
        msg : `Book Created Successfully !`,
        result : book
    })
}

exports.getBookList = async(req : Request, res : Response) => {
    // have to implement search, filter and pagination.
    const books = await BookModel.find().lean();
    res.status(200).send({
        msg : `Books Fetched Successfully`,
        result : books
    });
}

exports.getABookDetails = async (req: Request, res : Response, next : NextFunction) => {
    const {id} = req.params;
    const doesExist = await BookModel.findOne({_id : id});
    if(!doesExist) return next("This Book Doesn't Exist !");
    const aBook = await BookModel.findById({_id : id});
    
    res.status(200).send({
        msg : `A Book Details Fetched Successfully`,
        result : aBook
    });
}
