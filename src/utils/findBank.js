import {require} from './customRequire.js'
const {AllBanks} = require('../indicators.json')

export async function getIndicatorByNameAndMode({ bank_name, indicator_mode }) {
    let filtedBank = await AllBanks.filter(currentBank => currentBank.name === bank_name);
    if (filtedBank.length > 0) {
        return filtedBank.map(bank => bank[indicator_mode] )[0]
    }

}

console.log(await getIndicatorByNameAndMode({bank_name:'Banco de Costa Rica',indicator_mode:'sell'}))