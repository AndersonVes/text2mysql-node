import express from 'express'
import TransactionsController from "../controllers/transactionsController.js";

const router = express.Router();

router
    .get("/transactions", TransactionsController.listTransactions)
    
export default router