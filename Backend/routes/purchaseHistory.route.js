import express from 'express';
import  getPurchaseHistory  from '../controllers/purchaseHistory.controller.js';
import sendPurchaseHistory from '../controllers/sendPurchaseHistory.controller.js';

const router = express.Router(); 

router.post('/', getPurchaseHistory);
router.get('/getfromDB', sendPurchaseHistory);

export default router;
