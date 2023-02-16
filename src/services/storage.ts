export const getAuthenticatedToken = () => {
    const token = window.localStorage.getItem('token');
    return token ? JSON.parse(token) : null;
}

export const setAuthenticatedToken = (token: string) => {

    window.localStorage.setItem('token', JSON.stringify(token))
}
