const API_BASE_URL = import.meta.env.VITE_API_URL;

export async function apiFetch(endpoint) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`)

  if (!response.ok) {
    throw new Error(`Erreur API : ${response.status}`)
  }

  return response.json()
}