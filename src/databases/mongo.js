import dotenv from 'dotenv';
import { MongoClient, ObjectId } from 'mongodb';

dotenv.config();


const mongoClient = new MongoClient(process.env.URL_MONGODB);

await mongoClient.connect();
const db=mongoClient.db(process.env.MONGO_DATABASE_NAME);
    
export {db,ObjectId};

