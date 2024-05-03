import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { joinSegments } from "../util/path"
import { i18n } from "../i18n"

const Icon: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.Icon ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  const iconPath = joinSegments(baseDir, "static/DesktopLogo.jpg")
  return (
    <h1>
        <img class="Logo" src={iconPath} />
    </h1>
  )
}

Icon.css = `
.Logo {
width: 16rem;
height: 8rem;

margin-top: -2rem;
margin-bottom: -1rem;
margin-left: 0rem;

@media screen and (min-width: 768px) {
    .neighbourhood-img img {display:none;}
}

}
`

export default (() => Icon) satisfies QuartzComponentConstructor