const BASE_URL = 'http://localhost:8000/auth'

export const signup = async (values: {email: string, password: string}) => {
    const response = await fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
    });

    if (response.ok) {
        return await response.json()
    }

    return null
}

export const login = async (values: {email: string, password: string}) => {
    const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
    });

    if (response.ok) {
        return await response.json()
    }

    return null
}