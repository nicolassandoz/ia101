# Registre de fraîcheur — IA 101

Document interne de maintenance (non publié dans la navigation Mintlify). Il trace, pour chaque fait périssable cité sur le site, la source qui l'atteste et sa date de dernière vérification. Alimenté par les briefs de l'agent `veilleur-ia101` et mis à jour par `pedagogue-ia101` après chaque correction appliquée.

## Comment l'utiliser

- Une ligne par fait vérifiable (nom de modèle, fenêtre de contexte, échéance réglementaire, chiffre d'impact, outil cité...), pas par page.
- `Prochaine revue` : échéance indicative, pas une alarme automatique. Sert de repère lors d'une passe de veille.
- Ne liste que les faits déjà contrôlés au moins une fois. Un `À VÉRIFIER` du brief de veille n'entre ici qu'une fois tranché.

## Registre

| Fait vérifié | Source officielle | Dernière vérification | Prochaine revue | Page concernée |
|---|---|---|---|---|
| Meta remplace Llama par Muse Spark (modèle fermé) comme produit phare depuis avril 2026 ; Muse Spark 1.2 en date du 10/08/2026 | ai.meta.com/blog — Introducing Muse Spark (9 juillet 2026) ; The Register (6 août 2026) ; UPI (10 août 2026) | 2026-08-11 | 2026-11 | `fondamentaux/types-dia.mdx`, `context-engineering/fenetre-de-contexte.mdx`, `fondamentaux/modeles-de-langage.mdx`, `ressources/glossaire.mdx` |
| Calendrier AI Act (Digital Omnibus, règlement UE 2026/1744) et échéances associées, inchangés depuis le 04/08/2026 | Journal officiel de l'UE, lignes directrices Commission sur l'art. 50 (20/07/2026) | 2026-08-11 | 2026-11 | `ia-responsable/cadre-reglementaire.mdx` |
| IEA — suivi *Key Questions on Energy and AI* : 485 TWh consommés par les datacenters en 2025 (+17 %), IA +50 % | iea.org/reports/key-questions-on-energy-and-ai (16 avril 2026) | 2026-08-11 | 2027-04 | `ia-responsable/empreinte-environnementale.mdx`, `ia-responsable/ressources-ia-responsable.mdx` |
| Chiffres d'impact Google (0,24 Wh/prompt, août 2025) et Mistral (1,14 gCO₂e/45 mL pour 400 tokens, juillet 2025) : toujours les seules mesures primaires disponibles, aucune nouvelle publication OpenAI/Anthropic | Google (août 2025), Mistral (juillet 2025) | 2026-08-11 | 2027-02 | `ia-responsable/ordres-de-grandeur.mdx` |
| GPT-5.7 ("Doug") dévoilé le 09/08/2026, lancement annoncé avant novembre 2026, non confirmé sur source primaire OpenAI — GPT-5.6 reste le modèle correct à citer | Agrégat presse spécialisée (à confirmer) | 2026-08-11 | 2026-09 (surveillance) | `fondamentaux/modeles-de-langage.mdx`, `context-engineering/fenetre-de-contexte.mdx`, `ressources/outils-et-plateformes.mdx`, `ressources/glossaire.mdx` |
| Tableau des fenêtres de contexte (GPT-5.6, Claude Fable 5/Opus 5/Sonnet 5/Haiku 4.5, Gemini 3.1 Pro/3.6 Flash, DeepSeek V4, Grok 4.5, Mistral Large 3) vérifié modèle par modèle, exact hors ligne Llama | Sources officielles fournisseurs (voir brief de veille du 2026-08-11) | 2026-08-11 | 2026-11 | `context-engineering/fenetre-de-contexte.mdx` |
