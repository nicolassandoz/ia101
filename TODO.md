# TODO : IA 101

Backlog des améliorations identifiées lors de l'analyse du 2026-07-24. Coché = fait.

## 1. Fraîcheur du contenu (priorité haute)

Diagnostic mis à jour après l'audit `veilleur-ia101` du 2026-08-11 (voir `ressources/suivi-des-sources.md`). Les passes de veille des 2026-08-01/04/10 ont déjà corrigé la quasi-totalité des références de modèles ; le diagnostic initial ("le site référence GPT-4o/Claude 3.5/Gemini 1.5") n'est plus exact et ne doit pas relancer un audit inutile.

- [x] ~~Remplacer les références "Llama 4" par "Muse Spark" (Meta a abandonné Llama comme modèle vitrine en avril 2026)~~ → corrigé dans `fondamentaux/types-dia.mdx`, `context-engineering/fenetre-de-contexte.mdx`, `fondamentaux/modeles-de-langage.mdx`, `ressources/glossaire.mdx` par `pedagogue-ia101` (2026-08-11)
- [x] ~~Corriger `AGENTS.md:31` qui cite encore GPT-4o/Claude 3.5 Sonnet/Gemini 1.5 Pro comme "modèles récents"~~ → corrigé par `pedagogue-ia101` (2026-08-11)
- [x] ~~Ajouter une leçon sur le MCP et les agents outillés~~ → déjà couvert en profondeur dans `context-engineering/agents-et-outils.mdx` (MCP, A2A) + `ressources/glossaire.mdx`. Constaté obsolète lors de l'audit du 2026-08-11
- [x] ~~Ajouter une leçon sur les modèles de raisonnement~~ → déjà couvert dans `prompt-engineering/chain-of-thought.mdx`. Constaté obsolète lors de l'audit du 2026-08-11
- [x] ~~Actualiser le chiffre IEA dans `ia-responsable/empreinte-environnementale.mdx` avec le rapport de suivi d'avril 2026 (485 TWh en 2025, +17 %)~~ → corrigé, référence ajoutée aussi dans `ia-responsable/ressources-ia-responsable.mdx` par `pedagogue-ia101` (2026-08-11)
- [x] ~~Ajouter un indicateur de dernière révision par page~~ → décidé de ne pas l'ajouter (2026-08-11) : redondant avec la page Nouveautés et le registre de fraîcheur, aurait ajouté de la maintenance sur 33 pages sans valeur claire pour le lecteur
- [x] Créer une page "Nouveautés" / changelog pédagogique → `ressources/nouveautes.mdx` créée (2026-08-11), historique rétro-rempli depuis le lancement du cours (24/07/2026), ajoutée en fin du groupe « Références »
- [ ] Surveillance : GPT-5.7 ("Doug") dévoilé le 09/08/2026, lancement annoncé avant novembre 2026 — ne rien changer tant que non confirmé sur source primaire OpenAI

## 2. Engagement & découvrabilité

Le site donne du contenu gratuit mais n'a aucun mécanisme pour transformer les lecteurs en audience durable.

- [x] Renseigner `footer.socials` dans `docs.json` → site + LinkedIn ajoutés (2026-08-01)
- [x] Ajouter une page "À propos" → page `ressources/le-projet.mdx` créée (genèse, mention IA, stack), placée en haut de la sidebar (2026-08-01). NB : `images/nicolas-sandoz.png` reste disponible mais non utilisée sur cette page
- [x] Ajouter un moyen de capter les lecteurs → lien LinkedIn ajouté au footer et à la page "Le Projet" (2026-08-01). Newsletter non mise en place
- [x] Ajouter un CTA de feedback en fin de leçon → `docs.json` a déjà `feedback.thumbsRating: true` (widget natif Mintlify actif sur toutes les pages), constaté lors de la relecture du 2026-08-11. Un CTA de partage dédié reste à considérer si besoin, mais le feedback de base est couvert

## 2 bis. Nouvelle partie « IA Responsable » (2026-08-04)

Quatrième onglet ajouté après Context Engineering : 9 pages dans `ia-responsable/`, réparties en 3 groupes (impact environnemental, impacts humains et sociétaux, passer à l'action). Sources primaires vérifiées à la date du 2026-08-04.

- [x] Faire de `ia-responsable/cadre-reglementaire.mdx` et `ia-responsable/ordres-de-grandeur.mdx` des cibles de veille prioritaires → périmètre n°3 ajouté à `veilleur-ia101`, avec exigence de sources primaires sur le réglementaire (2026-08-04)
- [x] Sortir le groupe « Ressources » de l'onglet Context Engineering → onglet « Ressources » autonome en fin de navigation (2026-08-04). La page de sources du chapitre IA Responsable a été renommée « Sources & références » pour éviter la confusion
- [x] Trancher tutoiement/vouvoiement → **vouvoiement**, `AGENTS.md` corrigé (il prescrivait « tu » à tort). Le contenu était déjà conforme ; le tutoiement reste admis à l'intérieur des exemples de prompts, où il s'adresse au modèle (2026-08-04)

## 3. Pédagogie

- [x] Ajouter un quiz de fin de chapitre pour ancrer l'apprentissage → un `<Accordion>` "Testez vos connaissances" ajouté sur les 33 leçons des 4 chapitres (2026-08-11)
- [x] Indiquer un niveau de difficulté / prérequis par section → bloc `<Info>` (Niveau · Prérequis · Temps de lecture) ajouté en tête des 33 leçons des 4 chapitres (2026-08-11)
- [x] Exercices pratiques "à essayer maintenant" avec des prompts copiables → `prompt-engineering/patterns-reutilisables.mdx` (2026-07-24), + technique d'auto-évaluation ajoutée dans `prompts-iteratifs.mdx`

## 4. Technique / SEO

- [x] Vérifier les liens externes cités → 79 URLs du site testées (HTTP HEAD/GET) le 2026-08-11 : toutes valides. Les 403/999 observés (openai.com, claude.ai, x.ai, iso.org, dl.acm.org, linkedin.com) sont des blocages anti-bot connus de ces domaines, pas des liens cassés
- [x] Configurer une image `og:image` par défaut dans `docs.json` pour le partage social → déjà en place (`seo.image`), constaté lors de la relecture du 2026-08-11
- [x] Revoir `AGENTS.md` → déjà personnalisé (rôles des agents, ton, vouvoiement, bornes de contenu), ce n'est plus le template par défaut. Constaté lors de la relecture du 2026-08-11

## 5. Process

- [x] Mettre en place une cadence de révision régulière → veille hebdomadaire automatisée (2026-08-01) : agent `veilleur-ia101` (veille, lecture seule) + routine Claude Code cloud du lundi matin qui orchestre `veilleur-ia101` puis `pedagogue-ia101` et ouvre une PR à revoir. Voir `.claude/agents/veilleur-ia101.md`
- [ ] Décider d'un rythme de publication de nouvelles leçons pour donner une raison de revenir sur le site
