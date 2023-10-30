import Joi from 'joi';

export const BookSchema = Joi.object({
    title: Joi.string().required(),
    author : Joi.string().required(),
    summary : Joi.string().required()
})

export const MongoIdSchema = Joi.object({
    id : Joi.string().hex().length(24)
})