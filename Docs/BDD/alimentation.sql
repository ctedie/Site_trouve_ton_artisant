USE trouve_ton_artisan;

INSERT INTO categories (name, slug) VALUES
('Bâtiment', 'batiment'),
('Services', 'services'),
('Fabrication', 'fabrication'),
('Alimentation', 'alimentation');

INSERT INTO specialties (name, slug, category_id) VALUES
('Chauffagiste', 'chauffagiste', 1),
('Electricien', 'electricien', 1),
('Coiffeur', 'coiffeur', 2),
('Photographe', 'photographe', 2),
('Menuisier', 'menuisier', 3),
('Céramiste', 'ceramiste', 3),
('Boulanger', 'boulanger', 4),
('Traiteur', 'traiteur', 4);

INSERT INTO artisans (name, specialty_id, rating, location, about, website, email, phone, image_url, is_top_artisan) VALUES
('Martin Dupont', 1, 4.8, 'Lyon', 'Spécialiste chauffage et dépannage.', 'https://martin-dupont.fr', 'contact@martin-dupont.fr', '0400000001', '/images/artisans/martin-dupont.png', TRUE),
('Sophie Bernard', 3, 4.6, 'Villeurbanne', 'Coiffeuse à domicile et en salon.', 'https://sophie-bernard.fr', 'contact@sophie-bernard.fr', '0400000002', '/images/artisans/sophie-bernard.png', TRUE),
('Atelier Bois Lyon', 5, 4.9, 'Lyon', 'Création de mobilier sur mesure.', 'https://atelierboislyon.fr', 'contact@atelierboislyon.fr', '0400000003', '/images/artisans/atelier-bois-lyon.png', TRUE),
('Boulangerie des Alpes', 7, 4.7, 'Grenoble', 'Pain artisanal et viennoiseries maison.', NULL, 'contact@boulangerie-alpes.fr', '0400000004', '/images/artisans/boulangerie-alpes.png', FALSE);