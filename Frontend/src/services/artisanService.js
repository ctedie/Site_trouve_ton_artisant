import { apiFetch } from './api'

export async function getAllArtisans() {
  return apiFetch('/artisans')
}

export async function getArtisanById(id) {
  return apiFetch(`/artisans/${id}`)
}

export async function getArtisansByCategory(categorySlug) {
  return apiFetch(`/artisans?category=${categorySlug}`)
}

export async function searchArtisansByName(query) {
  return apiFetch(`/artisans?search=${encodeURIComponent(query)}`)
}

export async function getTopArtisans() {
  return apiFetch('/artisans/top')
}