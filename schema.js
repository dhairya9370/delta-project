const Joi = require("joi");

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        country: Joi.string().required(),
        location: Joi.string().required(),
        price: Joi.number().min(0).required(),
    }).required().not(null)
}).required().not(null);

module.exports.reviewSchema= Joi.object({
    review: Joi.object({
        rating: Joi.number().min(1).max(5).required(),
        comment: Joi.string().required(),
    }).required().not(null)
}).required().not(null);

module.exports.userSchema= Joi.object({
    credentials: Joi.object({
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    }).required().not(null)
}).required().not(null);