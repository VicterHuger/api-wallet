import joi from 'joi';

const transactionSchema=joi.object({
    type:joi.string().valid('entrada','saida').required(),
    value:joi.number().required(),
    sumary:joi.string().min(3).max(60).required(),
});

export default transactionSchema;