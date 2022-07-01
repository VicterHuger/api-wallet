import userSchemaSignUp from '../schemas/userSchemaSignUp.js';

async function userSchemaSignUpValidationMiddleware(req,res,next){
    const user=req.body;
    const {error}=userSchemaSignUp.validate(user,{abortEarly:false});
    res.locals.error=error;
    res.locals.user=user;
    
    next();
}
export default userSchemaSignUpValidationMiddleware;