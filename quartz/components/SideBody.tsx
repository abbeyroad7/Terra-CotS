import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { joinSegments } from "../util/path"
import { pathToRoot } from "../util/path"


const SideBody: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  const sidebody = fileData.frontmatter?.sidebody
  
  const home = fileData.frontmatter?.home
  if (home) {
	   return <h1 class={classNames(displayClass, "side-body")}>		<iframe src="https://bestvibes.me/quote-of-the-day" title="QOTD" height="300" width="300" ></iframe>		</h1>
  } else {
	  return null
  }
}

SideBody.css = `
.side-body {
	margin-top: -3rem;
	margin-left: -6rem;
}
`

export default (() => SideBody) satisfies QuartzComponentConstructor
