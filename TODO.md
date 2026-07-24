# TODO — IA 101

Backlog des améliorations identifiées lors de l'analyse du 2026-07-24. Coché = fait.

## 1. Fraîcheur du contenu (priorité haute)

Le contenu a été généré en une fois et référence déjà des modèles dépassés (GPT-4/4o, Claude 3/3.5, Gemini 1.5). Sur un sujet qui bouge aussi vite, c'est le risque n°1 pour un site qui vise à faire autorité.

- [ ] Auditer toutes les références de modèles et les mettre à jour (voir agent `pedagogue-ia101` ci-dessous) :
  - `fondamentaux/modeles-de-langage.mdx`, `fondamentaux/tokens-et-embeddings.mdx`, `fondamentaux/types-dia.mdx`
  - `context-engineering/fenetre-de-contexte.mdx` (tableau des tailles de contexte)
  - `prompt-engineering/chain-of-thought.mdx`
  - `ressources/outils-et-plateformes.mdx`, `ressources/glossaire.mdx`
- [ ] Ajouter une leçon sur le **Model Context Protocol (MCP)** et les agents outillés dans `context-engineering/` — absent du cours alors que c'est central en 2026
- [ ] Ajouter une leçon sur les **modèles de raisonnement** (extended thinking / chain-of-thought natif) dans `fondamentaux/` ou `prompt-engineering/`
- [ ] Ajouter un indicateur de dernière révision par page (champ frontmatter `lastUpdated` ou mention en bas de page)
- [ ] Créer une page "Nouveautés" / changelog pédagogique listant les mises à jour majeures du cours

## 2. Engagement & découvrabilité

Le site donne du contenu gratuit mais n'a aucun mécanisme pour transformer les lecteurs en audience durable.

- [ ] Renseigner `footer.socials` dans `docs.json` (actuellement vide)
- [ ] Ajouter une page "À propos" — `images/nicolas-sandoz.png` existe déjà mais n'est utilisée nulle part
- [ ] Ajouter un moyen de capter les lecteurs (newsletter, lien LinkedIn/communauté) en fin de parcours (`introduction.mdx` ou `ressources/aller-plus-loin.mdx`)
- [ ] Ajouter des CTA de partage/feedback en fin de leçon (Mintlify supporte le feedback de page)

## 3. Pédagogie

- [ ] Ajouter un quiz ou 2-3 questions de vérification en fin de chapitre pour ancrer l'apprentissage
- [ ] Indiquer un niveau de difficulté / prérequis par section (certaines pages de `context-engineering/` supposent déjà les fondamentaux acquis)
- [x] Exercices pratiques "à essayer maintenant" avec des prompts copiables → `prompt-engineering/patterns-reutilisables.mdx` (2026-07-24), + technique d'auto-évaluation ajoutée dans `prompts-iteratifs.mdx`

## 4. Technique / SEO

- [ ] Vérifier les liens externes cités (outils qui changent vite : Groq, PromptFlow, Helicone...)
- [ ] Configurer une image `og:image` par défaut dans `docs.json` pour le partage social
- [ ] Revoir `AGENTS.md` — c'est encore le template Mintlify par défaut, non personnalisé (terminologie et bornes de contenu à remplir)

## 5. Process

- [ ] Mettre en place une cadence de révision régulière (mensuelle ou trimestrielle) avec l'agent `pedagogue-ia101` (voir `.claude/agents/pedagogue-ia101.md`)
- [ ] Décider d'un rythme de publication de nouvelles leçons pour donner une raison de revenir sur le site
