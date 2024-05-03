import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { joinSegments } from "../util/path"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  const iconPath = joinSegments(baseDir, "static/Logo.jpg")
  return (
    <h1>
      <a href={baseDir}>
        <img class="Logo" src={iconPath} alt={title}/>
      </a>
    </h1>
  )
}

Icon.css = `
.page-title {
  margin-bottom: 3rem;
  max-height: 0rem;
}
.Logo {
width: 16rem;
height: 8rem;

margin-top: -2rem;
margin-bottom: -1rem;
margin-left: 0rem;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
