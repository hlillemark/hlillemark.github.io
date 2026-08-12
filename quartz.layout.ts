import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { joinSegments } from "./quartz/util/path"
import { FileTrieNode } from "./quartz/util/fileTrie"

function sortPages(a: FileTrieNode, b: FileTrieNode): number {
  const pageOrder = ["Publications", "Research Interests", "Library", "Miscellaneous Obsessions"]
  const aIndex = pageOrder.indexOf(a.displayName)
  const bIndex = pageOrder.indexOf(b.displayName)

  if (aIndex !== -1 || bIndex !== -1) {
    if (aIndex === -1) return 1
    if (bIndex === -1) return -1
    return aIndex - bIndex
  }

  if (a.isFolder !== b.isFolder) return a.isFolder ? -1 : 1
  return a.displayName.localeCompare(b.displayName, undefined, {
    numeric: true,
    sensitivity: "base",
  })
}

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      // TODO: Fill this in with my links.
      "hlillemark at ucsd dot edu": "mailto:hlillemark@ucsd.edu",
      "google scholar": "https://scholar.google.com/citations?user=X_mcf_EAAAAJ&hl=en",
      github: "https://github.com/hlillemark",
      linkedin: "https://linkedin.com/in/hliillemark",
      twitter: "https://twitter.com/hansenlillemark",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.ProfileHeader({
        src: joinSegments("static", "headshot.png"),
        name: "Hansen Jin Lillemark",
        subtitle: "PhD Student, UC San Diego",
        alt: "Hansen Lillemark",
      }),
      condition: (page) => page.fileData.slug === "index",
    }),
    Component.ConditionalRender({
      component: Component.DesktopOnly(Component.Breadcrumbs()),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    // Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.Darkmode(),
    Component.Explorer({ desktopCollapsible: false, showHome: true, sortFn: sortPages }),
    Component.ConditionalRender({
      component: Component.MobileOnly(
        Component.MobileTopBarTitle({ text: "Hansen Jin Lillemark" }),
      ),
      condition: (page) => page.fileData.slug === "index",
    }),
    Component.ConditionalRender({
      component: Component.MobileOnly(Component.Breadcrumbs()),
      condition: (page) => page.fileData.slug !== "index",
    }),
  ],
  right: [],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.DesktopOnly(Component.Breadcrumbs()),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  left: [
    Component.Darkmode(),
    Component.Explorer({ desktopCollapsible: false, showHome: true, sortFn: sortPages }),
    Component.MobileOnly(Component.Breadcrumbs()),
  ],
  right: [],
}
