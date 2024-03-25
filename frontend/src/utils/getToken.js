const getToken = () => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    return user?.token;
}

export default getToken