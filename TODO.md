# TODO : IA 101

Backlog des améliorations identifiées lors de l'analyse du 2026-07-24. Coché = fait.

## 1. Fraîcheur du contenu (priorité haute)

Le contenu a été généré en une fois et référence déjà des modèles dépassés (GPT-4/4o, Claude 3/3.5, Gemini 1.5). Sur un sujet qui bouge aussi vite, c'est le risque n°1 pour un site qui vise à faire autorité.

- [ ] Auditer toutes les références de modèles et les mettre à jour (voir agent `pedagogue-ia101` ci-dessous) :
  - `fondamentaux/modeles-de-langage.mdx`, `fondamentaux/tokens-et-embeddings.mdx`, `fondamentaux/types-dia.mdx`
  - `context-engineering/fenetre-de-contexte.mdx` (tableau des tailles de contexte)
  - `prompt-engineering/chain-of-thought.mdx`
  - `ressources/outils-et-plateformes.mdx`, `ressources/glossaire.mdx`
- [ ] Ajouter une leçon sur le **Model Context Protocol (MCP)** et les agents outillés dans `context-engineering/` (absent du cours alors que c'est central en 2026)
- [ ] Ajouter une leçon sur les **modèles de raisonnement** (extended thinking / chain-of-thought natif) dans `fondamentaux/` ou `prompt-engineering/`
- [ ] Ajouter un indicateur de dernière révision par page (champ frontmatter `lastUpdated` ou mention en bas de page)
- [ ] Créer une page "Nouveautés" / changelog pédagogique listant les mises à jour majeures du cours

## 2. Engagement & découvrabilité

Le site donne du contenu gratuit mais n'a aucun mécanisme pour transformer les lecteurs en audience durable.

- [x] Renseigner `footer.socials` dans `docs.json` → site + LinkedIn ajoutés (2026-08-01)
- [x] Ajouter une page "À propos" → page `ressources/le-projet.mdx` créée (genèse, mention IA, stack), placée en haut de la sidebar (2026-08-01). NB : `images/nicolas-sandoz.png` reste disponible mais non utilisée sur cette page
- [x] Ajouter un moyen de capter les lecteurs → lien LinkedIn ajouté au footer et à la page "Le Projet" (2026-08-01). Newsletter non mise en place
- [ ] Ajouter des CTA de partage/feedback en fin de leçon (Mintlify supporte le feedback de page)

## 2 bis. Nouvelle partie « IA Responsable » (2026-08-04)

Quatrième onglet ajouté après Context Engineering : 9 pages dans `ia-responsable/`, réparties en 3 groupes (impact environnemental, impacts humains et sociétaux, passer à l'action). Sources primaires vérifiées à la date du 2026-08-04.

- [ ] Revoir `ia-responsable/cadre-reglementaire.mdx` à chaque évolution du droit — page la plus périssable du site (calendrier AI Act post-Digital Omnibus, seuils CSRD). Cible de veille prioritaire pour `veilleur-ia101`
- [ ] Vérifier périodiquement les chiffres de `ia-responsable/ordres-de-grandeur.mdx` (mesures Google/Mistral, projections IEA) ; ajouter les nouvelles publications d'ACV constructeur quand elles sortent
- [ ] Envisager de déplacer le groupe « Ressources » hors de l'onglet Context Engineering (il y est désormais coincé avant un onglet suivant) — nécessite validation utilisateur, cf. `AGENTS.md`
- [ ] Trancher la question du tutoiement/vouvoiement : `AGENTS.md` prescrit « tu », le contenu réel emploie « vous » partout (y compris la nouvelle partie, alignée sur l'existant)

## 3. Pédagogie

- [ ] Ajouter un quiz ou 2-3 questions de vérification en fin de chapitre pour ancrer l'apprentissage
- [ ] Indiquer un niveau de difficulté / prérequis par section (certaines pages de `context-engineering/` supposent déjà les fondamentaux acquis)
- [x] Exercices pratiques "à essayer maintenant" avec des prompts copiables → `prompt-engineering/patterns-reutilisables.mdx` (2026-07-24), + technique d'auto-évaluation ajoutée dans `prompts-iteratifs.mdx`

## 4. Technique / SEO

- [ ] Vérifier les liens externes cités (outils qui changent vite : Groq, PromptFlow, Helicone...)
- [ ] Configurer une image `og:image` par défaut dans `docs.json` pour le partage social
- [ ] Revoir `AGENTS.md`, encore le template Mintlify par défaut, non personnalisé (terminologie et bornes de contenu à remplir)

## 5. Process

- [x] Mettre en place une cadence de révision régulière → veille hebdomadaire automatisée (2026-08-01) : agent `veilleur-ia101` (veille, lecture seule) + routine Claude Code cloud du lundi matin qui orchestre `veilleur-ia101` puis `pedagogue-ia101` et ouvre une PR à revoir. Voir `.claude/agents/veilleur-ia101.md`
- [ ] Décider d'un rythme de publication de nouvelles leçons pour donner une raison de revenir sur le site
