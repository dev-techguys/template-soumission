# Architecture technique — template-soumission

---

## Vue d'ensemble

L'application est une **Next.js App Router** mono-page. Toute la personnalisation client passe par un seul fichier (`lib/proposal-data.ts`). Les composants de présentation sont purement déclaratifs — ils importent leurs données et les affichent, sans logique métier.

---

## Flux de données

```
lib/proposal-data.ts
        ↓
app/page.tsx          (importe proposalData, assemble les slides)
        ↓
PresentationShell     (wrapper global, scroll tracking)
        ↓
SlideWrapper          (conteneur full-height par slide)
        ↓
[Slide Components]    (rendu du contenu)
        ↓
SignatureModal        (CTA flottant → workflow de signature 6 étapes)
        ↓
app/api/send-signature/route.ts   (envoi des emails via Resend)
```

---

## Fichiers clés

### `lib/proposal-data.ts` — Source de vérité unique

Contient 4 exports :

| Export | Contenu |
|---|---|
| `client` | Nom, contact, site, industrie, mission, audience, email de notification |
| `branding` | Couleurs, polices, logos, images, style visuel, ton |
| `pricing` | Type (`hourly-bank` ou `fixed-price`), plans, inclusions, livrables |
| `slides` | Contenu textuel de chaque slide |

**Règle absolue :** Aucun contenu client ne doit être hardcodé dans un composant. Tout passe par ce fichier.

---

### `app/page.tsx` — Assemblage

Monte toutes les slides dans l'ordre et wrap le tout dans `PresentationShell`. Ajoute `SignatureModal` en dehors du shell (position fixe).

```tsx
export default function Home() {
  return (
    <>
      <PresentationShell>
        <CoverSlide />
        <AboutSlide />
        <ContextSlide />
        <ObjectivesSlide />
        {/* Bonus slides ici si applicable */}
        <RoadmapSlide />
        <PricingSlide />
        <AnnexeSlide />
        <ClosingSlide />
      </PresentationShell>
      <SignatureModal />
    </>
  )
}
```

Ce fichier ne doit être modifié qu'à l'étape 9 du workflow (après que toutes les slides sont générées).

---

### `components/presentation/presentation-shell.tsx` — ⛔ PROTÉGÉ

Wrapper global de la présentation. Gère :
- Le scroll tracking via Intersection Observer
- La synchronisation avec `SlideNav`
- L'état de la slide active

**Ne jamais modifier ce fichier.**

---

### `components/presentation/slide-wrapper.tsx` — ⛔ PROTÉGÉ

Conteneur réutilisable pour chaque slide. Props :
- `id` — identifiant unique utilisé par l'Intersection Observer et la navigation
- `className` — classes Tailwind supplémentaires
- `children` — contenu de la slide

**Ne jamais modifier ce fichier.**

---

### `components/presentation/slide-nav.tsx`

Navigation latérale fixe avec indicateurs de points. Se synchronise avec la slide active via le contexte fourni par `PresentationShell`.

Modifiable **uniquement en dernier** (étape 10), après que `page.tsx` est finalisé, pour refléter exactement les slides présentes.

---

### `components/presentation/signature-modal.tsx`

Modal de signature en 6 étapes. Workflow :

| Étape | Contenu |
|---|---|
| 1 | Sélection du plan (hourly-bank) ou résumé du projet (fixed-price) |
| 2 | Informations client (nom, email) avec validation Zod |
| 3 | Lecture des documents (scroll-to-unlock) |
| 4 | Acceptation des conditions (checkbox) |
| 5 | Signature électronique sur canvas (souris + tactile) |
| 6 | Confirmation de succès |

Lit `pricing.type` depuis `proposal-data.ts` pour adapter l'étape 1.
Lit `client.notificationEmail` pour l'envoi de la notification.

---

### `app/api/send-signature/route.ts` — API email

Endpoint `POST /api/send-signature`.

