import { formatToRaw } from '../../../utils/getFormatToResponse.js'
import BCCREndpoint from '../services/bccr_endpoint.js'
export async function get_rate(request, response) {
    let indicator = request.params.rateCode
    let end_date = request.params.end_date.replaceAll('-','/')
    let start_date = request.params.start_date.replaceAll('-', '/')
    let credentials =  {
        email: process.env.EMAIL_BCCR,
        name: process.env.NAME_BCCR,
        token: process.env.TOKEN_BCCR,
        //isSubNivel: process.env.SUBNIVEL_BCCR || "N"
        isSubNivel: "N"
        }
    let rates = await BCCREndpoint({
        credentials,
        indicator,
        end_date,
        start_date
    });
    let r = await formatToRaw(rates)
    console.log({r})
    response.status(201).json(r)
}