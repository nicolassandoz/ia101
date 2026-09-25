// Fichier généré par scripts/generate-course-graph.mjs — ne pas modifier à la main.

export const courseGraphChapters = [
  {
    "id": "fondamentaux",
    "label": "Fondamentaux",
    "color": "#3f7898",
    "order": 0
  },
  {
    "id": "prompt-engineering",
    "label": "Prompt Engineering",
    "color": "#5f91aa",
    "order": 1
  },
  {
    "id": "context-engineering",
    "label": "Context Engineering",
    "color": "#7eb2d4",
    "order": 2
  },
  {
    "id": "ia-responsable",
    "label": "IA Responsable",
    "color": "#7e9f6d",
    "order": 3
  },
  {
    "id": "ressources",
    "label": "Ressources",
    "color": "#87929c",
    "order": 4
  }
]

export const courseGraphNodes = [
  {
    "id": "introduction",
    "href": "/introduction",
    "title": "IA 101 : Fondamentaux de l'intelligence artificielle",
    "label": "Accueil",
    "chapter": "fondamentaux",
    "group": "Introduction",
    "position": 0,
    "prerequisites": []
  },
  {
    "id": "ressources/le-projet",
    "href": "/ressources/le-projet",
    "title": "Le projet IA 101 : genèse, méthode et stack technique",
    "label": "Le Projet",
    "chapter": "fondamentaux",
    "group": "Introduction",
    "position": 1,
    "prerequisites": []
  },
  {
    "id": "fondamentaux/quest-ce-que-lia",
    "href": "/fondamentaux/quest-ce-que-lia",
    "title": "Qu'est-ce que l'IA ? Définition, exemples et limites",
    "label": "L'IA expliquée",
    "chapter": "fondamentaux",
    "group": "Introduction",
    "position": 2,
    "prerequisites": []
  },
  {
    "id": "fondamentaux/histoire-et-evolution",
    "href": "/fondamentaux/histoire-et-evolution",
    "title": "Histoire et évolution de l'IA : des origines à aujourd'hui",
    "label": "Histoire",
    "chapter": "fondamentaux",
    "group": "Introduction",
    "position": 3,
    "prerequisites": [
      "/fondamentaux/quest-ce-que-lia"
    ]
  },
  {
    "id": "fondamentaux/types-dia",
    "href": "/fondamentaux/types-dia",
    "title": "Les types d'IA : Machine Learning, Deep Learning et LLM",
    "label": "Types d'IA",
    "chapter": "fondamentaux",
    "group": "Introduction",
    "position": 4,
    "prerequisites": [
      "/fondamentaux/histoire-et-evolution"
    ]
  },
  {
    "id": "fondamentaux/modeles-de-langage",
    "href": "/fondamentaux/modeles-de-langage",
    "title": "Les grands modèles de langage : fonctionnement des LLM",
    "label": "Modèles LLM",
    "chapter": "fondamentaux",
    "group": "Concepts Clés",
    "position": 5,
    "prerequisites": [
      "/fondamentaux/types-dia"
    ]
  },
  {
    "id": "fondamentaux/tokens-et-embeddings",
    "href": "/fondamentaux/tokens-et-embeddings",
    "title": "Tokens et embeddings : le vocabulaire des modèles d'IA",
    "label": "Tokens & Embeddings",
    "chapter": "fondamentaux",
    "group": "Concepts Clés",
    "position": 6,
    "prerequisites": [
      "/fondamentaux/modeles-de-langage"
    ]
  },
  {
    "id": "fondamentaux/entrainement-et-fine-tuning",
    "href": "/fondamentaux/entrainement-et-fine-tuning",
    "title": "Entraînement et fine-tuning des modèles de langage",
    "label": "Entraînement",
    "chapter": "fondamentaux",
    "group": "Concepts Clés",
    "position": 7,
    "prerequisites": [
      "/fondamentaux/tokens-et-embeddings"
    ]
  },
  {
    "id": "fondamentaux/limites-et-hallucinations",
    "href": "/fondamentaux/limites-et-hallucinations",
    "title": "Limites des LLM : hallucinations et biais à connaître",
    "label": "Limites & Biais",
    "chapter": "fondamentaux",
    "group": "Concepts Clés",
    "position": 8,
    "prerequisites": [
      "/fondamentaux/entrainement-et-fine-tuning"
    ]
  },
  {
    "id": "prompt-engineering/introduction-au-prompt",
    "href": "/prompt-engineering/introduction-au-prompt",
    "title": "Introduction au prompt engineering : vos premiers pas",
    "label": "Introduction",
    "chapter": "prompt-engineering",
    "group": "Les Bases",
    "position": 0,
    "prerequisites": []
  },
  {
    "id": "prompt-engineering/anatomie-dun-prompt",
    "href": "/prompt-engineering/anatomie-dun-prompt",
    "title": "Anatomie d'un prompt : les quatre composantes essentielles",
    "label": "Anatomie",
    "chapter": "prompt-engineering",
    "group": "Les Bases",
    "position": 1,
    "prerequisites": [
      "/prompt-engineering/introduction-au-prompt"
    ]
  },
  {
    "id": "prompt-engineering/bonnes-pratiques",
    "href": "/prompt-engineering/bonnes-pratiques",
    "title": "Bonnes pratiques du prompt engineering en 10 règles",
    "label": "Bonnes Pratiques",
    "chapter": "prompt-engineering",
    "group": "Les Bases",
    "position": 2,
    "prerequisites": [
      "/prompt-engineering/anatomie-dun-prompt"
    ]
  },
  {
    "id": "prompt-engineering/few-shot-learning",
    "href": "/prompt-engineering/few-shot-learning",
    "title": "Few-shot learning : guider un LLM avec des exemples",
    "label": "Few-Shot",
    "chapter": "prompt-engineering",
    "group": "Techniques Avancées",
    "position": 3,
    "prerequisites": [
      "/prompt-engineering/bonnes-pratiques"
    ]
  },
  {
    "id": "prompt-engineering/chain-of-thought",
    "href": "/prompt-engineering/chain-of-thought",
    "title": "Chain-of-Thought : améliorer le raisonnement des LLM",
    "label": "Chain-of-Thought",
    "chapter": "prompt-engineering",
    "group": "Techniques Avancées",
    "position": 4,
    "prerequisites": [
      "/prompt-engineering/few-shot-learning"
    ]
  },
  {
    "id": "prompt-engineering/role-playing-et-personas",
    "href": "/prompt-engineering/role-playing-et-personas",
    "title": "Role-playing et personas : donner un rôle au modèle d'IA",
    "label": "Personas",
    "chapter": "prompt-engineering",
    "group": "Techniques Avancées",
    "position": 5,
    "prerequisites": [
      "/prompt-engineering/chain-of-thought"
    ]
  },
  {
    "id": "prompt-engineering/prompts-iteratifs",
    "href": "/prompt-engineering/prompts-iteratifs",
    "title": "Prompts itératifs : affiner vos résultats progressivement",
    "label": "Prompts Itératifs",
    "chapter": "prompt-engineering",
    "group": "Techniques Avancées",
    "position": 6,
    "prerequisites": [
      "/prompt-engineering/role-playing-et-personas"
    ]
  },
  {
    "id": "prompt-engineering/patterns-reutilisables",
    "href": "/prompt-engineering/patterns-reutilisables",
    "title": "Patterns de prompts réutilisables : votre bibliothèque prête à l'emploi",
    "label": "Patterns Réutilisables",
    "chapter": "prompt-engineering",
    "group": "Techniques Avancées",
    "position": 7,
    "prerequisites": [
      "/prompt-engineering/prompts-iteratifs"
    ]
  },
  {
    "id": "prompt-engineering/redaction-et-creation",
    "href": "/prompt-engineering/redaction-et-creation",
    "title": "Prompts pour la rédaction et la création de contenu",
    "label": "Rédaction",
    "chapter": "prompt-engineering",
    "group": "Cas d'Usage",
    "position": 8,
    "prerequisites": [
      "/prompt-engineering/patterns-reutilisables"
    ]
  },
  {
    "id": "prompt-engineering/analyse-et-synthese",
    "href": "/prompt-engineering/analyse-et-synthese",
    "title": "Prompts pour analyser et synthétiser l'information",
    "label": "Analyse",
    "chapter": "prompt-engineering",
    "group": "Cas d'Usage",
    "position": 9,
    "prerequisites": [
      "/prompt-engineering/redaction-et-creation"
    ]
  },
  {
    "id": "prompt-engineering/code-et-developpement",
    "href": "/prompt-engineering/code-et-developpement",
    "title": "Prompts pour le développement et l'assistance au code",
    "label": "Code",
    "chapter": "prompt-engineering",
    "group": "Cas d'Usage",
    "position": 10,
    "prerequisites": [
      "/prompt-engineering/analyse-et-synthese"
    ]
  },
  {
    "id": "context-engineering/quest-ce-que-le-contexte",
    "href": "/context-engineering/quest-ce-que-le-contexte",
    "title": "Context engineering : définition, rôle et composants",
    "label": "Le Contexte",
    "chapter": "context-engineering",
    "group": "Comprendre le Contexte",
    "position": 0,
    "prerequisites": [
      "/fondamentaux/modeles-de-langage"
    ]
  },
  {
    "id": "context-engineering/fenetre-de-contexte",
    "href": "/context-engineering/fenetre-de-contexte",
    "title": "Fenêtre de contexte des LLM : capacité et stratégies",
    "label": "Fenêtre",
    "chapter": "context-engineering",
    "group": "Comprendre le Contexte",
    "position": 1,
    "prerequisites": [
      "/fondamentaux/tokens-et-embeddings"
    ]
  },
  {
    "id": "context-engineering/gestion-de-la-memoire",
    "href": "/context-engineering/gestion-de-la-memoire",
    "title": "Gestion de la mémoire dans les conversations avec l'IA",
    "label": "Mémoire",
    "chapter": "context-engineering",
    "group": "Comprendre le Contexte",
    "position": 2,
    "prerequisites": [
      "/context-engineering/fenetre-de-contexte"
    ]
  },
  {
    "id": "context-engineering/structurer-le-contexte",
    "href": "/context-engineering/structurer-le-contexte",
    "title": "Structurer le contexte pour des réponses plus précises",
    "label": "Structuration",
    "chapter": "context-engineering",
    "group": "Techniques",
    "position": 3,
    "prerequisites": [
      "/context-engineering/gestion-de-la-memoire"
    ]
  },
  {
    "id": "context-engineering/rag-et-retrieval",
    "href": "/context-engineering/rag-et-retrieval",
    "title": "RAG : connecter un LLM à vos données personnalisées",
    "label": "RAG",
    "chapter": "context-engineering",
    "group": "Techniques",
    "position": 4,
    "prerequisites": [
      "/context-engineering/structurer-le-contexte"
    ]
  },
  {
    "id": "context-engineering/agents-et-outils",
    "href": "/context-engineering/agents-et-outils",
    "title": "Agents IA et outils : comment l'IA agit dans le monde",
    "label": "Agents",
    "chapter": "context-engineering",
    "group": "Techniques",
    "position": 5,
    "prerequisites": [
      "/context-engineering/rag-et-retrieval"
    ]
  },
  {
    "id": "context-engineering/optimisation-du-contexte",
    "href": "/context-engineering/optimisation-du-contexte",
    "title": "Optimiser le contexte pour économiser tokens et coût",
    "label": "Optimisation",
    "chapter": "context-engineering",
    "group": "Techniques",
    "position": 6,
    "prerequisites": [
      "/context-engineering/agents-et-outils"
    ]
  },
  {
    "id": "ia-responsable/empreinte-environnementale",
    "href": "/ia-responsable/empreinte-environnementale",
    "title": "L'empreinte environnementale de l'IA : d'où vient réellement l'impact ?",
    "label": "Empreinte environnementale",
    "chapter": "ia-responsable",
    "group": "Impact environnemental",
    "position": 0,
    "prerequisites": []
  },
  {
    "id": "ia-responsable/ordres-de-grandeur",
    "href": "/ia-responsable/ordres-de-grandeur",
    "title": "Ordres de grandeur : ce que consomme vraiment une requête IA",
    "label": "Ordres de grandeur",
    "chapter": "ia-responsable",
    "group": "Impact environnemental",
    "position": 1,
    "prerequisites": [
      "/ia-responsable/empreinte-environnementale"
    ]
  },
  {
    "id": "ia-responsable/sobriete-et-ecoconception",
    "href": "/ia-responsable/sobriete-et-ecoconception",
    "title": "Sobriété et écoconception : réduire l'impact de vos usages IA",
    "label": "Sobriété & écoconception",
    "chapter": "ia-responsable",
    "group": "Impact environnemental",
    "position": 2,
    "prerequisites": [
      "/ia-responsable/ordres-de-grandeur"
    ]
  },
  {
    "id": "ia-responsable/impact-cognitif",
    "href": "/ia-responsable/impact-cognitif",
    "title": "Impact cognitif : ce que l'IA fait à notre façon de penser",
    "label": "Impact cognitif",
    "chapter": "ia-responsable",
    "group": "Impacts humains et sociétaux",
    "position": 3,
    "prerequisites": [
      "/ia-responsable/sobriete-et-ecoconception"
    ]
  },
  {
    "id": "ia-responsable/biais-et-equite",
    "href": "/ia-responsable/biais-et-equite",
    "title": "Biais, équité et travail invisible derrière l'IA",
    "label": "Biais & équité",
    "chapter": "ia-responsable",
    "group": "Impacts humains et sociétaux",
    "position": 4,
    "prerequisites": [
      "/ia-responsable/impact-cognitif"
    ]
  },
  {
    "id": "ia-responsable/travail-et-societe",
    "href": "/ia-responsable/travail-et-societe",
    "title": "Travail, information, création : les effets sociétaux de l'IA",
    "label": "Travail & société",
    "chapter": "ia-responsable",
    "group": "Impacts humains et sociétaux",
    "position": 5,
    "prerequisites": [
      "/ia-responsable/biais-et-equite"
    ]
  },
  {
    "id": "ia-responsable/cadre-reglementaire",
    "href": "/ia-responsable/cadre-reglementaire",
    "title": "Cadre réglementaire : AI Act, RGPD, CSRD et normes volontaires",
    "label": "Cadre réglementaire",
    "chapter": "ia-responsable",
    "group": "Passer à l'action",
    "position": 6,
    "prerequisites": [
      "/ia-responsable/travail-et-societe"
    ]
  },
  {
    "id": "ia-responsable/demarche-ia-responsable",
    "href": "/ia-responsable/demarche-ia-responsable",
    "title": "Construire une démarche IA responsable dans votre organisation",
    "label": "Démarche & charte",
    "chapter": "ia-responsable",
    "group": "Passer à l'action",
    "position": 7,
    "prerequisites": [
      "/ia-responsable/cadre-reglementaire"
    ]
  },
  {
    "id": "ia-responsable/ressources-ia-responsable",
    "href": "/ia-responsable/ressources-ia-responsable",
    "title": "Ressources sur l'IA responsable : rapports, outils et références",
    "label": "Sources & références",
    "chapter": "ia-responsable",
    "group": "Passer à l'action",
    "position": 8,
    "prerequisites": []
  },
  {
    "id": "ressources/glossaire",
    "href": "/ressources/glossaire",
    "title": "Glossaire IA : les termes essentiels du cours IA 101",
    "label": "Glossaire",
    "chapter": "ressources",
    "group": "Références",
    "position": 0,
    "prerequisites": []
  },
  {
    "id": "ressources/outils-et-plateformes",
    "href": "/ressources/outils-et-plateformes",
    "title": "Outils et plateformes IA : guide pratique de sélection",
    "label": "Outils",
    "chapter": "ressources",
    "group": "Références",
    "position": 1,
    "prerequisites": []
  },
  {
    "id": "ressources/aller-plus-loin",
    "href": "/ressources/aller-plus-loin",
    "title": "Approfondir l'IA : cours en ligne, lectures et communautés",
    "label": "Aller Plus Loin",
    "chapter": "ressources",
    "group": "Références",
    "position": 2,
    "prerequisites": []
  },
  {
    "id": "ressources/nouveautes",
    "href": "/ressources/nouveautes",
    "title": "Nouveautés : les mises à jour du cours IA 101",
    "label": "Nouveautés",
    "chapter": "ressources",
    "group": "Références",
    "position": 3,
    "prerequisites": []
  }
]

