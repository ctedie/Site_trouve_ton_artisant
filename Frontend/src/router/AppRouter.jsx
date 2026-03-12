import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import CategoryPage from '../pages/CategoryPage'
import HomePage from '../pages/HomePage'
import ArtisanPage from '../pages/ArtisanPage'
import LegalPage from '../pages/LegalPage'
import NotFoundPage from '../pages/NotFoundPage'
import SearchPage from '../pages/SearchPage'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="categorie/:slug" element={<CategoryPage />} />
        <Route path="artisan/:id" element={<ArtisanPage />} />
        <Route path="mentions-legales" element={<LegalPage />} />
        <Route path="donnees-personnelles" element={<LegalPage />} />
        <Route path="accessibilite" element={<LegalPage />} />
        <Route path="cookies" element={<LegalPage />} />        <Route path="*" element={<NotFoundPage />} />
        <Route path="recherche" element={<SearchPage />} />
      </Route>
    </Routes>
  )
}

export default AppRouter