import express from 'express'
import StoresController from "../controllers/storesController.js";

const router = express.Router();

router
    .get("/stores", StoresController.listStores)
    .post("/stores", StoresController.insertStore)

export default router