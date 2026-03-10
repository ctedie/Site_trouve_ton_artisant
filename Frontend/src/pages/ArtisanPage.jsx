import { useParams } from 'react-router-dom'

function ArtisanPage() {
  const { id } = useParams()

  return (
    <div className="container py-5">
      <h1>Fiche artisan</h1>
      <p>Identifiant de l’artisan : {id}</p>
    </div>
  )
}

export default ArtisanPage