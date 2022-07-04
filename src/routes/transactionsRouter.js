import { Router } from "express";
import {getTransactions,generateTransaction} from "../controllers/transactionsController.js";
import transactionSchemaValidationMiddleware from "../middlewares/transactionSchemaValidation.js";
import verifyUserSchemasErrorMiddleware from "../middlewares/verifyUserSchemasErrorMiddleware.js";


const transactionsRouter=Router();
transactionsRouter.get("/transactions",getTransactions);
transactionsRouter.post("/transactions",transactionSchemaValidationMiddleware, verifyUserSchemasErrorMiddleware,generateTransaction)

export default transactionsRouter;