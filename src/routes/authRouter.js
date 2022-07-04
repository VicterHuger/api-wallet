import { Router } from "express";
import { logout, signin, signup } from "../controllers/authController.js";
import { userSchemaSignInValidationMiddleware, userSchemaSignUpValidationMiddleware, userSchemaValidationMiddleware } from "../middlewares/userSchemasValidationMiddleware.js";
import verifyUserSchemasErrorMiddleware from "../middlewares/verifyUserSchemasErrorMiddleware.js";

const authRouter=Router();
authRouter.post("/sign-up",userSchemaSignUpValidationMiddleware,userSchemaValidationMiddleware,verifyUserSchemasErrorMiddleware, signup);
authRouter.post('/sign-in', userSchemaSignInValidationMiddleware,userSchemaValidationMiddleware,verifyUserSchemasErrorMiddleware,signin);
authRouter.delete('/session',logout)

export default authRouter;