**Flow :**
1. Reçoit : nom client, email, détails du plan, signature PNG (base64)
2. Convertit la signature en Buffer (pièce jointe)
3. Envoie 2 emails via Resend :
   - Email de confirmation → client
   - Email de notification → `client.notificationEmail` (ou `RESEND_NOTIFICATION_EMAIL` en fallback)
4. Retourne `{ success: true, ids: [...] }` ou une erreur

**Variables d'environnement requises :**
```
RESEND_API_KEY
RESEND_FROM_EMAIL
RESEND_NOTIFICATION_EMAIL
```

---

## Slides — Catalogue

| Fichier | ID SlideWrapper | Type | Données depuis |
|---|---|---|---|
| `cover-slide.tsx` | `cover` | Variable | `client`, `branding`, `slides.hero` |
| `about-slide.tsx` | `about-us` | Fixe | `branding` (couleurs seulement) |
| `context-slide.tsx` | `context` | Variable | `client`, `slides.context` |
| `objectives-slide.tsx` | `objectives` | Variable | `slides.problems` |
| `roadmap-slide.tsx` | `roadmap` | Variable | `slides.roadmap` |
| `pricing-slide.tsx` | `pricing` | Variable | `pricing` |
| `annexe-slide.tsx` | `annexe` | Fixe | `branding` (couleurs seulement) |
| `closing-slide.tsx` | `closing` | Fixe | `client`, `branding`, `slides.closing` |

> **Note :** `objectives-slide.tsx` traite "Problématique & opportunités" — le nom du fichier est intentionnel, ne pas le renommer.

---

## Mode de tarification

`pricing.type` contrôle le rendu conditionnel dans `pricing-slide.tsx` et `signature-modal.tsx`.

### `"hourly-bank"` — Banque d'heures

```ts
pricing.plans[]          // 3 forfaits (Essentielle / Croissance / Performance+)
  .rates[]               // 3 taux (sans engagement / 3 mois / 6 mois)
pricing.inclusions[]     // Services inclus avec engagement 3 mois+
```

### `"fixed-price"` — Prix fixe

```ts
pricing.fixedPrice.projectName
pricing.fixedPrice.totalPrice
pricing.fixedPrice.totalPriceValue
pricing.fixedPrice.estimatedHours
pricing.fixedPrice.timeline
pricing.fixedPrice.description
pricing.fixedPrice.deliverables[]
```

---

## Slides bonus

Des slides supplémentaires peuvent être insérées entre la slide 4 et la slide 5, uniquement si le client fournit des documents d'audit.

**Conventions :**
- Fichier : `components/presentation/slides/[nom]-slide.tsx`
- ID SlideWrapper : un identifiant unique correspondant au sujet (`seo`, `performance`, `ux`, etc.)
- Données dans `proposal-data.ts` sous `slides.[nom]`
- Ordre dans `page.tsx` : après `<ObjectivesSlide />`, avant `<RoadmapSlide />`
- Entrée dans `slide-nav.tsx` : dans l'ordre correspondant

---

## Conventions de nommage

| Élément | Convention |
|---|---|
| Fichiers de slides | `kebab-case-slide.tsx` |
| Exports de composants | `PascalCaseSlide` |
| ID SlideWrapper | `kebab-case` (correspond au nom de section) |
| Branches client | `v0/nom-du-client` |

---

## Déploiement

Chaque branche est déployée automatiquement sur Vercel comme preview deployment.

Les variables d'environnement sont configurées au niveau du projet Vercel — elles s'appliquent à toutes les branches sans configuration supplémentaire. Seul `client.notificationEmail` dans `proposal-data.ts` change d'un client à l'autre.

```
main branch          → https://template-soumission.vercel.app
v0/omnigo            → https://template-soumission-git-v0-omnigo.vercel.app
v0/autre-client      → https://template-soumission-git-v0-autre-client.vercel.app
```
