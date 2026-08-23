# IA 101

Un cours en ligne gratuit pour comprendre et utiliser l'intelligence artificielle avec méthode. Le site est construit avec [Mintlify](https://mintlify.com) et publié depuis ce dépôt GitHub.

## Ce que vous trouverez dans le cours

- **Fondamentaux** : histoire de l'IA, modèles de langage, tokens, entraînement et limites.
- **Prompt Engineering** : structure d'un prompt, techniques réutilisables et cas d'usage concrets.
- **Context Engineering** : fenêtre de contexte, RAG, mémoire, agents et outils.
- **IA Responsable** : impacts environnementaux, humains, réglementaires et pratiques de mise en œuvre.
- **Ressources** : glossaire, outils, pistes pour aller plus loin et historique des mises à jour.

Les leçons sont écrites en MDX et privilégient des explications courtes, des exemples testables et des quiz de fin de page.

## Structure du projet

```text
.
├── fondamentaux/          # Bases de l'IA
├── prompt-engineering/    # Méthodes de prompting
├── context-engineering/   # Gestion et exploitation du contexte
├── ia-responsable/        # Impacts et pratiques responsables
├── ressources/            # Glossaire, sources et nouveautés
├── images/                # Visuels du site
├── docs.json              # Configuration et navigation Mintlify
└── TODO.md                # Backlog éditorial et technique
```

## Prévisualiser le site en local

Prérequis : Node.js récent.

```bash
npm install -g mint
mint dev
```

Ouvrez ensuite [http://localhost:3000](http://localhost:3000).

## Contribuer au contenu

1. Créez ou modifiez une page `.mdx` dans le chapitre concerné.
2. Respectez les consignes de rédaction dans [`AGENTS.md`](AGENTS.md) : ton pédagogique, vouvoiement, phrases courtes et sources explicites pour les faits périssables.
3. Vérifiez la page avec `mint dev`.
4. Mettez à jour [`ressources/suivi-des-sources.md`](ressources/suivi-des-sources.md) lorsqu'une information vérifiable évolue.
5. Ajoutez un changement significatif dans [`ressources/nouveautes.mdx`](ressources/nouveautes.mdx).

Ne modifiez pas la navigation de `docs.json` sans validation éditoriale explicite.

## Maintenir le cours à jour

Le projet suit une veille hebdomadaire des modèles, outils, chiffres et références réglementaires. Les faits contrôlés et leur date de revue sont centralisés dans [`ressources/suivi-des-sources.md`](ressources/suivi-des-sources.md).

Les évolutions visibles pour les lecteurs sont recensées dans la page [Nouveautés](ressources/nouveautes.mdx).

## Publication

Les changements fusionnés dans la branche `main` sont déployés automatiquement par Mintlify, via l'intégration GitHub configurée pour le projet.

## Licence

Consultez [`LICENSE`](LICENSE) pour les conditions d'utilisation du contenu.
