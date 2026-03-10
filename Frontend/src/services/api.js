const API_BASE_URL = 'http://localhost:3000/api'

export async function apiFetch(endpoint) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`)

  if (!response.ok) {
    throw new Error(`Erreur API : ${response.status}`)
  }

  return response.json()
}