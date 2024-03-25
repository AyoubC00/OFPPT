import getToken from "./getToken";

const request = async (endpoint, method="GET", body=null) =>
{
    const headers = new Headers({
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Allow-Origin": "*",
        "Authorization": `Bearer ${ getToken() }`
    });
    const response = await fetch(`${ import.meta.env.VITE_API }/${ endpoint }`, {
        method,
        headers,
        body: body ? JSON.stringify(body) : null
    })

    return await response.json()
}

export default request