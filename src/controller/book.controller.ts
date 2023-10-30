import { NextFunction, Request, Response } from "express";
import { BookModel, IBook } from "../model/book.model";
import createHttpError from "http-errors";

export const createBook = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { author, title, summary }: IBook = req.body;

        const titleExist = await BookModel.findOne({ $or: [{ title: title }] });

        if (titleExist)
            return next(createHttpError(409,"can't use this title, it's been already registered !"));

        const book = await BookModel.create({ author, title, summary });
        await book.save();

        res.status(201).send({
            msg: `Book Created Successfully !`,
            result: book,
        });
    } catch (error) {
        res.status(500).json({ error: "An error occurred." });
    }
};

export const getBookList = async (req: Request, res: Response) => {
    try {
        const books = await BookModel.find().lean();
        res.status(200).send({
            msg: `Books Fetched Successfully`,
            result: books,
        });
    } catch (error) {
        res.status(500).json({ error: "An error occurred." });
    }
};

export const getABookDetails = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { id } = req.params;
        const doesExist = await BookModel.findOne({ _id: id });
        if (!doesExist) return next(createHttpError(404,"This Book Doesn't Exist !"));
        const aBook = await BookModel.findById({ _id: id });

        res.status(200).send({
            msg: `A Book Details Fetched Successfully`,
            result: aBook,
        });
    } catch (error) {
        res.status(500).json({ error: "An error occurred." });
    }
};

export const updateBook = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { id } = req.params;
        const { author, summary, title }: IBook = req.body;
        const doesExist = await BookModel.findOne({ _id: id });
        if (!doesExist) return next(createHttpError(404,"This Book Doesn't Exist !"));

        const updateBook = await BookModel.updateOne(
            { _id: id },
            { $set: { author, title, summary } }
        );

        res.status(200).send({
            msg: `A Book Updated Successfully`,
            result: updateBook,
        });
    } catch (error) {
        res.status(500).json({ error: "An error occurred." });
    }
};

export const deleteBook = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { id } = req.params;
        const doesExist = await BookModel.findOne({ _id: id });
        if (!doesExist) return next(createHttpError(404,"This Book Doesn't Exist !"));

        const deleteBook = await BookModel.deleteOne({ _id: id });

        res.status(200).send({
            msg: `A Book Deleted Successfully`,
            result: deleteBook,
        });
    } catch (error) {
        res.status(500).json({ error: "An error occurred." });
    }
};
