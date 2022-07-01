import { Router } from "express";
import { signin, signup } from "../controllers/authController.js";
import userSchemaSignUpValidationMiddleware from "../middlewares/userSchemaSignUpValidationMiddleware.js";
import userSchemaSignInValidationMiddleware from "../middlewares/userSchemasSignInValidationMiddleware.js";
import verifyUserSchemasErrorMiddleware from "../middlewares/verifyUserSchemasErrorMiddleware.js";
import verifyEmailAlreadySignUpMiddleware from "../middlewares/verifyEmailAlreadySignUpMiddleware.js";


const authRouter=Router();
authRouter.post("/sign-up",userSchemaSignUpValidationMiddleware,verifyUserSchemasErrorMiddleware, verifyEmailAlreadySignUpMiddleware, signup);
authRouter.post('/sign-in', userSchemaSignInValidationMiddleware,verifyUserSchemasErrorMiddleware,signin)

export default authRouter;
