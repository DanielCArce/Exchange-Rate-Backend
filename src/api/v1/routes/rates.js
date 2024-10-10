import { Router } from "express"
import {get_rate} from '../controllers/rates.js'
const router = Router();
router.get('/:rateCode/:end_date/:start_date',get_rate)
export default router;