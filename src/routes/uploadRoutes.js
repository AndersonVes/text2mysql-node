import UploadController from '../controllers/uploadController.js';
import express from 'express'

const router = express.Router();

router
    .post("/upload", UploadController.upload)
    
export default router