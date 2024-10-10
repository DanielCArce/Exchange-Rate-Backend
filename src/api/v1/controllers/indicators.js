import * as AllBanks from '../../../indicators.json' assert {type: 'json'}
const IndicatorsInfo = AllBanks.default.AllBanks;
export async function get_all_indicators(request, response) {
    response.status(200).json({indicators: IndicatorsInfo})
}
export async function get_indicators_by_bank(request, response) {
    
    let indicatorsByBank = await IndicatorsInfo.filter((vl) => {
         return request.params.nameBank == vl.name
    })
    response.status(200).json(indicatorsByBank)
}