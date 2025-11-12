import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import {joinSegments} from "./quartz/util/path"

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
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    // Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        // { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [
    Component.ConditionalRender({
      // CUSTOM for visualizing the profile image
      component: Component.ProfileImage({
        src: joinSegments("static", "headshot.png"),
        alt: "Hansen Lillemark",
        size: "160px",
      }),
      condition: (page) => page.fileData.slug == "index",
    }),
    // Component.Graph(),
    // Component.DesktopOnly(Component.TableOfContents()),
    // Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
