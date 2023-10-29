import { Router } from "express";
const routes = Router();
import {getBothIndicatorsByBank, getBothIndicatorsByBankAndDate,getBuyIndicatorByBank, getSellIndicatorByBank, getBuyIndicatorByBankAndDate, getSellIndicatorByBankndDate} from '../controllers/rates.js'
routes
    .get('/:bank',getBothIndicatorsByBank)
    .get('/:bank/:start_date/:end_date', getBothIndicatorsByBankAndDate)
    .get('/buy/:bank',getBuyIndicatorByBank)
    .get('/sell/:bank',getSellIndicatorByBank)
    .get('/buy/:bank/:start_date/:end_date',getBuyIndicatorByBankAndDate)
    .get('/sell/:bank/:start_date/:end_date',getSellIndicatorByBankndDate)

export default routes;