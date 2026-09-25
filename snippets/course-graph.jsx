export const CourseGraph = ({ chapters = [], nodes = [], edges = [] }) => {
  const [activeChapter, setActiveChapter] = useState("all")
  const [focusedNode, setFocusedNode] = useState(null)

  const wrapGraphLabel = (label, maxCharacters = 22) => {
    const words = label.split(" ")
    const lines = []

    for (const word of words) {
      const currentLine = lines.at(-1)
      if (!currentLine || `${currentLine} ${word}`.length > maxCharacters) {
        lines.push(word)
      } else {
        lines[lines.length - 1] = `${currentLine} ${word}`
      }
    }

    if (lines.length <= 2) return lines

    const secondLine = lines.slice(1).join(" ")
    return [lines[0], `${secondLine.slice(0, maxCharacters - 1).trimEnd()}…`]
  }

  const nodeWidth = 224
  const nodeHeight = 54
  const rowGap = 18
  const chartWidth = 1420
  const chartPadding = 34
  const columnGap =
    chapters.length > 1
      ? (chartWidth - chartPadding * 2 - nodeWidth * chapters.length) /
        (chapters.length - 1)
      : 0
  const maxRows = Math.max(1, ...chapters.map((chapter) => nodes.filter((node) => node.chapter === chapter.id).length))
  const chartHeight = 112 + maxRows * (nodeHeight + rowGap)

  const chapterById = useMemo(
    () => new Map(chapters.map((chapter) => [chapter.id, chapter])),
    [chapters],
  )
  const nodeById = useMemo(() => new Map(nodes.map((node) => [node.id, node])), [nodes])
  const positions = useMemo(() => {
    const nextPositions = new Map()

    for (const node of nodes) {
      const chapterIndex = chapters.findIndex((chapter) => chapter.id === node.chapter)
      nextPositions.set(node.id, {
        x: chartPadding + chapterIndex * (nodeWidth + columnGap),
        y: 94 + node.position * (nodeHeight + rowGap),
      })
    }

    return nextPositions
  }, [chapters, nodes, columnGap])

  const relatedNodeIds = useMemo(() => {
    if (!focusedNode) return new Set()

    const related = new Set([focusedNode])
    for (const edge of edges) {
      if (edge.source === focusedNode) related.add(edge.target)
      if (edge.target === focusedNode) related.add(edge.source)
    }
    return related
  }, [edges, focusedNode])

  const visibleChapters =
    activeChapter === "all"
      ? chapters
      : chapters.filter((chapter) => chapter.id === activeChapter)

  const nodeOpacity = (node) => {
    if (focusedNode) return relatedNodeIds.has(node.id) ? 1 : 0.16
    if (activeChapter !== "all" && node.chapter !== activeChapter) return 0.12
    return 1
  }

  const edgeOpacity = (edge) => {
    if (focusedNode) {
      return edge.source === focusedNode || edge.target === focusedNode ? 0.95 : 0.05
    }

    if (activeChapter !== "all") {
      const source = nodeById.get(edge.source)
      const target = nodeById.get(edge.target)
      return source?.chapter === activeChapter || target?.chapter === activeChapter ? 0.72 : 0.04
    }

    return 0.34
  }

  const edgePath = (edge) => {
    const source = positions.get(edge.source)
    const target = positions.get(edge.target)
    if (!source || !target) return ""

    const sourceNode = nodeById.get(edge.source)
    const targetNode = nodeById.get(edge.target)

    if (sourceNode?.chapter === targetNode?.chapter) {
      const x = source.x + nodeWidth / 2
      const startY = source.y + nodeHeight
      const endY = target.y
      return `M ${x} ${startY} C ${x} ${startY + 18}, ${x} ${endY - 18}, ${x} ${endY}`
    }

    const startX = source.x + nodeWidth
    const startY = source.y + nodeHeight / 2
    const endX = target.x
    const endY = target.y + nodeHeight / 2
    const middleX = (startX + endX) / 2
    return `M ${startX} ${startY} C ${middleX} ${startY}, ${middleX} ${endY}, ${endX} ${endY}`
  }

  if (!chapters.length || !nodes.length) {
    return (
      <div className="not-prose rounded-xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
        La carte du cours ne contient encore aucune page.
      </div>
    )
  }

  return (
    <div className="not-prose my-8">
      <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="m-0 text-sm font-semibold text-slate-950 dark:text-white">
            {nodes.length} pages · {edges.length} relations de prérequis
          </p>
          <p className="mt-1 mb-0 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
            Sélectionnez un chapitre, puis survolez une leçon pour isoler ses connexions.
          </p>
        </div>

        <div className="flex flex-wrap gap-2" aria-label="Filtrer la carte par chapitre">
          <button
            type="button"
            aria-pressed={activeChapter === "all"}
            onClick={() => setActiveChapter("all")}
            style={
              activeChapter === "all"
                ? {
                    backgroundColor: "#7eb2d4",
                    borderColor: "#7eb2d4",
                    color: "#001e32",
                  }
                : undefined
            }
            className={
              activeChapter === "all"
                ? "rounded-full border-2 border-sky-600 px-3 py-2 text-xs font-semibold text-sky-700 transition-transform active:scale-95 dark:border-sky-400 dark:text-sky-300"
                : "rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 transition-colors hover:border-slate-400 hover:text-slate-950 active:scale-95 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-white"
            }
          >
            Tout le cours
          </button>

          {chapters.map((chapter) => (
            <button
              key={chapter.id}
              type="button"
              aria-pressed={activeChapter === chapter.id}
              onClick={() => setActiveChapter(chapter.id)}
              style={
                activeChapter === chapter.id
                  ? {
                      backgroundColor: "#7eb2d4",
                      borderColor: "#7eb2d4",
                      color: "#001e32",
                    }
                  : undefined
              }
              className={
                activeChapter === chapter.id
                  ? "inline-flex items-center gap-2 rounded-full border-2 border-sky-600 px-3 py-2 text-xs font-semibold text-sky-700 transition-transform active:scale-95 dark:border-sky-400 dark:text-sky-300"
                  : "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 transition-colors hover:border-slate-400 hover:text-slate-950 active:scale-95 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-white"
              }
            >
              <svg width="8" height="8" viewBox="0 0 8 8" aria-hidden="true">
                <circle cx="4" cy="4" r="4" fill={chapter.color} />
              </svg>
              {chapter.label}
            </button>
          ))}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {activeChapter === "all"
          ? "Tous les chapitres sont mis en évidence."
          : `Le chapitre ${chapterById.get(activeChapter)?.label} est mis en évidence.`}
      </p>

      <div className="hidden overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50 shadow-sm md:block dark:border-slate-800 dark:bg-slate-950">
        <svg
          role="navigation"
          aria-labelledby="course-graph-title course-graph-description"
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          width="100%"
          className="h-auto min-w-[1280px]"
        >
          <title id="course-graph-title">Carte des leçons du cours IA 101</title>
          <desc id="course-graph-description">
            Chaque colonne représente un chapitre. Les flèches relient un prérequis à la leçon qui en dépend.
          </desc>

          <defs>
            <marker
              id="course-graph-arrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="5"
              markerHeight="5"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
            </marker>
          </defs>

          {chapters.map((chapter, chapterIndex) => {
            const x = chartPadding + chapterIndex * (nodeWidth + columnGap)
            const chapterNodes = nodes.filter((node) => node.chapter === chapter.id)
            const opacity =
              activeChapter === "all" || activeChapter === chapter.id ? 1 : 0.2

            return (
              <g key={chapter.id} opacity={opacity} className="transition-opacity duration-300">
                <rect x={x} y="34" width="34" height="4" rx="2" fill={chapter.color} />
                <text
                  x={x}
                  y="59"
                  className="fill-slate-950 text-sm font-semibold dark:fill-white"
                >
                  {chapter.label}
                </text>
                <text
                  x={x}
                  y="78"
                  className="fill-slate-500 text-xs dark:fill-slate-400"
                >
                  {chapterNodes.length} {chapterNodes.length > 1 ? "pages" : "page"}
                </text>
              </g>
            )
          })}

          <g aria-hidden="true">
            {edges.map((edge) => (
              <path
                key={`${edge.source}-${edge.target}`}
                d={edgePath(edge)}
                fill="none"
                stroke="#94a3b8"
                strokeWidth={focusedNode ? 2.2 : 1.5}
                markerEnd="url(#course-graph-arrow)"
                opacity={edgeOpacity(edge)}
                className="transition-opacity duration-300"
              />
            ))}
          </g>

          {nodes.map((node) => {
            const position = positions.get(node.id)
            const chapter = chapterById.get(node.chapter)
            const labelLines = wrapGraphLabel(node.label)

            return (
              <a
                key={node.id}
                href={node.href}
                role="link"
                tabIndex="0"
                aria-label={`Ouvrir la leçon : ${node.title}`}
                onMouseEnter={() => setFocusedNode(node.id)}
                onMouseLeave={() => setFocusedNode(null)}
                onFocus={() => setFocusedNode(node.id)}
                onBlur={() => setFocusedNode(null)}
                opacity={nodeOpacity(node)}
                className="group transition-opacity duration-300 focus:outline-none"
              >
                <title>{node.title}</title>
                <rect
                  x={position.x}
                  y={position.y}
                  width={nodeWidth}
                  height={nodeHeight}
                  rx="12"
                  className="fill-white stroke-slate-300 transition-colors group-hover:stroke-slate-500 group-focus:stroke-sky-600 group-focus:stroke-2 dark:fill-slate-900 dark:stroke-slate-700 dark:group-hover:stroke-slate-400 dark:group-focus:stroke-sky-400"
                />
                <rect
                  x={position.x}
                  y={position.y}
                  width="5"
                  height={nodeHeight}
                  rx="2.5"
                  fill={chapter.color}
                />
                <circle
                  cx={position.x + 25}
                  cy={position.y + nodeHeight / 2}
                  r="12"
                  fill={chapter.color}
                  opacity="0.16"
                />
                <text
                  x={position.x + 25}
                  y={position.y + nodeHeight / 2 + 4}
                  textAnchor="middle"
                  fill={chapter.color}
                  className="text-xs font-semibold"
                >
                  {node.position + 1}
                </text>
                <text
                  x={position.x + 46}
                  y={position.y + (labelLines.length === 1 ? 32 : 23)}
                  className="fill-slate-900 text-xs font-medium dark:fill-slate-100"
                >
                  {labelLines.map((line, index) => (
                    <tspan
                      key={`${node.id}-${index}`}
                      x={position.x + 46}
                      dy={index === 0 ? 0 : 17}
                    >
                      {line}
                    </tspan>
                  ))}
                </text>
              </a>
            )
          })}
        </svg>
      </div>

      <div className="space-y-8 md:hidden">
        {visibleChapters.map((chapter) => {
          const chapterNodes = nodes.filter((node) => node.chapter === chapter.id)

          return (
            <section key={chapter.id} aria-labelledby={`mobile-${chapter.id}`}>
              <div className="mb-3 flex items-center gap-3">
                <svg width="28" height="4" viewBox="0 0 28 4" aria-hidden="true">
                  <rect width="28" height="4" rx="2" fill={chapter.color} />
                </svg>
                <h2
                  id={`mobile-${chapter.id}`}
                  className="m-0 text-base font-semibold text-slate-950 dark:text-white"
                >
                  {chapter.label}
                </h2>
              </div>

              <ol className="m-0 divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 bg-white p-0 dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-950">
                {chapterNodes.map((node) => {
                  const prerequisiteTitles = node.prerequisites
                    .map((href) => nodes.find((candidate) => candidate.href === href)?.label)
                    .filter(Boolean)

                  return (
                    <li key={node.id} className="m-0 list-none p-0">
                      <a
                        href={node.href}
                        className="flex items-start gap-3 px-4 py-4 no-underline transition-colors hover:bg-slate-50 active:bg-slate-100 dark:hover:bg-slate-900 dark:active:bg-slate-800"
                      >
                        <span
                          className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold"
                          style={{ color: chapter.color, backgroundColor: `${chapter.color}20` }}
                        >
                          {node.position + 1}
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-slate-950 dark:text-white">
                            {node.label}
                          </span>
                          {prerequisiteTitles.length > 0 && (
                            <span className="mt-1 block text-xs leading-5 text-slate-500 dark:text-slate-400">
                              Après : {prerequisiteTitles.join(", ")}
                            </span>
                          )}
                        </span>
                      </a>
                    </li>
                  )
                })}
              </ol>
            </section>
          )
        })}
      </div>

      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-500 dark:text-slate-400">
        <span className="inline-flex items-center gap-2">
          <svg width="30" height="8" viewBox="0 0 30 8" aria-hidden="true">
            <path d="M 0 4 H 25" stroke="#94a3b8" strokeWidth="1.5" />
            <path d="M 24 1 L 30 4 L 24 7 z" fill="#94a3b8" />
          </svg>
          Prérequis vers leçon suivante
        </span>
        <span>Un clic ouvre directement la leçon.</span>
      </div>
    </div>
  )
}
