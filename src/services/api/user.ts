import { getAuthenticatedToken } from '../storage'
import { Apod } from './apod'

const BASE_URL = 'http://localhost:8000/users'

export const addFavApod = async (id: string) => {
  try {
    const token = getAuthenticatedToken() // Obtener el token de localStorage
    const response = await fetch(`${BASE_URL}/addFavoritesApod/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // Agregar el token al header 'Authorization'
      },
    })

    if (!response.ok) {
      return false
    }

    const data = await response.json()
    return data.isAdded
  } catch (error) {
    console.log(error)
  }
}

export const getFavsApod = async (): Promise<Apod[]> => {
  try {
    const token = getAuthenticatedToken() // Obtener el token de localStorage
    const response = await fetch(`${BASE_URL}/favList`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // Agregar el token al header 'Authorization'
      },
    })

    if (!response.ok) {
      return []
    }

    const data = await response.json()
    return data.apodFavorites
  } catch (error) {
    console.log(error)
  }

  return []
}
