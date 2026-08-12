import { Element, ElementContent, Root } from "hast"
import { QuartzTransformerPlugin } from "../types"
import { visit } from "unist-util-visit"

interface Options {
  links: Record<string, string>
}

function hasClass(node: Element, className: string): boolean {
  const classes = (node.properties.className ?? []) as string[]
  return classes.includes(className)
}

function normalizeUrl(url: string): string {
  const trimmed = url.trim()
  if (/^[a-z][a-z\d+.-]*:/i.test(trimmed)) return trimmed
  if (trimmed.startsWith("//")) return `https:${trimmed}`
  return `https://${trimmed}`
}

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function linkNames(element: Element, urls: Map<string, string>, namePattern: RegExp) {
  for (let index = 0; index < element.children.length; index++) {
    const child = element.children[index]

    if (child.type === "element") {
      if (child.tagName !== "a") linkNames(child, urls, namePattern)
      continue
    }

    if (child.type !== "text") continue

    const replacements: ElementContent[] = []
    let lastIndex = 0
    namePattern.lastIndex = 0

    for (const match of child.value.matchAll(namePattern)) {
      const start = match.index
      const name = match[0]
      if (start > lastIndex) {
        replacements.push({ type: "text", value: child.value.slice(lastIndex, start) })
      }

      replacements.push({
        type: "element",
        tagName: "a",
        properties: {
          href: urls.get(name),
          className: ["coauthor-link", "external"],
          target: "_blank",
          rel: ["noopener", "noreferrer"],
        },
        children: [{ type: "text", value: name }],
      })
      lastIndex = start + name.length
    }

    if (lastIndex === 0) continue
    if (lastIndex < child.value.length) {
      replacements.push({ type: "text", value: child.value.slice(lastIndex) })
    }

    element.children.splice(index, 1, ...replacements)
    index += replacements.length - 1
  }
}

export const CoauthorLinks: QuartzTransformerPlugin<Options> = (opts) => {
  return {
    name: "CoauthorLinks",
    htmlPlugins() {
      return [
        () => {
          return (tree: Root) => {
            const urls = new Map(
              Object.entries(opts?.links ?? {})
                .filter(([, url]) => url.trim().length > 0)
                .map(([name, url]) => [name, normalizeUrl(url)]),
            )
            if (urls.size === 0) return

            const names = [...urls.keys()].sort((a, b) => b.length - a.length)
            const namePattern = new RegExp(`\\b(?:${names.map(escapeRegex).join("|")})\\b`, "g")

            visit(tree, "element", (node: Element) => {
              if (hasClass(node, "pub-text")) linkNames(node, urls, namePattern)
            })
          }
        },
      ]
    },
  }
}
