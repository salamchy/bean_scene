import express from 'express';
import { createMessage, getAllMessages } from '../controllers/contact.controller.js';
import { verifyToken } from '../middlewares/verifyToken.js';
import { verifyAdmin } from '../middlewares/verifyAdmin.js';

const router = express.Router();

router.post('/create-message',verifyToken, createMessage);
router.get('/get-all-message',verifyToken, verifyAdmin, getAllMessages);

export default router;
