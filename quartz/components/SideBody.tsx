import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { joinSegments } from "../util/path"
import { pathToRoot } from "../util/path"

const SideBody: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const title = fileData.frontmatter?.title
  //const baseDir = pathToRoot(fileData.slug!)
  const baseDir = pathToRoot(fileData.slug!)
  //const description = joinSegments(pathToRoot, "static/DesktopLogo.jpg")
  const description = joinSegments(baseDir, "/content/test.md")
  if (title) {
    return <h1 class={classNames(displayClass, "side-body")}>{title}<br><br><font size="3">{description}</font></br></br></h1>
  } else {
    return null
  }
}

SideBody.css = `
.side-body {
  margin-top: -1rem;
  margin-left: -8rem;
}
`

export default (() => SideBody) satisfies QuartzComponentConstructor
