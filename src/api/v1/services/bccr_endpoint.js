const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'text/xml'
    }
}
export default async function get_indicator_from_api({ credentials, start_date, end_date, indicator }) {
    let url = `${process.env.ENDPOINT_BCCR}Indicador=${indicator}&FechaInicio=${start_date}&FechaFinal=${end_date}&Nombre=${credentials.name}&SubNiveles=${credentials.isSubNivel}&CorreoElectronico=${credentials.email}&Token=${credentials.token}`;
    const request = await fetch(url, options);
    console.log(request)
    return request.text();
}