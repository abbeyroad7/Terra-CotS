import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      "Discord": "https://discord.gg/uTk4Dyz8CB",
	  "Foundry": "https://foundryredirect.com/tcs",
	  "Memories": "https://abbeyroad7.github.io/Terra-CoTs/Memories",
	  "Session Notes": "https://abbeyroad7.github.io/Terra-CoTs/Sessions",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
	Component.Footer({
		links: {
		"Beastiary": "https://abbeyroad7.github.io/Terra-CoTs/World/Beastiary/",
		"Dictionary": "https://abbeyroad7.github.io/Terra-CoTs/World/Dictionary/",
		"History": "https://abbeyroad7.github.io/Terra-CoTs/World/History/",
		},
	}),
    Component.Breadcrumbs(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
