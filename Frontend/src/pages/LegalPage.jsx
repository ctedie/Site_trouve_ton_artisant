import { useLocation } from 'react-router-dom'
import Seo from '../components/Seo'

const legalContent = {
  '/mentions-legales': {
    title: 'Mentions légales',
    description: 'Consultez les mentions légales du site Trouve ton artisan.',
    sections: [
      {
        title: 'Éditeur du site',
        content:
          'Le site Trouve ton artisan est un projet réalisé dans le cadre d’une formation Développeur Web / Web Mobile.'
      },
      {
        title: 'Responsable de publication',
        content:
          'Le responsable de publication est l’auteur du projet dans le cadre de son rendu pédagogique.'
      },
      {
        title: 'Hébergement',
        content:
          'Le site est hébergé sur une plateforme de déploiement web adaptée au projet.'
      },
      {
        title: 'Propriété intellectuelle',
        content:
          'L’ensemble des contenus présents sur ce site, sauf mention contraire, est utilisé dans le cadre du projet de formation et ne peut être reproduit sans autorisation.'
      }
    ]
  },

  '/donnees-personnelles': {
    title: 'Données personnelles',
    description: 'Informations relatives aux données personnelles.',
    sections: [
      {
        title: 'Collecte des données',
        content:
          'Certaines données peuvent être collectées via les formulaires de contact, notamment le nom, l’adresse email, l’objet et le message.'
      },
      {
        title: 'Finalité',
        content:
          'Les données sont utilisées uniquement pour traiter les demandes envoyées aux artisans via le formulaire de contact.'
      },
      {
        title: 'Conservation',
        content:
          'Les données ne sont conservées que pour la durée nécessaire au traitement de la demande dans le cadre du projet.'
      },
      {
        title: 'Droits des utilisateurs',
        content:
          'Chaque utilisateur peut demander l’accès, la rectification ou la suppression de ses données personnelles.'
      }
    ]
  },

  '/accessibilite': {
    title: 'Accessibilité',
    description: 'Engagement du site en matière d’accessibilité.',
    sections: [
      {
        title: 'Engagement',
        content:
          'Le site vise à proposer une navigation claire, lisible et accessible sur ordinateur, tablette et mobile.'
      },
      {
        title: 'Bonnes pratiques',
        content:
          'Les formulaires disposent de labels, les images comportent des textes alternatifs et la structure des pages respecte une hiérarchie logique.'
      },
      {
        title: 'Amélioration continue',
        content:
          'L’accessibilité du site fait l’objet d’améliorations progressives tout au long du projet.'
      }
    ]
  },

  '/cookies': {
    title: 'Cookies',
    description: 'Informations relatives à l’utilisation des cookies.',
    sections: [
      {
        title: 'Utilisation des cookies',
        content:
          'Le site peut utiliser des cookies techniques nécessaires à son bon fonctionnement.'
      },
      {
        title: 'Mesure d’audience',
        content:
          'Aucune mesure d’audience avancée n’est mise en place en dehors des besoins techniques éventuels liés à l’hébergement ou au navigateur.'
      },
      {
        title: 'Gestion',
        content:
          'L’utilisateur peut configurer son navigateur pour refuser ou supprimer les cookies.'
      }
    ]
  }
}

function LegalPage() {
  const location = useLocation()

  const currentPage = legalContent[location.pathname] || {
    title: 'Informations légales',
    description: 'Informations légales du site.',
    sections: []
  }

  return (
    <>
      <Seo
        title={`${currentPage.title} | Trouve ton artisan`}
        description={currentPage.description}
      />

      <section className="legal-page">
        <div className="legal-page__hero">
          <div className="container">
            <p className="legal-page__eyebrow">Informations</p>
            <h1 className="legal-page__title">{currentPage.title}</h1>
            <p className="legal-page__intro">{currentPage.description}</p>
          </div>
        </div>

        <div className="container legal-page__content">
          <div className="legal-page__card">
            {currentPage.sections.map((section, index) => (
              <section key={index} className="legal-page__section">
                <h2>{section.title}</h2>
                <p>{section.content}</p>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default LegalPage