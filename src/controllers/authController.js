import joi from 'joi';
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import db from '../databases/mongo.js';

async function signup(req,res){
    const user =req.body;
    const userSchema=joi.object({
        email:joi.string().email().pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).required(),
        name:joi.string().min(2).required(),
        password:joi.string().pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/).required(),
    });
    const {error}=userSchema.validate(user,{abortEarly:false});
    if(error){
        const errorMessages=error.details.map(item=>item.message);
        return res.status(404).send(errorMessages);
    }
    try{
        const userSignUp= await db.collection('users').findOne({email:user.email});
        if(userSignUp){
            return res.status(409).send('Usuário Indisponível - Email já cadastrado!');
        }
        const passwordEncrypted=bcrypt.hashSync(user.password,10);
        await db.collection('users').insertOne({...user,password:passwordEncrypted});
        res.sendStatus(201);
    }catch(error){
        res.status(500).send(error);
    }
};

export default signup