import express,{json} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import joi from 'joi';
import { MongoClient, ObjectId } from 'mongodb';
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

dotenv.config();

const server = express();

server.use([json(),cors()]);

const PORT=process.env.PORT || 4001;

server.listen(PORT, ()=>console.log(`Server running on ${PORT} port`));
