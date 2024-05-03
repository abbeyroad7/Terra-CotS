import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
  Component.PageTitle(),
  ],
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
    Component.Breadcrumbs(),
    Component.TagList(),
  ],
  left: [
    //Component.MobileOnly(Component.Spacer()),
	
	Component.DesktopOnly(Component.Icon()),
	Component.DesktopOnly(Component.Graph()),
	Component.DesktopOnly(Component.RecentNotes()),
    //Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.Search(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
  Component.Breadcrumbs(),
  ],
  right: [
    //Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    //Component.DesktopOnly(Component.Explorer()),
  ],
  left: [
	Component.DesktopOnly(Component.Backlinks()),
	Component.DesktopOnly(Component.Graph()),
  ],
}
