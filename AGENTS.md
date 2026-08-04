# Instructions du projet : IA 101

## À propos du projet

- Ce projet est un site de documentation éducatif (IA 101) construit sur [Mintlify](https://mintlify.com).
- L'objectif est d'expliquer les fondamentaux de l'IA (LLM, Prompt Engineering, Context Engineering) de manière accessible et pédagogique.
- Les pages sont écrites en `.mdx` (Markdown enrichi de composants React) avec un frontmatter YAML.
- La configuration globale est dans `docs.json`.

## Rôles des Agents (Veilleur & Pédagogue)

- Ce projet utilise des agents (voir `.claude/agents/`) pour s'auto-actualiser.
- Lors de la création ou la modification de contenu, il est impératif de respecter le style existant.
- Ne modifie pas la structure de navigation (`docs.json` -> navigation) sans la validation explicite de l'utilisateur.

## Préférences de style et ton

- **Ton** : Adopte un ton pédagogique, encourageant et clair.
- **Voix** : Utilise la voix active et **vouvoie le lecteur** ("vous", "votre"). C'est la convention de tout le site : ne l'inverse jamais, même partiellement.
- **Exception** : à l'intérieur d'un exemple de prompt adressé au modèle, le tutoiement reste admis ("Explique-moi comment tu arrives à ce résultat"). Il s'adresse alors à l'IA, pas au lecteur.
- **Clarté** : Garde des phrases courtes. Une idée par phrase.
- **Titres** : Utilise une casse de phrase (majuscule uniquement au début).
- **Mise en valeur** : Mets en gras les éléments d'interface utilisateur ou les concepts très importants.
- **Typographie** : Formate le code (noms de fichiers, commandes, chemins, références de code) avec des backticks (`code`).

## Délimitation du contenu

- Le site s'adresse à des apprenants cherchant à comprendre l'IA de manière pratique. 
- Évite le jargon trop mathématique sauf s'il est strictement nécessaire (et dans ce cas, explique-le).
- Conserve un équilibre entre théorie (fonctionnement) et pratique (exercices, prompts à tester).
- Les modèles cités doivent toujours être les plus récents possibles (ex: GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro).
