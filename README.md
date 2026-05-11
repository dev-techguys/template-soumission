# template-soumission

Plateforme de soumissions commerciales interactives pour TechGuys — générée et personnalisée par client via v0, signée électroniquement, avec envoi automatique de courriel.

Chaque client reçoit sa propre landing page déployée sur Vercel, construite à partir de cette template et personnalisée par un agent IA (v0).

---

## Ce que ça produit

Une soumission client = une landing page interactive comprenant :

- **8 slides** défilantes (contexte client, feuille de route, tarification, etc.)
- **Modal de signature en 6 étapes** (sélection du plan → infos client → lecture des documents → acceptation → signature canvas → confirmation)
- **Envoi automatique de 2 courriels** à la signature (confirmation client + notification TechGuys)
- **2 modes de tarification** : banque d'heures ou prix fixe

---

## Workflow — Vue d'ensemble

```
main (template de référence)
        ↓
Ouvrir dans v0.app
        ↓
Créer branche v0/nom-client
        ↓
Coller docs/prompt_MVP.md en one-shot
        ↓
v0 collecte les infos client → génère lib/proposal-data.ts → génère les slides
        ↓
Déployer sur Vercel (1 branche = 1 URL client)
        ↓
Client signe → emails envoyés automatiquement
```

**Convention Git :**
- `main` — template officielle, composants standardisés, structure de données propre
- `v0/nom-client` — `proposal-data.ts` personnalisé, branding client, ajustements spécifiques au deal
- Si un ajustement est bon et réutilisable → merge vers `main`

---

## Utilisation — Étapes détaillées

### 1. Ouvrir v0 sur la branche `main`

Aller sur [v0.app](https://v0.app) → ouvrir le repo `dev-techguys/template-soumission` depuis la branche `main`.

### 2. Créer une branche client

Dans v0, créer une nouvelle branche : `v0/nom-du-client`

### 3. Coller le prompt

Copier le contenu de [`docs/prompt_MVP.md`](docs/prompt_MVP.md) et le coller en one-shot dans v0.

> Le prompt est conçu pour être collé en entier. v0 collectera lui-même les informations client avant de générer quoi que ce soit.

### 4. Fournir le contexte client

v0 demandera en une seule fois :
- Nom de l'entreprise et site web
- Brief client ou notes de réunion
- Audits disponibles (SEO, UX, performance, conversion…)
- Logo, image de couverture, image de closing
- Email de notification de signature
- Mode de tarification (banque d'heures ou prix fixe)

### 5. Laisser v0 générer

v0 suit un workflow en 10 étapes structurées (voir [`docs/SOP.md`](docs/SOP.md)). Il s'arrête à chaque étape clé pour confirmer avant de continuer.

### 6. Déployer sur Vercel

Chaque branche est déployée automatiquement sur Vercel (configuration au niveau du projet, pas de la branche).

---

## Architecture technique

```
lib/
  proposal-data.ts          ← SOURCE DE VÉRITÉ — tout le contenu client est ici

app/
  page.tsx                  ← Assemble les slides + SignatureModal
  api/send-signature/
    route.ts                ← Endpoint API pour l'envoi des courriels (Resend)

components/presentation/
  presentation-shell.tsx    ← ⛔ PROTÉGÉ — ne pas modifier
  slide-wrapper.tsx         ← ⛔ PROTÉGÉ — ne pas modifier
  slide-nav.tsx             ← Navigation latérale (modifiable en fin de workflow)
  signature-modal.tsx       ← Modal de signature 6 étapes
  slides/
    cover-slide.tsx         ← Slide 1 : Hero
    about-slide.tsx         ← Slide 2 : Notre approche (fixe)
    context-slide.tsx       ← Slide 3 : Contexte client
    objectives-slide.tsx    ← Slide 4 : Problématique & opportunités
    roadmap-slide.tsx       ← Slide 5 : Feuille de route
    pricing-slide.tsx       ← Slide 6 : Tarification (banque d'heures ou prix fixe)
    annexe-slide.tsx        ← Slide 7 : Catalogue de services (fixe)
    closing-slide.tsx       ← Slide 8 : Closing
```

> **Note :** `objectives-slide.tsx` traite "Problématique & opportunités" — le nom du fichier est intentionnel, ne pas le renommer.

Voir [`docs/architecture.md`](docs/architecture.md) pour le détail complet.

---

## Stack

| Technologie | Usage |
|---|---|
| [Next.js](https://nextjs.org) 16 + React 19 | App Router, SSR |
| TypeScript 5.7 | Typage strict |
| Tailwind CSS 4 + shadcn/ui | Design system |
| [Resend](https://resend.com) | Envoi des courriels de signature |
| [Vercel](https://vercel.com) | Déploiement par branche |

---

## Variables d'environnement

Configurer dans Vercel → Settings → Environment Variables (niveau projet, s'applique à toutes les branches) :

```env
RESEND_API_KEY=re_...
RESEND_FROM_EMAIL=noreply@techguys.consulting
RESEND_NOTIFICATION_EMAIL=email-fallback@techguys.consulting
```

> `RESEND_NOTIFICATION_EMAIL` est le fallback. L'email de notification principal par client est défini dans `client.notificationEmail` dans `lib/proposal-data.ts`.

Pour le développement local, créer un fichier `.env.local` à la racine avec ces mêmes variables.

---

## Démarrage local

```bash
pnpm install
pnpm dev
```

---

## Fichiers protégés

Ces fichiers **ne doivent jamais être modifiés** — ni manuellement, ni par v0 :

| Fichier | Raison |
|---|---|
| `components/presentation/presentation-shell.tsx` | Structure globale de la présentation |
| `components/presentation/slide-wrapper.tsx` | Conteneur réutilisé par toutes les slides |

Ces fichiers peuvent être modifiés **uniquement en fin de workflow** (étapes 9 et 10) :

| Fichier | Quand |
|---|---|
| `app/page.tsx` | Après que toutes les slides sont générées |
| `components/presentation/slide-nav.tsx` | En dernier, une fois `page.tsx` finalisé |

---

## Documentation

| Document | Contenu |
|---|---|
| [`docs/SOP.md`](docs/SOP.md) | Standard Operating Procedure — structure éditoriale, règles par section, logique de contenu |
| [`docs/prompt_MVP.md`](docs/prompt_MVP.md) | Prompt complet à coller dans v0 pour générer une soumission |
| [`docs/architecture.md`](docs/architecture.md) | Architecture technique détaillée — flux de données, composants, conventions |

---

## Backlog — Évolutions futures

| Priorité | Feature | Description |
|---|---|---|
| Haute | **Intégration Stripe** | Paiement direct après signature (abonnement mensuel récurrent via Stripe Checkout) |
| Moyenne | **Multi-email CC notification** | Notification de signature envoyée à plusieurs membres de l'équipe TechGuys |
| Moyenne | **Dashboard soumissions** | Interface interne pour suivre l'état des soumissions (envoyées, signées, en attente) |
| Basse | **PDF export** | Génération d'un PDF de la soumission en un clic |
| Basse | **Aperçu client protégé** | Accès via lien unique + mot de passe |
| Basse | **Analytics de lecture** | Suivi des slides consultées, temps passé, ouvertures |

Dev par jo
