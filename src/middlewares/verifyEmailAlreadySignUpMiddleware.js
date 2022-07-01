import {db} from '../databases/mongo.js';
async function verifyEmailAlreadySignUpMiddleware(req,res,next){
    const user=res.locals.user;

    const userSignUp= await db.collection('users').findOne({email:user.email});
    if(userSignUp){
        return res.status(409).send('Usuário Indisponível - Email já cadastrado!');
    };
    res.locals.user=user;
    next();
}
export default verifyEmailAlreadySignUpMiddleware;
