import { readFileSync, writeFileSync } from 'node:fs';
export async function write_file({ filename, extension, data }) {
    //console.log({ cwd: process.cwd() })
    writeFileSync(`${process.cwd()}/src/temp/${extension}/${filename}.${extension}`,data,{encoding:'utf8'})
}

export async function read_file({ filename,extension }) {
    const file = await readFileSync(`${process.cwd()}/src/temp/${extension}/${filename}.${extension}`, { encoding: 'utf8' })
    if (extension == 'json') {
        return JSON.parse(file)
        //return JSON.parse(file)
    }
    return file;
}