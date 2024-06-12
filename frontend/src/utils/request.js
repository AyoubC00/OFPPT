import getToken from "./getToken";

const request = async (endpoint, method="GET", body=null) =>
{
    const headers = new Headers({
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": getToken()
    });
    const response = await fetch(`${ import.meta.env.VITE_API }/${ endpoint }`, {
        method,
        headers,
        body: body ? JSON.stringify(body) : null
    })

    const data = {ok : response.ok, ...await response.json()};
    return data;
}

export default request