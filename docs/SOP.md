# SOP — Standard Operating Procedure
# Template Soumissions TechGuys

---

## Objectif

Scalabiliser la production de soumissions commerciales : un agent IA lit le contexte client, remplit `lib/proposal-data.ts`, et une landing page prête à signer se déploie automatiquement sur Vercel.

---

## Structure de la soumission — 8 sections obligatoires

| # | Slide | Fichier | Type | Rôle |
|---|---|---|---|---|
| 1 | Hero | `cover-slide.tsx` | Variable | Identité visuelle du client |
| 2 | Notre approche | `about-slide.tsx` | **Fixe** | Présentation TechGuys — ne pas modifier |
| 3 | Contexte client | `context-slide.tsx` | Variable | Qui est l'entreprise, son offre, son audience |
| 4 | Problématique & opportunités | `objectives-slide.tsx` | Variable | 1–5 problèmes + opportunités associées |
| 5 | Feuille de route | `roadmap-slide.tsx` | Variable | Plan 3–6 mois, recommandations stratégiques |
| 6 | Tarification | `pricing-slide.tsx` | Variable | Banque d'heures ou prix fixe |
| 7 | Annexe | `annexe-slide.tsx` | **Fixe** | Catalogue complet des services disponibles |
| 8 | Closing | `closing-slide.tsx` | **Fixe** | CTA vers la signature |

> Les slides **fixes** (2, 7, 8) ont un contenu standardisé. Seul le branding client (couleurs) change.
> Les slides **variables** (1, 3, 4, 5, 6) sont entièrement générées à partir du contexte client.

---

## Règles par section

### 1. Hero (variable)

**Inputs :** `client.name`, `client.contactName`, `branding.logoUrl`, `branding.coverImageUrl`, `branding.primaryColor`

**Outputs :**
- Image de fond tirée du site ou représentant l'entreprise
- Logo client centré en haut
- Date dynamique (coin supérieur droit)
- Titre : `"Proposition de partenariat de croissance"`
- Sous-titre : `"TechGuys & [client.name]"`
- Mention `"Confidentiel"`
- Nom du contact en bas

**Règles :**
- Fond basé sur l'industrie du client
- Ton premium / sobre
- Supprimer toute trace du client précédent

---

### 2. Notre approche (fixe)

Contenu standardisé TechGuys — 3 piliers (Stratégie, Technologie, Marketing).

Ne pas modifier le contenu. Adapter uniquement les couleurs au branding client.

---

### 3. Contexte client (variable)

**Inputs :** `client.industry`, `client.mission`, `client.targetAudience`, `slides.context`

**Structure à générer :**

