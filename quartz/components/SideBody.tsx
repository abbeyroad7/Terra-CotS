import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { joinSegments } from "../util/path"
import { pathToRoot } from "../util/path"


const SideBody: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  const sidebody = fileData.frontmatter?.sidebody
  
  const home = fileData.frontmatter?.home
  if (home) {
	   return <div id='QOTD'><iframe scrolling="no" frameborder="yes" clocktype="html5" style="overflow:hidden;border:2;margin:0;padding:10;width:300px;height:300px;" src="https://bestvibes.me/quote-of-the-day"></iframe></div>

  } else {
	  return null
  }
}

SideBody.css = `
.side-body {
	margin-top: 0rem;
	margin-left: 0rem;
	
	#QOTD {
		width:100%;
		text-align:left;
	}
}
`

export default (() => SideBody) satisfies QuartzComponentConstructor
