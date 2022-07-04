import { Router } from "express";
import authRouter from './authRouter.js';
import transactionsRouter from "./transactionsRouter.js";
import userRouter from "./userRouter.js";
import validateToken from "../middlewares/verifyTokenMiddleware.js";

const router=Router();
router.use([authRouter,validateToken, userRouter, transactionsRouter]);

export default router;