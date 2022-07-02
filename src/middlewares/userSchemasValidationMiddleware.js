import userSchemaSignIn from '../schemas/userSchemaSignIn.js';
import userSchemaSignUp from '../schemas/userSchemaSignUp.js';

async function userSchemaSignUpValidationMiddleware(req,res,next){
    const user=req.body;
    const userSchema=userSchemaSignUp;
    const authRequest='sign-up';
    
    res.locals.userSchema=userSchema;
    res.locals.user=user;
    res.locals.authRequest=authRequest;
    next();
}

async function userSchemaSignInValidationMiddleware(req,res,next){
    const user=req.body;
    const userSchema=userSchemaSignIn;
    const authResquest='sign-in';
    res.locals.userSchema=userSchema;
    res.locals.user=user;
    res.locals.authRequest=authResquest;
    next();
}

async function userSchemaValidationMiddleware(req,res,next){
    const user=res.locals.user
    const userSchema=res.locals.userSchema;
    const {error}=userSchema.validate(user,{abortEarly:false});
    res.locals.error=error;
    res.locals.user=user;
    
    next();
}

export {userSchemaSignInValidationMiddleware, userSchemaSignUpValidationMiddleware, userSchemaValidationMiddleware} ;