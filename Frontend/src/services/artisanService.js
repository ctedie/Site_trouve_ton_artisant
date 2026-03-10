const artisans = [
  {
    id: 1,
    name: 'Dupont Couverture',
    specialty: 'Couvreur',
    city: 'Lyon',
    rating: 4.5,
    category: 'batiment',
    description:
      'Entreprise spécialisée dans les travaux de toiture, rénovation et entretien.'
  },
  {
    id: 2,
    name: 'Faure Plomberie',
    specialty: 'Plombier',
    city: 'Grenoble',
    rating: 4.8,
    category: 'batiment',
    description:
      'Installation et dépannage de systèmes de plomberie.'
  },
  {
    id: 3,
    name: 'Atelier Martin',
    specialty: 'Menuiserie',
    city: 'Villeurbanne',
    rating: 4.9,
    category: 'fabrication',
    description:
      'Création sur mesure de meubles et aménagements en bois.'
  },
  {
    id: 4,
    name: 'Ferronnerie Petit',
    specialty: 'Ferronnier',
    city: 'Valence',
    rating: 4.7,
    category: 'fabrication',
    description:
      'Conception et fabrication d’ouvrages métalliques.'
  },
  {
    id: 5,
    name: 'Boulangerie Morel',
    specialty: 'Boulanger',
    city: 'Vienne',
    rating: 4.7,
    category: 'alimentation',
    description:
      'Maison artisanale reconnue pour la qualité de ses produits.'
  }
]

export function getAllArtisans() {
  return artisans
}

export function getArtisanById(id) {
  return artisans.find((a) => a.id === parseInt(id))
}

export function getArtisansByCategory(category) {
  return artisans.filter((a) => a.category === category)
}