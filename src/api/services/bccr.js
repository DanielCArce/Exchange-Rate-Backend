//import { config } from "dotenv";
import {write_file, read_file} from '../../utils/handleFiles.js'
import { toJson } from 'xml2json'
//config();
/**
 * 
 * @date 2023-10-16
 * @param {string} {start_date
 * @param {string} end_date
 * @param {int} indicatorCode}
 * @returns {string}
 */
async function transform_response({ rawData, filename }) {
    let xmlFileW = await write_file({ filename, extension: 'xml', data: rawData })
    let xmlFileR = await read_file({ filename, extension: 'xml' });
    let jsonFileW = await write_file({ filename, extension: 'json', data: await toJson(xmlFileR) })
    let jsonFileR = await read_file({filename,extension:'json'})
    return jsonFileR;
}
export async function getIndicatorAPI({start_date,end_date,indicatorCode}) {
const URL= `${process.env.ENDPOINT_BCCR}Indicador=${indicatorCode}&FechaInicio=${start_date}&FechaFinal=${end_date}&Nombre=${process.env.NAME_BCCR}&SubNiveles=${process.env.SUBNIVEL_BCCR}&CorreoElectronico=${process.env.EMAIL_BCCR}&Token=${process.env.TOKEN_BCCR}`
    const res = await fetch(URL)
    const rawData = await res.text()
    return await transform_response({rawData,filename:indicatorCode})
}