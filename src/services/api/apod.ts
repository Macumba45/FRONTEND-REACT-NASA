import { getAuthenticatedToken } from '../storage'

const BASE_URL = 'http://localhost:8000/apods'

export type Apod = {
  id: string
  title: string
  date: string
  explanation?: string
  url: string
  isFav?: boolean
}

export const syncApods = async () => {
  const token = getAuthenticatedToken() // Obtener el token de localStorage
  await fetch('http://localhost:8000/sync-api/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`, // Agregar el token al header 'Authorization'
    },
  })
}

export const getApods = async (): Promise<Apod[]> => {
  try {
    const token = getAuthenticatedToken() // Obtener el token de localStorage
    const response = await fetch(BASE_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // Agregar el token al header 'Authorization'
      },
    })

    if (!response.ok) {
      return []
    }

    return await response.json()
  } catch (error) {
    console.log(error)
  }

  return []
}

export const deleteApod = async (id: string) => {
  try {
    const token = getAuthenticatedToken() // Obtener el token de localStorage
    await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // Agregar el token al header 'Authorization'
      },
    })
  } catch (error) {
    console.log(error)
  }
}
