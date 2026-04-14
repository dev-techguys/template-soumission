# template-soumission

Template de soumissions business TechGuys — généré et personnalisé par client via v0.

## Workflow

1. Ouvrir ce repo dans [v0](https://v0.app) depuis la branche `main`
2. Créer une nouvelle branche `v0/nom-client`
3. Coller le `prompt_MVP.md` en one-shot
4. Laisser v0 collecter les informations et générer la soumission
5. Déployer sur Vercel — chaque branche = une soumission client

## Stack

- [Next.js](https://nextjs.org) — App Router
- TypeScript + Tailwind CSS + shadcn/ui
- [Resend](https://resend.com) — envoi des courriels de signature
- [Vercel](https://vercel.com) — déploiement

## Variables d'environnement

À configurer dans Vercel → Settings → Environment Variables :

```
RESEND_API_KEY=re_...
RESEND_FROM_EMAIL=noreply@techguys.consulting
RESEND_NOTIFICATION_EMAIL=email-fallback@techguys.consulting
```

## Démarrage local

```bash
pnpm dev
```

Créer un fichier `.env.local` à la racine avec les variables ci-dessus.

---

## Backlog — Évolutions futures

| Priorité | Feature | Description |
|---|---|---|
| 🔴 Haute | **Intégration Stripe** | Permettre au client de payer directement après avoir signé (abonnement mensuel récurrent via Stripe Checkout ou Payment Element) |
| 🟠 Moyenne | **Multi-email CC notification** | Envoyer la notification de signature à plusieurs membres de l'équipe TechGuys via le champ `cc` de Resend |
| 🟠 Moyenne | **Dashboard soumissions** | Interface interne pour suivre l'état des soumissions (envoyées, signées, en attente) |
| 🟡 Basse | **PDF export** | Générer un PDF de la soumission en un clic pour envoi par email traditionnel |
| 🟡 Basse | **Aperçu client protégé** | Accès à la soumission via lien unique + mot de passe pour sécuriser l'envoi |
| 🟡 Basse | **Analytics de lecture** | Savoir si le client a ouvert la soumission, quelles slides il a consultées et combien de temps |
