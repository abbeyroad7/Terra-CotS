import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { joinSegments } from "../util/path"
import { pathToRoot } from "../util/path"


const SideBody: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  const sidebody = fileData.frontmatter?.sidebody
  
  const home = fileData.frontmatter?.home
  if (home) {
	   return (
	   <sidebody class={classNames(displayClass, "side-body")}> 
			<div style="padding:15px;">
			<iframe src="https://bestvibes.me/quote-of-the-day"></div>
	   </sidebody>
	)
  } else {
	  return null
  }
}

SideBody.css = `
.side-body {
	margin-top: 0rem;
	margin-right: 0rem;
	
}
`

export default (() => SideBody) satisfies QuartzComponentConstructor
