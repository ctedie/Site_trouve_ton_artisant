import { apiFetch } from './api'

export async function getAllCategories() {
  return apiFetch('/categories')
}