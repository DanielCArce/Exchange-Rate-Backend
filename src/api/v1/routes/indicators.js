import { Router } from 'express'
import { get_all_indicators, get_indicators_by_bank } from '../controllers/indicators.js';
const router = Router();
router
    .get('/', get_all_indicators)
    .get('/:nameBank', get_indicators_by_bank)
export default router