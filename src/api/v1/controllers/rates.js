import { todayDate } from '../../../utils/formatDate.js';
import { getIndicatorAPI } from '../../services/bccr.js';
import { getIndicatorByNameAndMode } from '../../../utils/findBank.js';

export async function getBothIndicatorsByBank(req, res) {
    console.log({req, res})
    const { bank } = req.params
    const indicatorBuy = await getIndicatorByNameAndMode({ bank_name: bank, indicator_mode: 'buy' })
    const indicatorSell = await getIndicatorByNameAndMode({ bank_name: bank, indicator_mode: 'sell' })
    const buy = await getIndicatorAPI({ start_date: await todayDate(), end_date: await todayDate(), indicatorCode: indicatorBuy })
    const sell = await getIndicatorAPI({start_date: await todayDate(), end_date:await todayDate(),indicatorCode:indicatorSell})
    res.status(200).json({indicatorBuy,indicatorSell,buy, sell,date: await todayDate()})
    
}
export async function getBothIndicatorsByBankAndDate(req, res) {
    const { bank, start_date, end_date } = req.params
    const indicatorBuy = await getIndicatorByNameAndMode({ bank_name: bank, indicator_mode: 'buy' })
    const indicatorSell = await getIndicatorByNameAndMode({ bank_name: bank, indicator_mode: 'sell' })
    const buy = await getIndicatorAPI({ start_date, end_date, indicatorCode: indicatorBuy })
    const sell = await getIndicatorAPI({start_date, end_date,indicatorCode:indicatorSell})
    res.status(200).json({indicatorBuy,indicatorSell,buy, sell,date: `from ${start_date} to ${end_date}`})
}
export async function getBuyIndicatorByBank(req, res) {
    const { bank } = req.params
    const indicatorBuy = await getIndicatorByNameAndMode({ bank_name: bank, indicator_mode: 'buy' })
    const buy = await getIndicatorAPI({ start_date: await todayDate(), end_date: await todayDate(), indicatorCode: indicatorBuy })
    res.status(200).json({buy})
}
export async function getSellIndicatorByBank(req, res) {
    const { bank } = req.params
    const indicatorSell = await getIndicatorByNameAndMode({ bank_name: bank, indicator_mode: 'sell' })
    const sell = await getIndicatorAPI({ start_date: await todayDate(), end_date: await todayDate(), indicatorCode: indicatorBuy })
    res.status(200).json({sell})
}
export async function getBuyIndicatorByBankAndDate(req, res){
const { bank, start_date, end_date } = req.params
    const indicatorBuy = await getIndicatorByNameAndMode({ bank_name: bank, indicator_mode: 'buy' })
    const buy = await getIndicatorAPI({ start_date, end_date, indicatorCode: indicatorBuy })
    res.status(200).json({indicatorBuy,buy,date: `from ${start_date} to ${end_date}`})
}

export async function getSellIndicatorByBankndDate(req, res) {
const { bank, start_date, end_date } = req.params
    const indicatorSell = await getIndicatorByNameAndMode({ bank_name: bank, indicator_mode: 'sell' })
    const sell = await getIndicatorAPI({start_date, end_date,indicatorCode:indicatorSell})
    res.status(200).json({indicatorSell, sell,date: `from ${start_date} to ${end_date}`})
}    
