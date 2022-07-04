import { Router } from "express";
import userController from "../controllers/userController.js";

const userRouter=Router();
userRouter.get('/user', userController);
export default userRouter;