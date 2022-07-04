import transactionSchema from "../schemas/transactionSchema.js";

async function transactionSchemaValidationMiddleware(req,res,next){
    const transaction=req.body;
    
    const {error}=transactionSchema.validate(transaction,{abortEarly:false});
    res.locals.error=error;
    res.locals.transaction=transaction;
    
    next();
}

export default transactionSchemaValidationMiddleware;