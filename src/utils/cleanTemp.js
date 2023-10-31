import cron from 'cron'
import fs from 'node:fs'
let jsonDirPath = `${process.cwd()}/src/temp/json/`
let xmlDirPath = `${process.cwd()}/src/temp/xml/`

async function removeFile(file, format) {
    //console.log({ file })
    if (format == 'xml') {
        await fs.rmSync(`${xmlDirPath}/${file}`)
    }
    if (format == 'json') {
        await fs.rmSync(`${jsonDirPath}/${file}`)
    }
}
export default async function clean_files() {
    //console.info('Starting the counting of clean')
    
    let job = new cron.CronJob('5 * * * *', async function () {
        console.time('cleaning files')
        let jsonFiles = await fs.readdirSync(jsonDirPath, { encoding: 'utf8' })
        let xmlFiles = await fs.readdirSync(xmlDirPath,{encoding:'utf8'})
        jsonFiles.forEach((file) => removeFile(file,'json'))
        xmlFiles.forEach((file) => removeFile(file, 'xml'))        
        console.timeEnd('cleaning files')
     },null,
	true, // start
	'America/Los_Angeles')
    
}