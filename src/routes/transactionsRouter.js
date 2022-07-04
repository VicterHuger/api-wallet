import { Router } from "express";
import transactionsController from "../controllers/transactionsController.js"

const transactionsRouter=Router();
transactionsRouter.get("/transactions",transactionsController);

export default transactionsRouter;