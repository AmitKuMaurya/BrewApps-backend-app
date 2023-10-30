import { Schema, model } from "mongoose";

export interface IBook {
  title: string;
  author: string;
  summary : string;
}

const BookSchema = new Schema(
  {
    title: { type: String, require: true },
    author: { type: String, require: true },
    summary: { type: String, require: true },
  },
  { timestamps: true }
);
export const BookModel = model<IBook>("book", BookSchema);