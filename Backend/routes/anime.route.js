import express from 'express';
import  getAnime  from '../controllers/anime.controller.js';

const router = express.Router(); 

router.get('/', getAnime);

export default router;
