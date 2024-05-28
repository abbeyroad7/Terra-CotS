import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { classNames } from "../util/lang"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  linksSide: Record<string, string>
}

export default ((opts?: Options) => {
  const SideFooter: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    
    const linksSide = opts?.linksSide ?? []
    return (
      <sidefooter class={classNames(displayClass, "side-footer")}>
		<h3>Next Session: Tuesday, May 28 @6:30pm CT</h3>

		<h4 style="text-align: left; width:49%; display: inline-block;">Navigation</h4>
		<h4 style="text-align: right; width:50%;  display: inline-block;">v0.44.073</h4>
		
          {Object.entries(linksSide).map(([text, linksSide]) => (
              <br><a href={linksSide}>{text}</a></br>
          ))}
	<br><br>
		<div style="text-align: right; width:100%;  display: inline-block; font-size: 14px;">Due to an issue in Quartz, you will need to zoom out in your browser until both sidebars are visible.</div>
	</br></br>
      </sidefooter>
    )
  }

SideFooter.css = `
.side-footer {
  margin-top: -2rem;
  margin-left: -8rem;
  line-height: 55%;
  
  h3 {
	  line-height: 130%;
  }
  br {
	  line-height: 60%;
  }
}
`

  return SideFooter
}) satisfies QuartzComponentConstructor