export const courseGraphEdges = [
  {
    "source": "fondamentaux/quest-ce-que-lia",
    "target": "fondamentaux/histoire-et-evolution"
  },
  {
    "source": "fondamentaux/histoire-et-evolution",
    "target": "fondamentaux/types-dia"
  },
  {
    "source": "fondamentaux/types-dia",
    "target": "fondamentaux/modeles-de-langage"
  },
  {
    "source": "fondamentaux/modeles-de-langage",
    "target": "fondamentaux/tokens-et-embeddings"
  },
  {
    "source": "fondamentaux/tokens-et-embeddings",
    "target": "fondamentaux/entrainement-et-fine-tuning"
  },
  {
    "source": "fondamentaux/entrainement-et-fine-tuning",
    "target": "fondamentaux/limites-et-hallucinations"
  },
  {
    "source": "prompt-engineering/introduction-au-prompt",
    "target": "prompt-engineering/anatomie-dun-prompt"
  },
  {
    "source": "prompt-engineering/anatomie-dun-prompt",
    "target": "prompt-engineering/bonnes-pratiques"
  },
  {
    "source": "prompt-engineering/bonnes-pratiques",
    "target": "prompt-engineering/few-shot-learning"
  },
  {
    "source": "prompt-engineering/few-shot-learning",
    "target": "prompt-engineering/chain-of-thought"
  },
  {
    "source": "prompt-engineering/chain-of-thought",
    "target": "prompt-engineering/role-playing-et-personas"
  },
  {
    "source": "prompt-engineering/role-playing-et-personas",
    "target": "prompt-engineering/prompts-iteratifs"
  },
  {
    "source": "prompt-engineering/prompts-iteratifs",
    "target": "prompt-engineering/patterns-reutilisables"
  },
  {
    "source": "prompt-engineering/patterns-reutilisables",
    "target": "prompt-engineering/redaction-et-creation"
  },
  {
    "source": "prompt-engineering/redaction-et-creation",
    "target": "prompt-engineering/analyse-et-synthese"
  },
  {
    "source": "prompt-engineering/analyse-et-synthese",
    "target": "prompt-engineering/code-et-developpement"
  },
  {
    "source": "fondamentaux/modeles-de-langage",
    "target": "context-engineering/quest-ce-que-le-contexte"
  },
  {
    "source": "fondamentaux/tokens-et-embeddings",
    "target": "context-engineering/fenetre-de-contexte"
  },
  {
    "source": "context-engineering/fenetre-de-contexte",
    "target": "context-engineering/gestion-de-la-memoire"
  },
  {
    "source": "context-engineering/gestion-de-la-memoire",
    "target": "context-engineering/structurer-le-contexte"
  },
  {
    "source": "context-engineering/structurer-le-contexte",
    "target": "context-engineering/rag-et-retrieval"
  },
  {
    "source": "context-engineering/rag-et-retrieval",
    "target": "context-engineering/agents-et-outils"
  },
  {
    "source": "context-engineering/agents-et-outils",
    "target": "context-engineering/optimisation-du-contexte"
  },
  {
    "source": "ia-responsable/empreinte-environnementale",
    "target": "ia-responsable/ordres-de-grandeur"
  },
  {
    "source": "ia-responsable/ordres-de-grandeur",
    "target": "ia-responsable/sobriete-et-ecoconception"
  },
  {
    "source": "ia-responsable/sobriete-et-ecoconception",
    "target": "ia-responsable/impact-cognitif"
  },
  {
    "source": "ia-responsable/impact-cognitif",
    "target": "ia-responsable/biais-et-equite"
  },
  {
    "source": "ia-responsable/biais-et-equite",
    "target": "ia-responsable/travail-et-societe"
  },
  {
    "source": "ia-responsable/travail-et-societe",
    "target": "ia-responsable/cadre-reglementaire"
  },
  {
    "source": "ia-responsable/cadre-reglementaire",
    "target": "ia-responsable/demarche-ia-responsable"
  }
]
