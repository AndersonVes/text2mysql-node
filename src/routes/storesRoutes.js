import express from 'express'
import StoresController from "../controllers/storesController.js";

const router = express.Router();

router
    .get("/stores", StoresController.listStores)

export default router