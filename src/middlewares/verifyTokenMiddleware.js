import {db,ObjectId} from '../databases/mongo.js';

async function validateToken(req,res,next){
    const {authorization}=req.headers;
    const token=authorization?.replace('Bearer ','');
    
    if(!token) return res.status(401).send('Token inválido ou headers incorreto');

    const session=await db.collection('sessions').findOne({token});

    if(!session) return res.status(401).send('Token inválido ou headers incorreto');

    const user= await db.collection('users').findOne({_id: new ObjectId(session.userId)});

    if(!user) return res.status(401).send('Token inválido ou headers incorreto');

    delete user.password;

    res.locals.user=user;
    res.locals.token=token;

    next();
}

export default validateToken;