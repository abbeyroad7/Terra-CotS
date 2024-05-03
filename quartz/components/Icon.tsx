import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { joinSegments } from "../util/path"
import { i18n } from "../i18n"

const Icon: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  const iconPath = joinSegments(baseDir, "static/DesktopLogo.jpg")
  return (
        <img class="Logo" src={iconPath} />
  )
}

Icon.css = `
.Logo {
width: 16rem;
height: 8rem;

margin-top: 0rem;
margin-bottom: -0.5rem;
margin-left: 0rem;
}
`

export default (() => Icon) satisfies QuartzComponentConstructor
