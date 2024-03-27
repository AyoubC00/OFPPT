const getToken = () => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    return `Bearer ${ user?.token }`;
}

export default getToken