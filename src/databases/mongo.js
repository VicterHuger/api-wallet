import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();


const mongoClient = new MongoClient(process.env.URL_MONGODB);

await mongoClient.connect();
const db=mongoClient.db(process.env.MONGO_DATABASE_NAME);
    
export default db;

