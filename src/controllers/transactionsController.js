import dayjs from 'dayjs';
import {db, ObjectId} from '../databases/mongo.js';

async function getTransactions(req,res){
    const user=res.locals.user;

    try{
        const transactions= await db.collection('transactions').find({userId: new ObjectId(user._id)}).toArray();
        if(transactions.length===0){
            return res.sendStatus(204);
        }else{
            transactions.map(item=>delete item.userId);
            return res.status(200).send(transactions);
        }
    }catch(error){
        return res.status(500).send(error);
    }
}

async function generateTransaction(req,res){
    const transaction=res.locals.transaction;
    transaction.value=transaction.value.toFixed(2);
    const user=res.locals.user;
    try{
        const result=await db.collection('transactions').insertOne({...transaction, date:dayjs().format('DD/MM'), userId:new ObjectId(user._id)});
        if(result.acknowledged){
            return res.sendStatus(201); 
        }
        
    }catch(error){
        return res.status(500).send(error);
    }
}

export  {getTransactions, generateTransaction};

