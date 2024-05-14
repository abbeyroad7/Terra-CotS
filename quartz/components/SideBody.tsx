import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { joinSegments } from "../util/path"
import { pathToRoot } from "../util/path"


const SideBody: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  const sidebody = fileData.frontmatter?.sidebody
  
  const home = fileData.frontmatter?.home
  if (home) {
	   return <div style="left: 0px; border: 0px none; height: 370px; position: fixed; width: 270px; overflow: hidden; bottom: -67px;"><div style="overflow: hidden;"></div><iframe src="https://bestvibes.me/quote-of-the-day" scrolling="no" style="height: 300px; border: 0px none; width: 165px; margin-bottom: 0px; margin-left: 24px;"></iframe></div></div>

  } else {
	  return null
  }
}

SideBody.css = `
.side-body {
	margin-top: 0rem;
	margin-right: 10rem;
	
	#QOTD {
		width:100%;
		text-align:left;
		margin-right: 5rem;
	}
}
`

export default (() => SideBody) satisfies QuartzComponentConstructor
