import { useParams } from 'react-router-dom'

function CategoryPage() {
  const { slug } = useParams()

  return (
    <div className="container py-5">
      <h1>Page catégorie</h1>
      <p>Catégorie sélectionnée : {slug}</p>
    </div>
  )
}

export default CategoryPage