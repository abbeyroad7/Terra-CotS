import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { joinSegments } from "../util/path"
import { pathToRoot } from "../util/path"


const SideBody: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  const sidebody = fileData.frontmatter?.sidebody
  const sidebody2 = fileData.frontmatter?.sidebody2
  const sidebody3 = fileData.frontmatter?.sidebody3
  
  const home = fileData.frontmatter?.home
  if (home) {
	   return <h1 class={classNames(displayClass, "side-body")}>		<iframe src="https://bestvibes.me/quote-of-the-day"</iframe>		</h1>
  } else {
	  return null
  }
}

SideBody.css = `
.side-body {
  margin-top: 0rem;
  margin-left: 0rem;
}
`

export default (() => SideBody) satisfies QuartzComponentConstructor
