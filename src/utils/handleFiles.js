import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
export async function write_file({ filename, extension, data }) {
    console.log({cwd:process.cwd()})
    writeFileSync(`${process.cwd()}/src/temp/${extension}/${filename}.${extension}`,data,{encoding:'utf8'})
}

export async function read_file({ filename,extension }) {
    const file = await readFileSync(`${process.cwd()}/src/temp/${extension}/${filename}.${extension}`, { encoding: 'utf8' })
    if (extension == 'json') {
        //return JSON.parse(file)["DataSet"]["diffgr:diffgram"]["Datos_de_INGC011_CAT_INDICADORECONOMIC"]["INGC011_CAT_INDICADORECONOMIC"]["NUM_VALOR"];
        return JSON.parse(file)
    }
    return file;
}