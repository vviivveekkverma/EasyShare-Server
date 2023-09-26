import express from 'express';
import { uploadContent, downloadImage } from '../controller/image-controller.js';
import upload from '../utils/upload.js';

const router = express.Router();

router.post('/upload', upload.single('file'), uploadContent);
router.get('/file/:fileId', downloadImage);


export default router;