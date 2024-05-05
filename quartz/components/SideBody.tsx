import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const SideBody: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const title = fileData.frontmatter?.title
  if (title) {
    return <h1 class={classNames(displayClass, "side-body")}>{title}</h1>
  } else {
    return null
  }
}

SideBody.css = `
.article-title {
  margin-bottom: 2rem;
}
`

export default (() => SideBody) satisfies QuartzComponentConstructor