| Élément | Format |
|---|---|
| Header insight | 1 phrase stratégique (entreprise + tension/opportunité clé) |
| Description entreprise | 2–4 phrases (ce qu'ils font, valeur créée, clientèle servie) |
| Pertinence de la proposition | 2–4 phrases (défi actuel, limitation, pourquoi maintenant) |
| Citation stratégique | 1 phrase en italique (ambition ou shift stratégique) |
| Key facts | 4 cartes max (modèle d'affaires, clients cibles, écosystème, positionnement) |
| Tags | 4–8 mots-clés (services, catégories, thèmes) |

**Contraintes :**
- Français, orienté business, sans fluff
- Pas de répétition inter-sections
- Ne pas inventer si donnée absente

---

### 4. Problématique & opportunités (variable)

> Le fichier s'appelle `objectives-slide.tsx` — c'est intentionnel. Ne pas renommer.

**Inputs :** notes de réunion, audits, problèmes identifiés, opportunités business

**Générer 2 blocs :**

**Bloc A — Problèmes clés (3–5 max)**

Chaque problème suit ce pattern :
```
Problème → Conséquence → Impact business → Friction stratégique
```

Format : `titre / catégorie / explication (2–3 phrases)`

**Bloc B — Opportunités**

Une opportunité par problème :
```
Solution → Effet → Gain → Avantage compétitif
```

Format : `titre / explication courte (1–2 phrases)`

**Objectif rédactionnel :** Le client doit penser *"Je reconnais notre situation" / "Ça nous coûte plus que je pensais" / "Il y a vraiment une opportunité ici"*.

---

### 5. Feuille de route (variable)

**Inputs :** objectifs business, catalogue de services

**Structure en 3 blocs :**

**A. Recommandations stratégiques (3–5 max)**

Chaque recommandation :
- Titre : décision stratégique claire (pas technique)
- Explication stratégique (2–3 phrases)
- Impact business (croissance / vitesse / efficacité / scalabilité)
- Actions clés (3–5 liées au catalogue de services)
- KPI / résultats attendus (mesurables)

Chaque recommandation doit adresser au moins un problème identifié. Sinon → la retirer.

**B. Feuille de route d'exécution**

3 phases sur 3–6 mois :
- Phase 1 : Fondations / quick wins
- Phase 2 : Construction core
- Phase 3 : Optimisation / scale

Chaque phase : `titre / objectif / services / résultat attendu`

**C. Estimation des coûts**

Par phase : `heures min / heures max / moyenne estimée`
Comparaison traditionnel vs assisté IA.
Résumé : effort total / économies totales / % d'amélioration.

**Règles de priorisation :**
1. Impact revenu
2. Résolution de douleurs critiques
3. Vitesse d'exécution

Quick wins en début. Progression logique. Pas de redondance.

---

### 6. Tarification (variable)

Supporte 2 modes selon `pricing.type` dans `proposal-data.ts`.

**Mode `"hourly-bank"` — Banque d'heures**

Titre : *"Banques d'heures disponibles"*

- Grille de 3 forfaits (Essentielle/10h, Croissance/25h, Performance+/50h)
- Chaque forfait : nom, heures/mois, tarifs par engagement (sans / 3 mois / 6 mois), économie mensuelle
- Bloc en bas : "Travaux crédités avec engagement 3 mois+" + liste des inclusions

**Mode `"fixed-price"` — Prix fixe**

Titre : *"Votre investissement"*

- Carte projet : nom projet, description, prix total (affiché en grand), heures estimées, délai
- Bloc en bas : "Ce qui est inclus" + liste des livrables

---

### 7. Annexe (fixe)

Catalogue complet des services disponibles avec la banque d'heures.

Sous-titre standardisé :
> *"La banque d'heures donne accès à un ensemble de services intégrés combinant stratégie, technologie, marketing et ventes. La feuille de route proposée demeure flexible : certains services pourront être ajoutés, remplacés ou priorisés différemment au fil du mandat, selon l'évolution de vos besoins et des opportunités d'affaires."*

8 catégories de services (accordéon) :
1. Structure stratégique
2. Optimisation de la présence numérique
3. E-commerce & rétention client
4. Automatisation & intelligence artificielle
5. Outils d'analyse de données
6. Marketing digital (référencement payant)
7. SEO (référencement naturel)
8. Support aux initiatives de terrain & hybrides

Seules les couleurs client changent. Le contenu est fixe.

---

### 8. Closing (fixe)

**Inputs :** `client.name`, `branding.closingImageUrl`, `branding.primaryColor`

**Outputs :**
- Fond plein écran (image closing client ou placeholder stylisé)
- Impact visuel fort, minimaliste
- Texte : *"Un accompagnement stratégique optimal pour propulser votre croissance digitale"*
- *"Préparé pour : [client.name]"*
- CTA : *"Démarrer le projet →"* (pointe vers le bouton Signer le contrat)

---

## Slides bonus (optionnel)

Permises uniquement si le client fournit des documents d'audit réels (SEO, UX, performance, conversion, technique).

**Règles :**
- Même `SlideWrapper`, même typographie, même système de couleurs
- Insérées entre la slide 4 et la slide 5
- Un fichier par slide : `components/presentation/slides/[nom]-slide.tsx`
- Données importées depuis `proposal-data.ts`
- Jamais générées sans contenu réel fourni par le client

---

## Règles de contenu — Non négociables

1. **Ne jamais inventer** — si une donnée manque, laisser le champ vide et demander
2. **Ne pas généraliser** au-delà des inputs fournis
3. **Ne pas répéter** l'information entre les sections
4. **Basé uniquement** sur les données fournies lors du meeting exploratoire
5. **Chaque action** doit être liée à un résultat business concret

---

## Workflow Git

```
main
 └── v0/nom-client-1   (proposal-data.ts spécifique + branding)
 └── v0/nom-client-2
 └── v0/nom-client-3
```

- `main` ne reçoit jamais de contenu client
- Chaque branche client est déployée sur sa propre URL Vercel
- Les améliorations structurelles réutilisables remontent vers `main`

---

## Amélioration continue

### WHY stratégique (à intégrer progressivement)

Le flow actuel : **problème → solution**

Le flow optimal : **contexte → enjeu business → problème → solution → ROI implicite**

```
CONTEXTE
   ↓
ENJEUX (marché / croissance)
   ↓
OBJECTIFS
   ↓
PROBLÈMES
   ↓
ROADMAP
   ↓
ROI implicite
```

L'augmentation de la désirabilité passe par un storytelling qui crée une tension business forte avant d'ouvrir l'opportunité.
