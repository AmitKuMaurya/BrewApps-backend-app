import { Request, Response, NextFunction } from "express";
import Joi from "joi";
export const validate =
  (schema: Joi.ObjectSchema) =>
  (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      res.status(422).send(error.details);
    } else {
      next();
    }
  };
