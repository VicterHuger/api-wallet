import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import {db,ObjectId} from '../databases/mongo.js';

async function signup(req,res){
    const user=res.locals.user;
    const userSignUp= await db.collection('users').findOne({email:user.email});
    if(userSignUp){
        return res.status(409).send('Usuário Indisponível - Email já cadastrado!');
    };
    try{
        const passwordEncrypted=bcrypt.hashSync(user.password,10);
        await db.collection('users').insertOne({...user,password:passwordEncrypted});
        res.sendStatus(201);
    }catch(error){
        res.status(500).send(error);
    }
};

async function signin(req,res){
    const user=res.locals.user;
    try{
        const userSignUp=await db.collection('users').findOne({email:user.email});
        if(userSignUp && bcrypt.compareSync(user.password, userSignUp.password) ) {
            const token=uuid();
            await db.collection('sessions').insertOne(
                {
                    userId:ObjectId(userSignUp._id),
                    token,
                });
            res.status(202).send({token});
        }else{
            return res.status(404).send('Email e/ou senha inválido(s)');
        }

    }catch(error){
        res.status(500).send(error);
    }
    
}

export  {signup, signin}