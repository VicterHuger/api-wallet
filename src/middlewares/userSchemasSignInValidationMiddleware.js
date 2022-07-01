import userSchemaSignIn from '../schemas/userSchemaSignIn.js';

async function userSchemaSignInValidationMiddleware(req,res,next){
    const user=req.body;
    const {error}=userSchemaSignIn.validate(user,{abortEarly:false});
    res.locals.error=error;
    res.locals.user=user;
    next();
}
export default userSchemaSignInValidationMiddleware;