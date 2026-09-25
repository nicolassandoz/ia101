import { readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const docs = JSON.parse(readFileSync(join(root, "docs.json"), "utf8"))

const palette = {
  Fondamentaux: "#3f7898",
  "Prompt Engineering": "#5f91aa",
  "Context Engineering": "#7eb2d4",
  "IA Responsable": "#7e9f6d",
  Ressources: "#87929c",
}

const slugify = (value) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")

const readFrontmatterValue = (frontmatter, key) => {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*["']?(.+?)["']?\\s*$`, "m"))
  return match ? match[1].replace(/["']$/, "") : ""
}

const normalizeHref = (href) => href.split("#")[0].replace(/\/$/, "")

const chapters = docs.navigation.tabs.map((tab, index) => ({
  id: slugify(tab.tab),
  label: tab.tab,
  color: palette[tab.tab] ?? "#7eb2d4",
  order: index,
}))

const nodes = []

for (const tab of docs.navigation.tabs) {
  const chapterId = slugify(tab.tab)
  let chapterPosition = 0

  for (const group of tab.groups) {
    for (const page of group.pages) {
      const filePath = join(root, `${page}.mdx`)
      const content = readFileSync(filePath, "utf8")
      const frontmatter = content.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? ""
      if (readFrontmatterValue(frontmatter, "graph") === "false") continue

      const href = `/${page}`
      const prerequisiteLine = content
        .split("\n")
        .slice(0, 18)
        .find((line) => line.includes("**Prérequis**"))
      const prerequisiteHrefs = prerequisiteLine
        ? [...prerequisiteLine.matchAll(/\]\((\/[^)#]+)(?:#[^)]+)?\)/g)].map((match) =>
            normalizeHref(match[1]),
          )
        : []

      nodes.push({
        id: page,
        href,
        title: readFrontmatterValue(frontmatter, "title"),
        label: readFrontmatterValue(frontmatter, "sidebarTitle"),
        chapter: chapterId,
        group: group.group,
        position: chapterPosition,
        prerequisites: prerequisiteHrefs,
      })

      chapterPosition += 1
    }
  }
}

const nodeByHref = new Map(nodes.map((node) => [node.href, node]))
const edges = []

for (const node of nodes) {
  for (const prerequisiteHref of node.prerequisites) {
    const prerequisite = nodeByHref.get(prerequisiteHref)
    if (!prerequisite) {
      throw new Error(
        `Prérequis introuvable pour ${node.href} : ${prerequisiteHref}`,
      )
    }

    edges.push({ source: prerequisite.id, target: node.id })
  }
}

const output = `// Fichier généré par scripts/generate-course-graph.mjs — ne pas modifier à la main.\n\nexport const courseGraphChapters = ${JSON.stringify(chapters, null, 2)}\n\nexport const courseGraphNodes = ${JSON.stringify(nodes, null, 2)}\n\nexport const courseGraphEdges = ${JSON.stringify(edges, null, 2)}\n`

const outputPath = join(root, "snippets", "course-graph-data.jsx")
writeFileSync(outputPath, output, "utf8")

console.log(`Graphe généré : ${nodes.length} pages, ${edges.length} prérequis.`)
