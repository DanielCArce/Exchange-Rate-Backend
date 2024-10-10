import { toJson } from "xml2json"
export async function formatToRaw(rawText) {
    return JSON.parse(await toJson(JSON.parse(await toJson(rawText)).string["$t"]))
}